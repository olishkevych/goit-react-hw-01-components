import { TransactionLine, TypeValue } from './TransactionRecord.styled';
import PropTypes from 'prop-types';

export const TransactionRecord = ({ amount, currency, type }) => {
  return (
    <TransactionLine>
      <TypeValue>{type}</TypeValue>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionLine>
  );
};

TransactionRecord.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
