import styled from "styled-components";

export const Button = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  width: fit-content;
  background-color: #f64f64;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a70519;
    color: white;
  }
`;

export const PageButton = styled(Button)<{ $active: boolean }>`
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
