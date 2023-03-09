
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AudioPlayer from "./AudioPlayer";



const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [title, setTitle] = React.useState("Transitioning...");
    
    const showModal = () => {
      setIsOpen(true);
      setTitle("audiOhm");
      document.body.style.backgroundColor = "white";
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    const startTimer = () => {
      setStartTime(Date.now());
    };
  
    const modalLoaded = () => {
      setEndTime(Date.now());
    };
  
    const onExit = () => {
      setTitle("Goodbye 😀");
    };
  
    const onExited = () => {
      document.body.style.backgroundColor = "transparent";
    };
  
    return (
      <>
        <button className="border nav-background6 shadow-slate-600 shadow-xl  rounded-full hover:text-rose-400 hover:shadow-slate-900 mt-1 px-1" onClick={showModal}>Jeel</button>
        <Modal
          show={isOpen}
          onHide={hideModal}
          onEnter={startTimer}
          onEntered={modalLoaded}
          onExit={onExit}
          onExited={onExited}
          className="nav-background2 h-10 "
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='font-extralight'>Jeel makes hits and thats that.

          <AudioPlayer/>
          
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Close</button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default About;