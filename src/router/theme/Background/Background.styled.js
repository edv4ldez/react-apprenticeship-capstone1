import styled, { css } from 'styled-components';
const darkBackground = css`
    background-image:
    linear-gradient(
        120deg,
        #c63030 0,
        #bbc1bf 19%,
        #23b16a 42%,
        #290470 79%,
        #7ac5d8 100%
        );
`; 

const lightBackground = css`
    background-image:
        linear-gradient(
        120deg,
        #eea2a2 0,
        #bbc1bf 19%,
        #57c6e1 42%,
        #b49fda 79%,
        #7ac5d8 100%
        );
`
export const BackgroundWrapper = styled.div`
    ${(props) => props.theme === 'light' ? lightBackground : darkBackground}
    background-size: 400% 400%;
    background-position: var(--bg-position);
    transition: background-position 2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;