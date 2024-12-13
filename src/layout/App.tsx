import type { FC } from 'react';
import { Wrapper, Header, Sidebar, Main, Footer } from '@messenger/ui/container';

const App: FC = () => (
  <Wrapper>
    <Sidebar>Sidebar</Sidebar>
    <Header>Header</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Wrapper>
);

export default App;
