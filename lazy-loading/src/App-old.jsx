import { useState, lazy, Suspense } from "react"
// import Post from "./Post"
const Post = lazy(() => import('./Post'))

function App() {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <button onClick={() => setShowPost(!showPost)}>Show/Hide Post</button>
      
      { showPost && (
        <Suspense fallback={<p>Loading Posts...</p>}>
          <Post />
        </Suspense>
      )}
    </>
  )
}

export default App
