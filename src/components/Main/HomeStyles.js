import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box1 = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 50px;
  padding: 2em 5em;

  h2 {
    font-size: 45px;
  }
`;

export const Box2 = styled.div`
  padding: 2em;

  img {
    width: 600px;
  }
`;

export const Hr = styled.hr`
  width: 60%;
  margin-top: 30px;
  border: 3px double black;
`;

export const P = styled.p`
  font-size: 22px;
  padding: 3em;
`;

export const Button1 = styled.button`
  background-color: #536dfe;
  color: white;
  font-size: 20px;
  padding: 1em 2em;
  margin-top: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #283593;
    color: white;
  }
`;

export const Button2 = styled(Button1)`
  padding: 1em 3em;
`;
