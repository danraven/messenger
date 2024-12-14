import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { ChannelActionType, useDispatch, useMessages } from '@messenger/state/messages';
import { MessageContainer } from '@messenger/ui/message';
import fixtures from '@messenger/state/messages/fixtures';
import ChannelMessage from '@messenger/component/ChannelMessage';


const Channel: React.FC = () => {
  const messages = useMessages();
  const dispatch = useDispatch();
  const params = useParams();
  const channel = messages.channels[params.channel!];

  useEffect(() => {
    dispatch({
      type: ChannelActionType.Read,
      channelId: channel.id
    });
  }, [params.channel]);

  return (
    <MessageContainer>
      {channel.messages.map((msg, i) => (
        <ChannelMessage
          key={i}
          message={msg}
          avatar={messages.users[msg.senderId].avatar}
          isMe={msg.senderId === fixtures.me.id}
        />
      ))}
    </MessageContainer>
  );
};

export default Channel;
