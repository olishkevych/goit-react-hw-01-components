import styled from 'styled-components';

export const TransactionLine = styled.tr`
  background: white;
  &:nth-child(2n) {
    background-color: #e7eaf6;
  }
`;

export const TypeValue = styled.td`
  text-transform: capitalize;
`;
