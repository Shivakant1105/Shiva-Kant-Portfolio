import styled from "styled-components";

export const Div = styled.div`
  width: 600px;
  height: 500px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* or adjust height for smaller screens */
  }
  @media (max-width: 567px) {
    width: 100%;
    height: auto; /* or adjust height for smaller screens */
  }
`;
