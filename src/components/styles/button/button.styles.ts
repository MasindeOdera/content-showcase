import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 10px 15px;
  width: fit-content;
  background-color: #e1ddde;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a9a9a9;
    color: #fff;
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
