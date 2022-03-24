import React, { useState } from 'react';
import { styled } from '@mui/system';
import fileImg from 'assets/images/icon_file.png';
import folderCloseImg from 'assets/images/icon_folder_close.png';
import folderOpenImg from 'assets/images/icon_folder_open.png';

const StyledTree = styled('div')({
  lineHeight: 1.5
});

const StyledFile = styled('div')({
  paddingLeft: '20px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '& span': {
    marginLeft: '5px'
  }
});

const StyledFolder = styled('div')({
  paddingLeft: '20px',
  cursor: 'pointer',
  '& .folder-label': {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: '5px'
    }
  }
});

const Collapsible = ({ isOpen, children }) => {
  return (
    <>
      <div
        style={{
          height: isOpen ? 'auto' : 0,
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
    </>
  )
}

const File = ({ name }) => {
  const ext = name.split(".")[1];

  return (
    <StyledFile>
      <img src={fileImg} alt="" />
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder-label" onClick={handleToggle}>
        {isOpen && <img src={folderOpenImg} />}
        {!isOpen && <img src={folderCloseImg} />}
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }) => {
  if (!data) {
    return null;
  }
  return data.map((item, index) => {
    if (item.type === "file") {
      return <File key={'file_' + index} name={item.name} />;
    }
    if (item.type === "folder") {
      return (
        <Folder key={'folder' + index} name={item.name}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};

const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

export default Tree;