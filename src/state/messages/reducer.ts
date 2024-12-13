import { produce } from 'immer';
import { ChannelAction, ChannelActionType, MessageAction, MessageActionType, MessengerLayout } from '@messenger/state/messages/types';


const messagesReducer = produce(
  (draft: MessengerLayout, action: MessageAction | ChannelAction) => {
    switch (action.type) {
      case MessageActionType.Add: {
        draft.channels[action.channelId]?.messages.push(action.message);
        break;
      }
      case ChannelActionType.Read: {
        draft.channels[action.channelId]!.messages =
          draft.channels[action.channelId]!.messages.map(msg => ({
            ...msg,
            isRead: true
        }));
        break;
      }
    }
  }
);

export default messagesReducer;
