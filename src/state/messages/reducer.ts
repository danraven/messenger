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
        for (let i = 0; i < draft.channels[action.channelId]!.messages.length; i++) {
          draft.channels[action.channelId]!.messages[i].isRead = true;
        }
        break;
      }
      case ChannelActionType.Draft: {
        draft.channels[action.channelId]!.draft = action.draft;
        break;
      }
    }
  }
);

export default messagesReducer;
