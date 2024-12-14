import React, { useMemo } from 'react';
import { useMessages } from '@messenger/state/messages';
import ChannelItem from '@messenger/component/ChannelItem';


const ChannelList: React.FC = () => {
  const messages = useMessages();
  const channels = useMemo(() => {
    const ordered = Object.values(messages.channels);
    ordered.sort((a, b) => (
      (b.messages.at(-1)?.timestamp.getTime() || 0)
      - (a.messages.at(-1)?.timestamp.getTime() || 0)
    ));
    return ordered;
  }, [messages]);

  return (
    channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)
  );
};

export default ChannelList;
