import React from 'react';

const PreviewPicture = ({todo}) => {
//const {projects} = this.props;
  return (
    <img class="responsive-img"  src={todo.imageURL} />
  );
};

export default PreviewPicture;
