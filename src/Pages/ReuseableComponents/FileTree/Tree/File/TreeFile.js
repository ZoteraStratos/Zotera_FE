import { useCallback, useRef } from "react";
import { AiOutlineFile } from "react-icons/ai";

import { StyledFile } from "../File/TreeFile.style";
import { useTreeContext } from "../state/TreeContext";
import { ActionsWrapper, StyledName } from "../Tree.style";

import FILE_ICONS from "../../Tree/FileIcons";

const File = ({ name, id, node, handleSelectedFilePath }) => {
  const { onNodeClick } = useTreeContext();

  const ext = useRef("");

  let splitted = name?.split(".");
  ext.current = splitted[splitted.length - 1];

  const handleNodeClick = useCallback(
    (e) => {
      e.stopPropagation();
      onNodeClick({ node });
      handleSelectedFilePath(node.filePath);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
