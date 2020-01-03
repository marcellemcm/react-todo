import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    '. header header .'
    '. nav main .';
  grid-template-rows: 90px auto;
  grid-template-columns: 1fr 1fr 4fr 1fr;

  header {
    grid-area: header;
  }

  nav {
    grid-area: nav;
  }

  main {
    grid-area: main;
  }

  @media (max-width: 320px) {
    height: 100vh;
    display: grid;
    grid-template-areas:
      '. header header .'
      '. nav nav .'
      '. main main. ';
    grid-template-rows: 90px auto;
    grid-template-columns: 20px 1fr 1fr 20px;
  }
`;

export const ContainerImg = styled.div`
  img {
    margin-left: 30px;
    margin-top: 20px;
    width: 50vw;
  }

  @media (max-width: 768px) {
    img {
      margin-left: 20px;
      width: 52vw;
      margin-top: 20px;
    }
  }

  @media (max-width: 320px) {
    img {
      margin-left: 0px;
      width: 88vw;
      margin-top: 0px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px auto;
  width: 54vw;

  @media (max-width: 320px) {
    width: 89vw;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #d7dfe5;
  width: 54vw;

  @media (max-width: 320px) {
    width: 89vw;
  }
`;

export const ContainerList = styled.div`
  h2 {
    margin-left: 10px;
    margin-right: 10px;
    padding: 15px;
    background: white;
    font-size: 14px;
    color: gray;
    border-top: 3px solid #5fdacf;
    border-bottom: 1px solid #eee;
    width: 50vw;

    @media (max-width: 320px) {
      width: 89vw;
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  h3 {
    margin-left: 10px;
    margin-right: 10px;
    padding: 15px;
    background: white;
    font-size: 12px;
    color: gray;
    width: 50vw;

    @media (max-width: 320px) {
      width: 89vw;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  margin-bottom: 20px;

  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  width: 50vw;
  background: white;

  @media (max-width: 320px) {
    width: 100%;
  }

  input {
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    width: 50vw;
    margin-left: 10px;
    background: white;
    font-size: 14px;
    color: gray;

    &::placeholder {
      font-size: 11px;
    }

    @media (max-width: 320px) {
      width: 60vw;
    }
  }
`;
