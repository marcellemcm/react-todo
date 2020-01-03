import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  background: white;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-left: 10px;
  margin-right: 10px;
  width: 50vw;

  &:hover {
    background: #5fdacf;
    color: white;
  }

  @media (max-width: 320px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ContainerTask = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  width: 50vw;

  @media (max-width: 320px) {
    width: 90%;
    margin-left: 0px;
  }

  input[type=checkbox] {
         position: relative;
	       cursor: pointer;
    }
    input[type=checkbox]:before {
         content: "";
         display: block;
         position: absolute;
         width: 13px;
         height: 13px;
         top: 0;
         left: 0;
         border: 1px solid #555555;
         border-radius: 3px;
         background-color: white;
}
    input[type=checkbox]:checked:after {
         content: "";
         display: block;
         width: 4px;
         height: 7px;
         border: solid gray;
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 2px;
         left: 5px;
}
  }

  label {
    display: flex;
    align-items: center;
    font-size: 13px;

    p {
      margin-left: 25px;

      @media (max-width: 768px) {
        margin-left: 15px;
      }

      &.doneTask {
        text-decoration: line-through;
        color: gray;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 5%;
  border: none;
  background: transparent;

  @media (max-width: 768px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
