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
}

export interface MessengerLayout {
  users: { [id: string]: User };
  channels: { [id: string]: Channel };
}

export enum MessageActionType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Modify = 'MODIFY'
}

export interface MessageAction {
  type: MessageActionType;
  channelId: string;
  message: Message;
}
