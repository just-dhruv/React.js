function Parent() {
  const name = "Dhruv";

  return <Chiled name={name} />;
}

function Chiled({ name }) {
  return (
    <>
      <GrandChiled name={name} />
      <h1>My name is {name}</h1>
    </>
  );
}

function GrandChiled({name}) {
  return(
    <>
      <h2>Grand Chiled Name: {name}</h2>
    </>
  )
}

function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;
  