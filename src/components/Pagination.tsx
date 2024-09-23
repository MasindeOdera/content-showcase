import React from 'react';
import { PaginationProps } from '../types/pagination';
import Container from './styles/container/container';
import { PageButton } from './styles/button/button';


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
