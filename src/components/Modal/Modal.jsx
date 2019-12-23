import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const CustomModal = ({className, isOpen, closeModal, imgUrl, imgAltText}) => {
  return(
    <Modal
      className={ `${ className } modal-container mw-100 m-0` }
      isOpen={ isOpen }
    >
      <ModalBody className="w-100 text-center p-0">
        <Button close onClick={ closeModal } />

        <img
          className="img-fluid"
          src={ imgUrl }
          alt={ imgAltText }
        />
      </ModalBody>
    </Modal>
  );
}

const StyledCustomModal = styled(CustomModal)`
  button.close {
    position: absolute;
    right: 1%;
    font-size: 70px;
    line-height: 70px;
    color: #000;
  }
  .modal-body > img {
    height: 100vh;
    width: auto;
    margin-top: 0;
  }
`;

export default StyledCustomModal;
