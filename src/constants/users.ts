import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    id: uuidv4(),
    firstName: 'Jack',
    lastName: 'Szlorc',
    age: 22,
    role: 'admin',
  },
  {
    id: uuidv4(),
    firstName: 'Pablo',
    lastName: 'Airplane',
    age: 20,
    role: '',
  },
  {
    id: uuidv4(),
    firstName: 'O',
    lastName: 'Pjot',
    age: 20,
    role: '',
  },
];
