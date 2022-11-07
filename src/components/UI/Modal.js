import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// backdrop for the modal
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

// the modal content
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {/* using the portal feature to port the bacdrop and the modal content to create the modal feature */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
}
