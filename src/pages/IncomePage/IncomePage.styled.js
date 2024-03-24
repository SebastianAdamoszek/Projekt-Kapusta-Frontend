import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 56px;
  margin: 500px auto;
  width: 320px;
  height: 258px;
  background-color: #f5f6fb;
  border-radius: 0 0 0 112px;
`;
export const FrameContainer = styled.div`
  /* background-color: transparent; */

  @media screen and (min-width: 768px) {
    margin: 0px auto;
    padding: 24px 40px 42px;
    max-width: 704px;
    background-color: #fff;
    border-radius: 0px 30px 30px 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    position: relative;
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px;
    max-width: 1098px;
    margin-top: 48px;
  }
`;

export const TableAndSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1098px;
  }
`;