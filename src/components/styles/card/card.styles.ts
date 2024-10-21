import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 200px;
  margin: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 15px;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0 0 10px;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
`;
