import {
  IsOnlineSymbol,
  FriendLiElem,
  IsOfflineSymbol,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendLiElem>
      {isOnline && <IsOnlineSymbol />}
      {!isOnline && <IsOfflineSymbol />}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendLiElem>
  );
};
