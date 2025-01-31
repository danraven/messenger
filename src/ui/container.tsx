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
  grid-template-columns: max(20%, 400px) auto;
  grid-template-rows: auto 3.3rem;
  grid-template-areas:
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

  & * {
    overflow-anchor: none;
  }
`;

export const OverflowAnchor = styled.div`
  height: 1px;
  overflow-anchor: auto;
`;

export const Sidebar = styled.nav`
  grid-area: sidebar;
  background-color: #EFEFEF;
  overflow-y: scroll;
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
