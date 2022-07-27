import { elementType } from 'prop-types';
import React, { useEffect, useState } from 'react';

const useClick = (onClick) => {
  if (typeof onClick !== 'function') return;
  // connection to <h1></h1> by useRef
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      // should remove eventListener
      if (element.current) {
        element.current.removeEventListner('click', onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log('Hello');
  const name = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={name}>Hello</h1>
    </div>
  );
}
