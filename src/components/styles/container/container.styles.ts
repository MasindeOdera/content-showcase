import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1024px) {
    width: 700px;
  }
`;

export const ResultsContainer = styled(Container)`
  width: -webkit-fill-available;
  min-height: 160px;
  max-height: 488px;
  overflow-y: auto;
  color: #000;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
  padding: 6px;
  transition: transform 0.2s ease-in-out;

  p {
    margin: auto;
  }
`;

export const LoadingDetailContainer = styled(ResultsContainer)`
  min-height: 360px;

  div {
    margin: auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin: auto;

  & > div {
    flex: 1 1 calc(100% / 3 - 20px);
    max-width: calc(100% / 3 - 20px);
    transition: transform 0.2s ease-in-out;

    @media (max-width: 1024px) {
      flex: 1 1 calc(100% / 2 - 20px);
      max-width: calc(100% / 2 - 20px);
    }

    @media (max-width: 768px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  & > div:nth-child(2):last-child,
  & > div:first-child:nth-last-child(2) {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
    margin: auto;

    @media (max-width: 768px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  & > div:only-child {
    flex: 1 1 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const ControlBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    margin-bottom: 8px;
  }

  & > * {
    flex: 1;
    gap: 20px;
    min-width: 200px;
    margin-bottom: 20px;
  }
`;

export const AlignLeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: -webkit-fill-available;
  margin-left: 14%;

  @media (max-width: 1024px) {
    margin-left: 2%;
  }
}
`;

export const ContentContainer = styled.div`
  margin-left: 150px; 
  padding: 14px; 
  width: 100%;
  background-color: #195082;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-left: 110px; 
  }
}
`;
