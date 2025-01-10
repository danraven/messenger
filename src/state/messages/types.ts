export interface User {
  id: string;
  displayName: string;
  avatar?: string;
}

export interface Message {
  timestamp: Date;
  senderId: string;
  content: string;
  isRead: boolean;
}

export interface Channel extends User {
  messages: Message[];
  draft?: string;
}

export interface MessengerLayout {
  users: { [id: string]: User };
  channels: { [id: string]: Channel };
}

export enum MessageActionType {
  Add = 'MESSAGE_ADD',
  Remove = 'MESSAGE_REMOVE',
  Modify = 'MESSAGE_MODIFY'
}

export enum ChannelActionType {
  Read = 'CHANNEL_READ',
  Draft = 'CHANNEL_DRAFT',
}

export interface MessageAction {
  type: MessageActionType;
  channelId: string;
  message: Message;
}

export interface ChannelAction {
  type: ChannelActionType;
  channelId: string;
  draft?: string;
}
