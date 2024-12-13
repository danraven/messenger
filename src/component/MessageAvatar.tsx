import React from 'react';
import { AvatarContainer, Avatar } from '@messenger/ui/user';
import { img } from '@messenger/helper/assets';


export interface MessageAvatarProps {
  display: boolean;
  avatar?: string;
}

const MessageAvatar: React.FC<MessageAvatarProps> = ({ display, avatar }) => {
  if (!display) {
    return null;
  }

  return (
    <AvatarContainer>
      <AvatarContainer>
        <Avatar src={img(avatar || 'default.png')} />
      </AvatarContainer>
    </AvatarContainer>
  );
};

export default MessageAvatar;
