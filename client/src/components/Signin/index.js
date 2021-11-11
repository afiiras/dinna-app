import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBtnLink,
  Text,
  TextLink,
} from "./SigninElement";


const SignIn = () => {
  return (
    <>
      <Container className="container">
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form action="#">
              <FormH1 className="title">Sign in to your account</FormH1>
                <p
                  style={{
                    color: "lightgreen",
                    fontSize: "10px",
                  }}
                  className="errors"
                >
                </p>
              )
              <FormLabel className="label" htmlFor="for">
                Email
              </FormLabel>
              <FormInput
                type="email"
                name="email"
              />
                <p
                  style={{
                    color: "lightgreen",
                    fontSize: "10px",
                  }}
                  className="errors"
                >
                </p>
              )
              <FormLabel className="label" htmlFor="for">
                Password
              </FormLabel>
              <FormInput
                type="password"
                name="password"
              />
              <FormBtnLink
                to="/dashboard"
                type="submit"
              >
                Continue
              </FormBtnLink>
              <Text>Forgot password</Text>
              <TextLink to="/signup">Sign Up</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
