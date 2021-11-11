import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../../../actions/userAction";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UUserReduxProps, IShoppingList } from "../types/interfaces";

const ShoppingList = ({
  getUsers,
  item,
  isAuthenticated,
  deleteUser,
} = IShoppingList) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const { items } = item;
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="Users-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {isAuthenticated ? (
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(_id)}
                  >
                    &times;
                  </Button>
                ) : null}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

const mapStateToProps = (state = UUserReduxProps) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(ShoppingList);
