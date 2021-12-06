import styled from "styled-components";

export const LinkedInContainer = styled.div`
  padding: 3rem 0;
  background-color: #0072b1;

  h2 {
    font-size: 35px;
    color: ${props => props.theme.text.contrast};
  }
`

export const Button = styled.button`
  height: 50px;
  width: 150px;

  transition: all 200ms;

  margin-top: 2rem;
  cursor: pointer;
  font-size: 22px;
  font-family: 'Montserrat Alternates';
  font-weight: 500;
  color: #fff;

  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 2px;

  &:hover {
    background-color: #fff;
    color: #0072b1;
  }
`;