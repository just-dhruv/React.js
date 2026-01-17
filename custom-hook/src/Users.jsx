import useFetch from "./hooks/useFetch";

export default function User() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error Occured!</h2>;

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            Name : {user.name}
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </>
  );
}
