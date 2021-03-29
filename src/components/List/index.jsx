import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Container, Table } from './styles';

export default function List(){
  const [ data, setData] = useState([]);

  useEffect(()=>{
      api.get(`/`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log(err);
    })
  }, [data])

  function DeleteSchedule(id) {
    api.delete(`/delete/${id}`)
    .then(() => alert("Consulta excluída com sucesso"))
		.catch(() => alert("Algo deu errado, tente novamente mais tarde"));
  }

  return(
    <Container>
          {
          data.length > 0 ?
            <Table>
              <thead>
                <tr>
                  <td width='35%'>Paciente</td>
                  <td width='35%'>Médico</td>
                  <td width='20%'>Horário</td>
                  <td width='10%'>Ações</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(schedule => (
                    <tr key={schedule.id}>
                      <td>{schedule.patient}</td>
                      <td>{schedule.doctor}</td>
                      <td>{schedule.date}</td>
                      <td>
                        <Link to={`/edit/${schedule.id}`}>
                          <AiFillEdit size={20} />
                        </Link>
                        <button onClick={() => DeleteSchedule(schedule.id)}>
                          <AiFillDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
      </Table>
            :(
              <span>Não há dados</span>
            )}
    </Container>
  )
}