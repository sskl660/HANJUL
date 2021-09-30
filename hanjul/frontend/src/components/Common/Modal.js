// import { Component } from 'react';
import './Modal.css';

function Modal (props) {

  const close = () =>{
    const modal = document.querySelector('.modal');
    modal.style.display = "none";
  }
 
  return (
    <div class="modal" onClick={close}> 
      <div class="modal-border">
        <div class="modal_body">
          <img class="modal_img_left" src="../../image/flower-rev.png" alt="" />
          <div class="modal_content">{props.msg}</div>
          <img class="modal_img_right" src="../../image/nav-flower-right.png" alt="" />
        </div> 
      </div>
    </div>
  );
}

export default Modal;