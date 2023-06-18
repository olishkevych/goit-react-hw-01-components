import PropTypes from 'prop-types';
import styled from 'styled-components';

const IsOnlineSymbol = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
`;

const IsOfflineSymbol = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
`;

const FriendLiElem = styled.li`
  position: relative;
`;

export { IsOnlineSymbol, FriendLiElem, IsOfflineSymbol };
