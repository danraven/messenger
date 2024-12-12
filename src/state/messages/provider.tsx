import { useReducer, createContext } from 'react';
import type { FC, ReactNode, ActionDispatch } from 'react';
import type { Channel, MessageAction } from '@messenger/state/messages/types';
import fixtures from '@messenger/state/messages/fixtures';
import messagesReducer from '@messenger/state/messages/reducer';


export const MessagesContext = createContext<Channel[]>([]);
export const DispatchContext = createContext<ActionDispatch<[MessageAction]>>(() => {});

interface Props {
  children: ReactNode;
}

const MessagesProvider: FC<Props> = ({ children }) => {
  const [ messages, dispatch ] = useReducer(messagesReducer, fixtures.channels);

  return (
    <MessagesContext.Provider value={messages}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
