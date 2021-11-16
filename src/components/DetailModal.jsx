import React, { useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { clientContext } from '../contexts/ClientContext';

const DetailModal = (props) => {
    const {getDetails, productDetails} = useContext(clientContext)
    const params = useParams()

    console.log(getDetails());
    return (
    <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {/* {productDetails.name} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
    );
};

export default DetailModal;