import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: white;
  width: 96%;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 10px;

  h2 {
    text-align: center;
    font-size: 1.2em;
    color: gray;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 25%;
    height: 100%;
  }

  @media (max-width: 720px) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 100%;

    h2 {
      width: 100%;
    }
  }
`;
