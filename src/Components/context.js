import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SOCKET_URL } from "../constants";
import { Subject } from "rxjs";

const SocketContext = createContext();
const DataContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketObj = new WebSocket(SOCKET_URL);
    setSocket(socketObj);
    return () => {
      socketObj.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);

export const DataProvider = ({ children }) => {
  const socket = useSocketContext();
  const [data, setData] = useState({});

  const register = useCallback((name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: new Subject(),
    }));
  }, []);

  const unregister = useCallback((name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: undefined,
    }));
  }, []);

  if (socket) {
    socket.onmessage = function (event) {
      const {
        IotData: {
          payload: { metrics },
        },
      } = JSON.parse(event.data);
      metrics.forEach((metric) => {
        const subject = data[metric.name];
        if (subject) {
          subject.next(metric);
        }
      });
    };
  }

  return (
    <DataContext.Provider
      value={{
        register,
        unregister,
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => useContext(DataContext);
