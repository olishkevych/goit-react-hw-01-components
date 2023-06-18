import PropTypes from 'prop-types';
import {
  Username,
  UserCard,
  UserPic,
  UserDetails,
  UserStats,
  UserStatsHeader,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
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
  user: PropTypes.shape(
    {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
    }.isRequired
  ),
};
