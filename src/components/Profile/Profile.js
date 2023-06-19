import PropTypes from 'prop-types';
import {
  Username,
  UserCard,
  UserPic,
  UserDetails,
  UserStats,
  UserStatsHeader,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <UserCard>
        <UserPic src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <UserDetails>@{tag}</UserDetails>
        <UserDetails>{location}</UserDetails>
      </UserCard>

      <UserStats>
        <li>
          <UserStatsHeader>Followers</UserStatsHeader>
          <span>{stats.followers}</span>
        </li>
        <li>
          <UserStatsHeader>Views</UserStatsHeader>
          <span>{stats.views}</span>
        </li>
        <li>
          <UserStatsHeader>Likes</UserStatsHeader>
          <span>{stats.likes}</span>
        </li>
      </UserStats>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
