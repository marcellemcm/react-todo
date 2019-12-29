import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: white;
  border: 1px solid lightgray;
  margin-top: 10px;
  width: 100%;
  max-width: 700px;
  padding: 10px;

  label {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .doneTask {
    text-decoration: line-through;
    color: gray;
  }

  .active {
    font-weight: bold;
  }
`;
