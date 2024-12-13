import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import { ChannelActionType, useDispatch, useMessages } from '@messenger/state/messages';
import { Message, MessageContainer, MessageContent, MessageFooter, MessageGroup } from '@messenger/ui/message';
import fixtures from '@messenger/state/messages/fixtures';
import MessageAvatar from '@messenger/component/MessageAvatar';


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
        <MessageGroup key={i} $rightAlign={msg.senderId === fixtures.me.id}>
          <MessageAvatar avatar={messages.users[msg.senderId].avatar} display={msg.senderId !== fixtures.me.id} />
          <Message $isMine={msg.senderId === fixtures.me.id}>
            <MessageContent>{msg.content}</MessageContent>
            <MessageFooter>{dayjs(msg.timestamp).format('YYYY-MM-DD HH:mm:ss')}</MessageFooter>
          </Message>
          <MessageAvatar avatar={messages.users[msg.senderId].avatar} display={msg.senderId === fixtures.me.id} />
        </MessageGroup>
      ))}
    </MessageContainer>
  );
};

export default Channel;
