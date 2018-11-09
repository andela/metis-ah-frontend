import React, { Fragment } from 'react';
import './style.scss';

const Modal = ({ children, ...props }) => (
  <Fragment>
    <div className="Backdrop" {...props}>
      <div className="Modal">
        {children}
      </div>
    </div>
  </Fragment>
);


export default Modal;
