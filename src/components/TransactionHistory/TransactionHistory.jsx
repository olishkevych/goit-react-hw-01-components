import { TransactionRecord } from 'components/TransactionRecord/TransactionRecord';
import PropTypes from 'prop-types';
import {TableHeaders, TransactionTable} from "./TransactionHistory.styled"


export const TransactionHistory = ({ items }) => {
 
  return (
    <TransactionTable>
      <thead>
        <TableHeaders>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeaders>
      </thead>

      <tbody>
        {items.map(item => { 
          item.amount = Number(item.amount)
        return (
          <TransactionRecord key={item.id} item={item}  />  
          )
      })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['payment', 'invoice', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
