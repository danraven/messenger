import { createContext, ActionDispatch, useContext } from 'react';
import type { MessengerLayout, MessageAction, ChannelAction } from '@messenger/state/messages/types';


export const MessagesContext = createContext<MessengerLayout>({ channels: {}, users: {} });
export const DispatchContext = createContext<ActionDispatch<[MessageAction | ChannelAction]>>(() => {});


export const useMessages = () => useContext(MessagesContext);
export const useDispatch = () => useContext(DispatchContext);
