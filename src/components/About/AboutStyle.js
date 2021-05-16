import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 900px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } ;
`;
export const Heading = styled.h2`
  margin: 50px auto;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.4em;
`;
export const BoxLeft = styled.div`
  flex: 50%;
  padding: 5em;
`;

export const BoxRight = styled.div`
  display: flex;
  flex: 50%;
  padding: 5em;
  img {
    width: 100%;
    display: flex;
    align-self: center;
  }
`;
