import React, { useState, useEffect } from 'react';
import moment from 'moment';
import api from '../../services/api';

import { Container, Form } from './styles';

export default function Add(props){
  const [patient, setPatient] = useState();
  const [doctor, setDoctor] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState()
  const [thisDate, setThisDate] = useState()
  const id = props.match.params.id;

  useEffect(()=>{
    api.get(`/show/${id}`)
    .then(response => {
      setPatient(response.data.patient);
      setDoctor(response.data.doctor);
      setThisDate(response.data.date)
    })
    .catch(err => {
      console.log(err);
  })
}, [id]);

	async function handleSubmit(event){
			event.preventDefault()
			const date = day && time ? `${moment(day).format('DD/MM/YYYY')} ${time}` : false;
			const data = {
				patient: patient,
				doctor: doctor,
				date: date || thisDate
			}

			await api.put(`/edit/${id}`, data).then(() => 
        alert('Consulta editada!'),
        window.location.href = "/"
      )
			.catch(() => alert("Algo errado aconteceu, tente novamente mais tarde!"));
		}

  return(
    <Container>
      <div>
        <h1>Insira os novos dados</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <div> 
          <input placeholder='paciente' id="patient" value={patient} onChange={event=>(setPatient(event.target.value))}/>
          <select placeholder='médico' id="doctor" value={doctor} onChange={event=>(setDoctor(event.target.value))}>
            <option></option>
            <option>Dr. Lasmar</option>
            <option>Dr. Trajano</option>
            <option>Dr. Caio</option>
          </select>
          <input placeholder='data' id="date" type="date" value={day} onChange={event=>(setDay(event.target.value))}/>
          <input placeholder='hora' id="date" type="time" value={time} onChange={event=>(setTime(event.target.value))}/>
        </div>
        <div>
          <input type='submit' value='Enviar'/>
        </div>
      </Form>
    </Container>
  )
}
