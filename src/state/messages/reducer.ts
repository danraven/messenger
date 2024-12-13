import { produce } from 'immer';
import { Channel, MessageAction, MessageActionType } from '@messenger/state/messages/types';

const messagesReducer = produce(
  (draft: Channel[], action: MessageAction) => {
    switch (action.type) {
      case MessageActionType.Add: {
        const i = draft.findIndex(ch => ch.id === action.channelId);
        draft[i].messages.push(action.message);
        break;
      }
    }
  }
);

export default messagesReducer;
