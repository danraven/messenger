import React from 'react';
import type { Channel } from '@messenger/state/messages';
import { Avatar, AvatarContainer } from '@messenger/ui/user';
import { ChannelDetails, ChannelHistory, ChannelLink, ChannelName } from '@messenger/ui/nav';
import { img } from '@messenger/helper/assets';
import MessageCounter from '@messenger/component/MessageCounter';


export interface ChannelItemProps {
  channel: Channel;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ channel }) => {
  const lastMessage = channel.messages.at(-1)?.content || '';
  const unreadCount = channel.messages.reduce((sum, current) => sum += +!current.isRead, 0);

  return (
    <ChannelLink to={`/@${channel.id}`}>
      <AvatarContainer>
        <Avatar $hasUnread={!!unreadCount} src={img(channel.avatar || 'default.png')} />
        <MessageCounter unreadCount={unreadCount} />
      </AvatarContainer>
      <ChannelDetails>
        <ChannelName>{channel.displayName}</ChannelName>
        <ChannelHistory>{lastMessage}</ChannelHistory>
      </ChannelDetails>
    </ChannelLink>
  );
};

export default React.memo(ChannelItem);
