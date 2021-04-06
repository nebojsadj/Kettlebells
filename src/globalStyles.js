import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0; padding: 0;
    }
    .active{color:white; border-bottom: 2px solid white}
`;

export default GlobalStyle;
