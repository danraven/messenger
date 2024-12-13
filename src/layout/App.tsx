import type { FC } from 'react';
import { Wrapper, Header, Sidebar, Main, Footer } from '@messenger/ui/container';
import ChannelList from '@messenger/layout/ChannelList';

const App: FC = () => (
  <Wrapper>
    <Sidebar>
      <ChannelList />
    </Sidebar>
    <Header>Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Wrapper>
);

export default App;
