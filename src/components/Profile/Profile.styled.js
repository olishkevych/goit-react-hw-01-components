import styled from 'styled-components';

const Username = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const UserCard = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 300px;
  font-size: 20px;
  text-align: center;
  background-color: #e7eaf6;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const UserPic = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const UserDetails = styled.p`
  margin-top: 5px;
  font-size: 18px;
  font-style: italic;
`;

const UserStats = styled.ul`
  display: flex;
  padding: 10px;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const UserStatsHeader = styled.span`
  display: block;
  font-weight: 700;
`;

export { UserCard, Username, UserPic, UserDetails, UserStats, UserStatsHeader };
