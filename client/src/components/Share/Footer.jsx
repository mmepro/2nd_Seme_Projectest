import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  width: 100%;
  padding: 1vh 0;
  position: relative;
  background-color: #f0f0f0;
  text-align: center;
  font-size: 0.8rem;
  color: #333;
  

`;

const FooterLink = styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2023 MOVIEPARTNER. All Rights Reserved.
      <br />
      Check out our GitHub repositories at :
      <FooterLink href="https://github.com/orgs/T-G-I-Web/repositories" target="_blank" rel="noopener noreferrer">
        T-G-I-Web
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
