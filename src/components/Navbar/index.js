import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaTasks, FaRegPlusSquare } from 'react-icons/fa';
import { Container } from './styles';

export default function Navbar() {
  return (
    <>
      <Container>
        <NavLink to="/" activeClassName="selected" exact>
          <i>
            <FaRegPlusSquare />
          </i>
          <p>Adicionar tarefa</p>
        </NavLink>
        <NavLink to="/tarefas" activeClassName="selected" exact>
          <i>
            <FaTasks />
          </i>
          <p>Lista de tarefas</p>
        </NavLink>
      </Container>
    </>
  );
}
