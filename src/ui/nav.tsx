import styled from 'styled-components';
import { NavLink } from 'react-router';


export const ChannelLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.7rem;
  text-decoration: none;

  &:hover, &:focus {
    transition: background-color 100ms linear;
    background-color: #BFBFBF;
  }

  &:active, &.active {
    background-color: #73AAC7;
  }

  @media only screen and (max-device-width: 980px) {
    padding: 0.4rem 0;
  }
`;

export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 1rem;
  flex-direction: column;
  color: #333;
  position: relative;
  overflow: hidden;

  @media only screen and (max-device-width: 980px) {
    display: none;
  }
`;

export const ChannelName = styled.h3`
  font-weight: 800;
  margin: 0 0 0.5rem;
`;

export const ChannelHistory = styled.p`
  font-size: 12px;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  margin: 0;
`;
