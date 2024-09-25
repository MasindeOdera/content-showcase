import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentPage } from '../store/publicationsSlice';
// import { PaginationProps } from '../types/pagination';
import Container from './styles/container/container';
import { PageButton } from './styles/button/button';


const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state: RootState) => state.publications.totalPages);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Container>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;
