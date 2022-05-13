import { useQuery } from 'react-query';
import request from './request';
function App() {
  const { data, isLoading, isError } = useQuery('users', () => {
    throw new Error('用户列表加载失败!');
    // return request.get('/users');
  });

  if (isLoading) return <div>加载中.......</div>;
  if (isError) return <div>加载失败</div>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default App;
