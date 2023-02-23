import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Inputs } from '../model';
import NewPost from './NewPost';

interface MyModalProps {
  onAddPost: (postData: Inputs) => void;
}

const MyModal: React.FC<MyModalProps> = ({ onAddPost }: MyModalProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='post-header  border-bottom border-2  d-flex justify-content-between align-items-center'>
        <h1 className='post-heading fw-bold'>
          <i className='bx bxs-message-square-detail'> </i> React Poster
        </h1>
        <div>
          <Button className='add-btn border-0 fw-bolder ' onClick={handleShow}>
            <i className='bx bxs-comment-add mx-1'></i> ADD
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className='modal text-light '>
        <Modal.Header className='border-0 p-2 px-3'>
          <Modal.Title>Add Your Post</Modal.Title>
          <i className='bx bx-window-close bx-tada-hover' onClick={handleClose}></i>
        </Modal.Header>
        <Modal.Body className='pb-3 ps-3 pe-3 pt-1'>
          <NewPost onAddPost={onAddPost} handleClose={handleClose} /> 
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
