import type { FC } from 'react';
import { Wrapper, Sidebar, Main, Footer, OverflowAnchor } from '@messenger/ui/container';
import ChannelList from '@messenger/layout/ChannelList';
import { Outlet } from 'react-router';
import InputFooter from '@messenger/layout/InputFooter';

const App: FC = () => (
  <Wrapper>
    <Sidebar>
      <ChannelList />
    </Sidebar>
    <Main>
      <Outlet />
      <OverflowAnchor />
    </Main>
    <Footer>
      <InputFooter />
    </Footer>
  </Wrapper>
);

export default App;
