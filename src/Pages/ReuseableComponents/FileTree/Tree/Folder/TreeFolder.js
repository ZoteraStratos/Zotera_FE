import React, { useState, useEffect } from "react";
import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";

import {
  ActionsWrapper,
  Collapse,
  StyledName,
  VerticalLine,
} from "../Tree.style";
import { StyledFolder } from "./TreeFolder.style";

import { FOLDER } from "../state/constants";
import { useTreeContext } from "../state/TreeContext";
import { PlaceholderInput } from "../TreePlaceholderInput";

const FolderName = ({ isOpen, name, handleClick }) => (
  <StyledName onClick={handleClick}>
    {isOpen ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}
    &nbsp;&nbsp;{name}
  </StyledName>
);

const Folder = ({ id, name, children, node }) => {
  const { dispatch, onNodeClick } = useTreeContext();
  const [isEditing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    setChilds([children]);
  }, [children]);

  const commitFolderEdit = (name) => {
    dispatch({ type: FOLDER.EDIT, payload: { id, name } });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setChilds([children]);
  };

  const handleNodeClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      onNodeClick({ node });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [node]
  );

  return (
    <StyledFolder id={id} onClick={handleNodeClick} className="tree__folder">
      <VerticalLine>
        <ActionsWrapper>
          {isEditing ? (
            <PlaceholderInput
              type="folder"
              style={{ paddingLeft: 0 }}
              defaultValue={name}
              onCancel={handleCancel}
              onSubmit={commitFolderEdit}
            />
          ) : (
            <FolderName
              name={name}
              isOpen={isOpen}
              handleClick={() => setIsOpen(!isOpen)}
            />
          )}
        </ActionsWrapper>
        <Collapse className="tree__folder--collapsible" isOpen={isOpen}>
          {childs}
        </Collapse>
      </VerticalLine>
    </StyledFolder>
  );
};

export { Folder, FolderName };
