import styled from 'styled-components';

const Status = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

const FriendLiElem = styled.li`
  position: relative;
`;

export { Status, FriendLiElem };
