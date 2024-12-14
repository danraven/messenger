import styled from 'styled-components';


export interface AvatarProps {
  $hasUnread?: boolean;
}

export const AvatarContainer = styled.div`
  position: relative;
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
`;

export const Avatar = styled.img<AvatarProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ $hasUnread }) => $hasUnread ? '#C00' : '#555'};
  border-radius: 50%;
  background-color: #F9F9F9;
  display: block;
`;

export const UnreadCount = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #C00;
  color: #FFF;
  font-size: 12px;
  padding: 0.1rem 0.3rem;
  font-weight: 800;
  text-align: center;
  border-radius: 50%;
`;
