import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../flux/actions/userActions";
import { UUserReduxProps, UUserModal, ITarget } from "../types/interfaces";

const UserModal = ({ isAuthenticated, addItem } = UUserModal) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const handleToggle = () => setModal(!modal);

  const handleChangeName = (e = ITarget) => setName(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
    };

    // Add item via addItem action
    addItem(newItem);
    // Close modal
    handleToggle();
  };

  return (
    <div>
      {isAuthenticated ? (
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={handleToggle}
        >
          Add Item
        </Button>
      ) : (
        <h4 className="mb-3 ml-4">Please log in to manage items</h4>
      )}

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="user">user</Label>
              <Input
                type="text"
                name="name"
                id="user"
                placeholder="Add User"
                onChange={handleChangeName}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state = UUserReduxProps) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(UserModal);
