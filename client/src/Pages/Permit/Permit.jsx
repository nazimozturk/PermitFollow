import React, { useEffect, useState } from 'react';
import './Permit.scss';

const Permit = () => {
  const [isActive, setIsActive] = useState({
    id: '',
  });
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };

  return (
    <>
      <div className="permit">abc</div>
    </>
  );
};

export default Permit;
