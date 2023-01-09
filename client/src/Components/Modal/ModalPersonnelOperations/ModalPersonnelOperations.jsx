import React, { useState } from 'react';

const ModalPersonnelOperations = ({ userInfo }) => {
  console.log(userInfo);

  return (
    <>
      <div className="name">{userInfo?.attributes?.FirstName}</div>
    </>
  );
};

export default ModalPersonnelOperations;
