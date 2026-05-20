import React from 'react';

const FunctionalComponent = () => {
  const value = window.prompt("1 or 2");
  if (value === '1') {
    return <h1>خوش اومدی</h1>
    
  }else{
    return <h1>لطفا وارد شو</h1>
  }
};

export default FunctionalComponent;