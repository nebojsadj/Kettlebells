import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 400px;

  img {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 1.3em;
    }
    li {
      font-size: 1.1em;
    }
  }
  @media screen and (max-width: 375px) {
    h2 {
      font-size: 1.2em;
    }
  }
`;

export const ListContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1024px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 768px) {
    padding-top: 3em;
    padding-bottom: 4em;
    flex-direction: column;
    justify-content: center;

    ul {
      text-align: center;
    }
  }
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
