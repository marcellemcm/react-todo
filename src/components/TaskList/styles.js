import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: white;
  margin-top: 20px;

  form {
    margin: 20px 0;
  }
`;

export const InputAdd = styled.input`
  border: 1px solid lightgray;
  width: 300px;
  height: 30px;
`;

export const Button = styled.button`
  background-color: #51a8e1;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 14px;
  margin-left: 10px;
  color: white;
  border-radius: 5px;
`;

export const TasksList = styled.div``;
