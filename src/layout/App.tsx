import type { FC } from 'react';
import { Wrapper, Sidebar, Main, Footer } from '@messenger/ui/container';
import ChannelList from '@messenger/layout/ChannelList';
import { Outlet } from 'react-router';

const App: FC = () => (
  <Wrapper>
    <Sidebar>
      <ChannelList />
    </Sidebar>
    <Main>
      <Outlet />
    </Main>
    <Footer>Footer</Footer>
  </Wrapper>
);

export default App;
