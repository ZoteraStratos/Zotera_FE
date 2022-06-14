import { createContext, useContext, useEffect, useState } from "react";
import { SOCKET_URL } from "../constants";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const url = new URL(SOCKET_URL);
    const socketObj = new WebSocket(url);
    console.log(socketObj);
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
