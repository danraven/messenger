import React, { useState, useCallback } from 'react';
import { Fieldset, InputContainer, InputField, Button } from '@messenger/ui/input';


export interface MessageInputProps {
  channel?: string;
  onSend: (content: string) => unknown;
}

const MessageInput: React.FC<MessageInputProps> = ({
  channel,
  onSend
}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(value);
    setValue('');
  }, [onSend, value]);

  return (
    <InputContainer autoComplete="off" onSubmit={onSubmit}>
      <Fieldset disabled={!channel}>
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
