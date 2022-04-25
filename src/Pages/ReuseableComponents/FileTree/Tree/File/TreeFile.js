import React, { useRef, useState } from "react";
import { AiOutlineFile, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { StyledFile } from "../File/TreeFile.style";
import { useTreeContext } from "../state/TreeContext";
import { ActionsWrapper, StyledName } from "../Tree.style";
import { PlaceholderInput } from "../TreePlaceholderInput";

import {FILE} from '../state/constants' 
import FILE_ICONS from "../../Tree/FileIcons";

const File = ({ name, id, node , handleSelectedFilePath}) => {
  const { dispatch, isImparative, onNodeClick } = useTreeContext();

  const ext = useRef("");

  let splitted = name?.split(".");
  ext.current = splitted[splitted.length - 1];



  const handleNodeClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      onNodeClick({ node });
      handleSelectedFilePath(node.filePath)
      
    },
    [node]
  );


  return (
    <StyledFile onClick={handleNodeClick} className="tree__file">
        <ActionsWrapper>
          <StyledName>
            {FILE_ICONS[ext.current] ? (
              FILE_ICONS[ext.current]
            ) : (
              <AiOutlineFile />
            )}
            &nbsp;&nbsp;{name}
          </StyledName>
        </ActionsWrapper>
    </StyledFile>
  );
};

export { File };
