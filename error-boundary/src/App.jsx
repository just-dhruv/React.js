import UserData from "./UserData"
import UserWithData from "./UserWithData"
import UserName from "./UserName"

import ErrorBoundary from "./ErrorBoundary"

function App() {

  const userData = {
    userName: 'dhruv',
    age: 28
  }



  return (
    <>
      {/* <UserData user={userData}/> */}

      <ErrorBoundary>
        <UserWithData />

      </ErrorBoundary>

      <ErrorBoundary fallback={<p>name data cant be found.</p>}>
        <UserName />

      </ErrorBoundary>

       <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
      Tailwind v4 is working
    </div>

    </>
  )
}

export default App
