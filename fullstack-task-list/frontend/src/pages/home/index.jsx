import { useState, useEffect } from 'react';
import { Header, Form, Container, Ul } from './styles';

import api from '../../services/api';

import Task from '../../components/Task';

export default function () {
  const [ title, setTitle ] = useState('');
  const [ allTasks, setAllTasks ] = useState([]);


  useEffect(() => {
    const fetchAllTasks = async () => {
      const response = await api.get('/tasks');
      const data = response.data;

      setAllTasks(data);
    }

    fetchAllTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createTask = await api.post('/task', { title });

    setTitle('');
    setAllTasks([...allTasks, createTask.data]);
  } 

  const handleDelete = async (id) => {
    const deletedNote = await api.delete(`/task/${id}`);

    if (deletedNote) {
      const filteredTasks = allTasks.filter(task => task._id !== id);
      setAllTasks(filteredTasks);
    }
  }

  return (
    <Container>
       <Header>
        <h1>Qual a task de hoje?</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite aqui a sua task..." 
          value={title}
          onChange = {e => setTitle(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </Form>

      <Ul>
        { allTasks.map(data => (
          <Task 
            data={data} 
            key={data._id}
            handleDelete={handleDelete}
          />    
        ))}
      </Ul>
    </Container>
  );
}