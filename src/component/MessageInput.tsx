import React, { useCallback } from 'react';
import { Fieldset, InputContainer, InputField, Button } from '@messenger/ui/input';
import { useDispatch, ChannelActionType } from '@messenger/state/messages';


export interface MessageInputProps {
  channelId?: string;
  value: string;
  onSend: (content: string) => unknown;
}

const MessageInput: React.FC<MessageInputProps> = ({
  channelId,
  value,
  onSend
}) => {
  const dispatch = useDispatch();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ChannelActionType.Draft,
      channelId: channelId!,
      draft: e.currentTarget.value
    });
  }, [dispatch, channelId]);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(value);
    dispatch({
      type: ChannelActionType.Draft,
      channelId: channelId!,
      draft: ''
    });
  }, [onSend, value, channelId, dispatch]);

  return (
    <InputContainer autoComplete="off" onSubmit={onSubmit}>
      <Fieldset disabled={!channelId}>
        <InputField
          name="message"
          value={value}
          placeholder="Enter your message here"
          onChange={onChange}
        />
        <Button type="submit" disabled={!value.trim()}>Send</Button>
      </Fieldset>
    </InputContainer>
  );
};

export default MessageInput;
