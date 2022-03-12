import { Container, TextArea } from './styles';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import api from '../../services/api';

export default function ({ data, handleDelete }) {
  const [ titleChanged, setTitleChanged ] = useState("");

  const handleEditTask = async (title) => {
    
    if (titleChanged && titleChanged !== title ) {
      await api.post(`/task/${data._id}`, {
        title: titleChanged.trim()
      });
    }
  }

  return (
    <Container>
      <TextArea 
        defaultValue={data.title}
        spellcheck="false"
        onChange={e => setTitleChanged(e.target.value)}
        onBlur={() => handleEditTask(data.title)}
      />
      <AiFillDelete 
        size={19}
        onClick={() => handleDelete(data._id)}
      />
    </Container>
  );
}