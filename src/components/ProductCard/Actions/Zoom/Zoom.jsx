import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from 'components/Modal/Modal.jsx';


const Zoom = ({className, zoomIconUrl, imgUrl, imgAltText}) => {
  let [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className={ `zoom ${ className }` } onClick={ openModal }>
        <img src={ zoomIconUrl } alt="zoom icon" />
      </div>

      {
        isModalOpen && <Modal
          isOpen={ isModalOpen }
          closeModal={ closeModal }
          imgUrl={ imgUrl }
          imgAltText={ imgAltText }
        />
      }
    </>
  );
}

const StyledZoom = styled(Zoom)`
  margin-bottom: 1ex;
  cursor: pointer;
`;

export default StyledZoom;
