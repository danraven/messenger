import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';
import MessageInput from '@messenger/component/MessageInput';
import { MessageActionType, useDispatch, useMessages } from '@messenger/state/messages';
import fixtures from '@messenger/state/messages/fixtures';


const InputFooter: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const messages = useMessages();
  const onSend = useCallback((content: string) => {
    dispatch({
      type: MessageActionType.Add,
      channelId: params.channel!,
      message: {
        timestamp: new Date(),
        senderId: fixtures.me.id,
        content: DOMPurify.sanitize(content),
        isRead: true,
      }
    });
  }, [dispatch, params.channel]);

  const channel = params.channel ? messages.channels[params.channel] : null;

  return (
    <MessageInput
      channelId={channel?.id}
      value={channel?.draft || ''}
      onSend={onSend}
    />
  );
};

export default InputFooter;
