import React from 'react';
import './style.scss';

const Modal = ({ children, ...props }) => (
  <div>
    <div className="Backdrop" {...props} />
    <div className="Modal">
      { children }
    </div>
  </div>
);


export default Modal;
