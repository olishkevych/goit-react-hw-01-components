import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsTitle } from './Statistics.styled';
import { Section, Header } from '../CommonCSSComp/CommonCSSComp';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Header>{title}</Header>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <StatsTitle>{stat.label}</StatsTitle>
            <span>{stat.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
