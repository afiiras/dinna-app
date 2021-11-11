import React from "react";
import Addash from "../components/Dashboard/admin";
import UserModal from "../components/Dashboard/admin/userModal";
import { Container } from "react-strap";
const Admin = () => {
  return (
    <>
      <Addash />
      <Container>
        <UserModal />
      </Container>
    </>
  );
};

export default Admin;
