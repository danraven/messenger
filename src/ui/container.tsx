import styled from 'styled-components';


export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1920px;
  height: 100vh;
  max-height: 100vh;
  margin: 0 auto;
  border: 0 none;
  display: grid;
  transition: 200ms;
  grid-template-columns: max(30%, 500px) auto;
  grid-template-rows: 3.5rem auto 3.5rem;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";

  @media only screen and (min-device-width: 1980px) {
    border-left: 2px solid #EFEFEF;
    border-right: 2px solid #EFEFEF;
  }

  @media only screen and (max-device-width: 980px) {
    grid-template-columns: 50px auto;
  }
`;

export const Main = styled.main`
  grid-area: main;
  background-color: #FFFFFF;
  height: 100%;
  padding: 0 2.5rem;
  overflow-y: scroll;
`;

export const Sidebar = styled.nav`
  grid-area: sidebar;
  background-color: #EFEFEF;
  overflow-y: scroll;
`;

export const Header = styled.header`
  grid-area: header;
  background-color: #73AAC4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 2.5rem;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #EFEFEF;
  padding: 0.75rem 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: stretch;
`;
