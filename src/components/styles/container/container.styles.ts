import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

export const ResultsContainer = styled(Container)`
  width: 100%;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  & > div {
    flex: 1 1 calc(100% / 3 - 20px);
    max-width: calc(100% / 3 - 20px);

    @media (max-width: 1024px) {
      flex: 1 1 calc(100% / 2 - 20px);
      max-width: calc(100% / 2 - 20px);
    }

    @media (max-width: 768px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;
