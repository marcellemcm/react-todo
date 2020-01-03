import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 20px 0px;

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    font-size: 16px;
    color: gray;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 16vw;
    height: 30vh;

    &:hover,
    &.selected {
      background: #5fdacf;
      color: white;
    }

    p {
      padding-top: 10px;
      font-size: 1em;
    }

    i {
      font-size: 38px;
    }
  }

  @media (max-width: 720px) {
    a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 30px 0px;
    font-size: 16px;
    color: gray;
    width: 16vw;
    height: 20vh;
    font-size: 12px;

    p {
      padding-top: 0px;
    }

    i {
      font-size: 25px;
    }

  }

  @media (max-width: 320px) {
    display: flex;
    width: 100%;
    margin: 20px 0px 10px 0px;


    a {
    padding: 30px 0px;
    font-size: 16px;
    color: gray;
    width: 100%;
    height: 50px;
    font-size: 12px;

  }


`;
