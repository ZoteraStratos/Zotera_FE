import React, { useReducer, useLayoutEffect } from "react";
import { v4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { useDidMountEffect } from "./../utils";
import { TreeContext, reducer } from "./state";

import { StyledTree } from "../Tree/Tree.style";
import { Folder } from "../Tree/Folder/TreeFolder";
import { File } from "../Tree/File/TreeFile";

const Tree = ({ children, data, onNodeClick, onUpdate , handleSelectedFilePath }) => {
  const [state, dispatch] = useReducer(reducer, data);

  useLayoutEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, [data]);



  const isImparative = data && !children;

  return (
    <ThemeProvider theme={{ indent: 20 }}>
      <TreeContext.Provider
        value={{
          isImparative,
          state,
          dispatch,
          onNodeClick: (node) => {
            onNodeClick && onNodeClick(node);
          },
        }}
      >
        <StyledTree>
          {isImparative ? (
            <TreeRecusive data={state} parentNode={state}  handleSelectedFilePath={handleSelectedFilePath}/>
          ) : (
            children
          )}
        </StyledTree>
      </TreeContext.Provider>
    </ThemeProvider>
  );
};

const TreeRecusive = ({ data, parentNode ,handleSelectedFilePath}) => {
  return data.map((item) => {
    item.parentNode = parentNode;
    if (!parentNode) {
      item.parentNode = data;
    }
    if (!item.id) item.id = v4();

    if (item.type === "file") {
      return <File key={item.id} id={item.id} name={item.name} node={item}  handleSelectedFilePath={handleSelectedFilePath} />;
    }
    if (item.type === "folder") {
      return (
        <Folder key={item.id} id={item.id} name={item.name} node={item}>
          <TreeRecusive parentNode={item} data={item.files}  handleSelectedFilePath={handleSelectedFilePath} />
        </Folder>
      );
    }
  });
};

Tree.File = File;
Tree.Folder = Folder;

export default Tree;
