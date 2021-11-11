import React from "react";
import {
  Container,
  Form,
  FormBtnLink,
  FormContent,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  TextLink,
} from "../Signup/SignupElement";

const Index = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Join Us</FormH1>
              <FormInput type="name" placeholder="Fullname" />
              <FormInput type="name" placeholder="Username" />
              <FormInput type="date" />
              <FormInput type="email" placeholder="Email" />
              <FormInput type="password" id="pswd1" placeholder="Password" />
              <FormInput
                type="password"
                id="pswd2"
                placeholder="Confirm Password"
              />
              <FormBtnLink to="/signin" type="submit">
                Sign Up
              </FormBtnLink>
              <TextLink to="/signin">Sign In</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Index;
