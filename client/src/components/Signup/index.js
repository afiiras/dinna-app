import React from "react";
import { useState } from "react";
import axios from "axios";
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
  Span,
} from "../Signup/SignupElement";

const SignUp = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": " application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/signup",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dinna</Icon>
          <FormContent>
            <Form onSubmit={registerHandler}>
              <FormH1>Join Us</FormH1>
              {error && <Span className="error-message">{error}</Span>}
              <FormInput
                type="text"
                required
                id="name"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormInput type="date" />
              <FormInput
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormInput
                type="password"
                required
                id="confirmpassword"
                autoComplete="true"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FormBtnLink type="submit">Sign Up</FormBtnLink>
              <Span className="register-screen__subtext">
                Already have an account?
              </Span>
              <TextLink to="/signin">Sign In</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
