import React from "react";
import { Button, Modal } from "react-bootstrap";

export const CreateShopModal = (props: any) => {
  const {showModal,showHandler} = props;
  return (
    <div className="modal" style={{ display: "block", position: "initial" }}>
      <Modal show={showModal} onHide={null} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={e=>showHandler(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={null}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
