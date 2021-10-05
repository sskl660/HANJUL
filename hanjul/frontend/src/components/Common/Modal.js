// import { Component } from 'react';
import './Modal.css';

function Modal (props) {

  const close = () =>{
    const modal = document.querySelector('.modal');
    modal.style.display = "none";
  }
 
  return (
    <div className="modal" onClick={close}> 
      <div className="modal-border">
        <div className="modal_body">
          <img className="modal_img_left" src="../../image/flower-rev.png" alt="" />
          <div className="modal_content">{props.msg}</div>
          <img className="modal_img_right" src="../../image/nav-flower-right.png" alt="" />
          <button className="yes">예</button>
          <button type="cancel" className="no">아니오</button>
        </div> 
      </div>
    </div>
  );
}

export default Modal;