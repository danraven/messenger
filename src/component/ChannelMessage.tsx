import React from 'react';
import dayjs from 'dayjs';
import { Message as MessageType } from '@messenger/state/messages';
import { MessageGroup, Message, MessageContent, MessageFooter } from '@messenger/ui/message';
import MessageAvatar from '@messenger/component/MessageAvatar';


export interface ChannelMessageProps {
  isMe: boolean;
  avatar?: string;
  message: MessageType;
}

const ChannelMessage: React.FC<ChannelMessageProps> = ({
  isMe,
  avatar,
  message
}) => (
  <MessageGroup $rightAlign={isMe}>
    <MessageAvatar avatar={avatar} display={!isMe} />
    <Message $isMine={isMe}>
      <MessageContent>{message.content}</MessageContent>
      <MessageFooter>{dayjs(message.timestamp).format('YYYY-MM-DD HH:mm:ss')}</MessageFooter>
    </Message>
    <MessageAvatar avatar={avatar} display={isMe} />
  </MessageGroup>
);

export default ChannelMessage;
