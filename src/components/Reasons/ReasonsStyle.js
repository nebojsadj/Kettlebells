import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 400px;
`;

export const ListContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Heading = styled.h2`
  padding-top: 2.5em;
  text-align: center;
  font-size: 2em;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  font-size: 1.4em;
  padding-top: 0.5em;
`;

export const Check = styled(GiCheckMark)`
  display: inline-block;
`;
