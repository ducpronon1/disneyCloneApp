import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Disney’s “Raya and the Last Dragon,” available this week in limited
          theatrical release and on Disney+ for an extra fee, is a wonderful
          adventure
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  /* padding: 0 calc(3.5vw + 5px); */
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 90%;
  margin-top: 10px;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  border-radius: 4px;
  color: #f9f9f9;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
