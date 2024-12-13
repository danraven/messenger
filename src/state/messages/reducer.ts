import { produce } from 'immer';
import { MessageAction, MessageActionType, MessengerLayout } from '@messenger/state/messages/types';


const messagesReducer = produce(
  (draft: MessengerLayout, action: MessageAction) => {
    switch (action.type) {
      case MessageActionType.Add: {
        draft.channels[action.channelId]?.messages.push(action.message);
        break;
      }
    }
  }
);

export default messagesReducer;
