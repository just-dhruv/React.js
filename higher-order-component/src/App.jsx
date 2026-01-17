import Greeting from "./Greeting";
import { GreetingWithStyle, GreetingsWithStyle } from "./GreetingWithStyle";


// import PostListWithData from "./PostListWithData";

// import Dashboard from "./Dashboard";
// import withAuth from "./hoc/withAuth";
// const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <>
      {/* <Greeting name="Dhruv" /> */}
      <GreetingWithStyle name='rahul' />

      <GreetingsWithStyle value="Welcome" />

      {/* <PostListWithData /> */}
      {/* <ProtectedDashboard /> */}
    </>
  );
}

export default App;
