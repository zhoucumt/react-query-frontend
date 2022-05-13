import { useQuery } from 'react-query';
import request from './request';
function App() {
  const { data } = useQuery('users', () => request.get('/users'));
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default App;
