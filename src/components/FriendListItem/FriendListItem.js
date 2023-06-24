import PropTypes from 'prop-types';
import { Status, FriendLiElem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendLiElem>
      <Status $isOnline={isOnline} />

      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendLiElem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
