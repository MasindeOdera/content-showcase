import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 110px;
  height: 100vh;
  background-color: #195082;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  position: fixed;
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
