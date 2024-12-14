import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';
import MessageInput from '@messenger/component/MessageInput';
import { MessageActionType, useDispatch } from '@messenger/state/messages';
import fixtures from '@messenger/state/messages/fixtures';


const InputFooter: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
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
    })
  }, [dispatch, params.channel]);

  return (
    <MessageInput channel={params.channel} onSend={onSend}/>
  );
};

export default InputFooter;
