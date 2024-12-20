import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 124px;
  height: 32vh;
  background-color: #195082;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
  border-radius: 20px;
  transition: width 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 64px;
    height: 38vh;
    align-items: center;
  }
`;

export const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #052560;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SidebarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: color 0.2s ease-in-out, font-size 0.2s ease-in-out;

  @media (max-width: 768px) {
    svg {
      font-size: 28px;
    }
    
    span {
      display: none;
    }
  }
`;

export const SidebarFlags = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;

    @media (max-width: 768px) {
      gap: 8px;
    }

    img {
      cursor: pointer;
      width: 24px;
      margin: 0 8px;
    }
  }
`;
