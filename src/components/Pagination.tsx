import React from 'react';
import styled from 'styled-components';
import { PaginationProps } from '../types/pagination';
import Container from './styles/container/container';

const PageButton = styled.button<{ $active: boolean }>`
  margin: 0 5px;
  padding: 10px 15px;
  width: fit-content;
  background-color: ${({ $active }) => ($active ? '#007bff' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;
