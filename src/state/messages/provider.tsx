import { useReducer } from 'react';
import type { FC, ReactNode } from 'react';
import fixtures from '@messenger/state/messages/fixtures';
import messagesReducer from '@messenger/state/messages/reducer';
import { MessagesContext, DispatchContext } from '@messenger/state/messages/context';


interface Props {
  children: ReactNode;
}

const MessagesProvider: FC<Props> = ({ children }) => {
  const [ messages, dispatch ] = useReducer(messagesReducer, {
    users: fixtures.users,
    channels: fixtures.channels
  });

  return (
    <MessagesContext.Provider value={messages}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MessagesContext.Provider>
  );
};


export default MessagesProvider;
