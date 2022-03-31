import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: 0;
    a, a:hover, a:focus, a:active {
        text-decoration: none;
      color: inherit;
    }
}
`;