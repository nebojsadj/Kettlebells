import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 50px;
  padding: 2em 5em;

  h2 {
    font-size: 45px;
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

export const Button = styled.button`
  background-color: #536dfe;
  color: white;
  font-size: 20px;
  padding: 0.5em 1em;
  margin-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #283593;
    color: white;
  }
`;

export const styles = {
  img: {
    width: "150px",
  },
};
