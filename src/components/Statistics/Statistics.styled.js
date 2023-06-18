import styled from 'styled-components';

const StatsList = styled.ul`
  background-color: white;
  font-size: 18px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const StatsItem = styled.li`
  text-align: center;
`;

const StatsTitle = styled.span`
  display: block;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export { StatsItem, StatsList, StatsTitle };
