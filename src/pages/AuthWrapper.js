import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

// wrapper entire app
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Cargando...</h1>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1> {error.message} </h1>
      </Wrapper>
    );
  }
// display children(entire app) if there aren't errors or isLoading
  return <>{ children }</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
