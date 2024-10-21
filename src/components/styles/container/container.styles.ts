import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const ResultsContainer = styled(Container)`
  padding: 10px;
  width: 100%;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr)); 
  gap: 20px;
  padding: 20px;
`;
