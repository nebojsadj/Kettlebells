import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";

export const Container1 = styled.div`
  background: #e8eaf6;
  color: black;
  padding: 1em;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Check = styled(GiCheckMark)`
  color: #536dfe;
`;

export const Box = styled.div`
  width: 30%;
  padding: 3em 1em;
  img {
    width: 200px;
  }
`;

export const H4 = styled.h4`
  font-size: 30px;
  text-align: center;
  margin-top: 70px;
`;

export const P = styled.p`
  font-size: 22px;
  padding: 1em 2em;
`;
