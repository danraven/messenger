import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import App from '@messenger/layout/App';
import Channel from '@messenger/layout/Channel';
import { MessagesProvider } from '@messenger/state/messages';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  html, body {
    height: 100%;
    color: #323232;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    background: linear-gradient(0deg, #D8E6E9 0%, #FFF 100%);
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Normalize />
    <GlobalStyle />
    <MessagesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/@/:channel" element={<Channel/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </MessagesProvider>
  </StrictMode>
);
