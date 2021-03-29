import React, { useState } from 'react';
import moment from 'moment';
import Collapsible from '../Collapsible';
import api from '../../services/api';

import { Container, Head, Form } from './styles';

export default function Add(){
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

	async function handleSubmit(event){
			event.preventDefault()
			const date = `${moment(day).format('DD/MM/YYYY')} ${time}`
			const data = {
				patient: patient,
				doctor: doctor,
				date: date
			}

			await api.post('/create', data).then(() => alert('Consulta agendada com sucesso!'))
			.catch(() => alert("Este horário já existe"));
		}

  return(
    <Container>
			<Collapsible
				visible={
					<Head><h3>Agendar Consulta</h3></Head> 
				}
				invisible={
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
					}
			/>
    </Container>
  )
}