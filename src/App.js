import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import request from './request';

function Users() {
  const { data, isLoading, isError, isFetching } = useQuery(
    'users',
    () => request.get('/users'),
    {
      refetchOnWindowFocus: true,
    }
  );
  if (isLoading) return <div>加载中.......</div>;
  if (isError) return <div>加载失败</div>;
  return (
    <>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {isFetching && <div>正在更新数据...</div>}
    </>
  );
}
function App() {
  return (
    <>
      <Users />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
export default App;
