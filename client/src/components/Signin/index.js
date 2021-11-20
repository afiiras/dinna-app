import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
  TextLink,
  LinkF,
  Span,
  Error,
} from "./SigninElement";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const data = await axios.post(
        "/api/auth/signin",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      // history.push("/");
    } catch (error) {
      setError(error.response.user.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <Container className="container">
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form onSubmit={loginHandler}>
              <FormH1 className="title">Sign in to your account</FormH1>
              <Error>
                {error && <span className="error-message">{error}</span>}
              </Error>
              <FormLabel className="label" htmlFor="email">
                Email
              </FormLabel>
              <FormInput
                type="email"
                required
                id="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1}
              />

              <FormLabel className="label" htmlFor="password">
                Password:{" "}
              </FormLabel>
              <FormInput
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}
              />
              <FormBtnLink type="submit">Continue</FormBtnLink>
              <LinkF
                to="/ForgetPassword"
                className="login-screen__forgotpassword"
              >
                Forgot Password?
              </LinkF>
              <Span>Don't have an account?</Span>
              <TextLink to="/signup">Sign Up</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
