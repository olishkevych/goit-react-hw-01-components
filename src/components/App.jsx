import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics.js';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

import user from './../data/user.json';
import stats from './../data/stats-data.json';
import friends from './../data/friends';
import transactions from './../data/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
        flexWrap: 'wrap',
      }}
    >
      <div>
        {' '}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={stats} title="Upload files" />
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};
