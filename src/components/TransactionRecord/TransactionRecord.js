import { TransactionLine } from './TransactionRecord.styled';
import PropTypes from 'prop-types';

export const TransactionRecord = ({ item }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <TransactionLine>
      <td>{capitalizeFirstLetter(item.type)}</td>
      <td>{Number(item.amount)}</td>
      <td>{item.currency}</td>
    </TransactionLine>
  );
};

TransactionRecord.propTypes = {
  item: PropTypes.shape({
    amount: PropTypes.number,
  }),
};
