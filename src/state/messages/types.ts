export interface User {
  id: string;
  displayName: string;
  avatar?: string;
}

export interface Message {
  timestamp: Date;
  sender: User;
  content: string;
}

export interface Channel extends User {
  messages: Message[];
}

export enum MessageActionType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Modify = 'MODIFY'
}

export interface MessageAction {
  type: MessageActionType;
  channel: Channel;
  message: Message;
}
