import React from 'react';
import { UnreadCount } from '@messenger/ui/user';


export interface MessageCounterProps {
  unreadCount: number;
}

const MessageCounter: React.FC<MessageCounterProps> = ({ unreadCount }) => (
  !!unreadCount ? <UnreadCount>{unreadCount}</UnreadCount> : null
);

export default React.memo(MessageCounter);
