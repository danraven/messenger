import { useReducer, createContext, useContext } from 'react';
import type { FC, ReactNode, ActionDispatch } from 'react';
import type { MessageAction, MessengerLayout } from '@messenger/state/messages/types';
import fixtures from '@messenger/state/messages/fixtures';
import messagesReducer from '@messenger/state/messages/reducer';


const MessagesContext = createContext<MessengerLayout>({ channels: {}, users: {} });
const DispatchContext = createContext<ActionDispatch<[MessageAction]>>(() => {});

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

export const useMessages = () => useContext(MessagesContext);
export const useDispatch = () => useContext(DispatchContext);

export default MessagesProvider;
