import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: ${({ theme }) => theme.body}
    }
`;

export const lightTheme = {
    body: 'linear-gradient( 120deg, #c63030 0, #bbc1bf 19%, #23b16a 42%, #290470 79%, #7ac5d8 100%);',  
};
  export const darkTheme = {
    body: 'linear-gradient( 120deg, #eea2a2 0, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',  
};