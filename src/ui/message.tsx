import styled from 'styled-components';


export interface MessageProps {
  $isMine: boolean;
}

export interface MessageGroupProps {
  $rightAlign?: boolean;
}

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  align-items: stretch;
`;

export const MessageGroup = styled.section<MessageGroupProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ $rightAlign }) => !$rightAlign ? 'flex-start' : 'flex-end'};
  width: 100%;
`;

export const Message = styled.div<MessageProps>`
  background-color: ${({ $isMine }) => $isMine ? '#73AAC7' : '#EFEFEF'};
  padding: 1rem;
  border-radius: 20px;
  transition: 150ms;
  position: relative;
  margin: 0.5rem 15px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 15px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    ${({ $isMine }) => (
      $isMine ?
        'right: -9px; border-left: 10px solid #73AAC7;'
        : 'left: -9px; border-right: 10px solid #EFEFEF;'
    )}
  }
`;

export const MessageContent = styled.p`
  margin-bottom: 0.3rem;
`;

export const MessageFooter = styled.p`
  font-size: 10px;
  color: #474747;
`;
