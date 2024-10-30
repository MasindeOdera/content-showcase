import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 124px;
  height: 100vh;
  background-color: #195082;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
  border-radius: 20px;
`;

export const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 18px;

  &:hover {
    color: #052560;
  }
`;

export const SidebarIconWrapper = styled.div`
  display: flex;
  gap: 6px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;
