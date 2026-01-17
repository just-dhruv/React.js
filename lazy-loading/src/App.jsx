import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom'

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Products = lazy(() => import('./Products'));
const Phone = lazy(() => import('./Phone'));
const Tablet = lazy(() => import('./Tablet'));
const Post = lazy(() => import('./Post'))
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Products from './Products'
// import Phone from './Phone'
// import Tablet from './Tablet'

function App() {

  function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User name is: {id}</h2>
  }

  function NotFound() {
    return <h1>404 - Page not found.</h1>
  }

  return (
    <>

      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> */}
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> |
          <Link to="/user/10">User</Link> |
          <Link to="/products">Products</Link> | 
          <Link to="/Posts">Posts</Link>
      </nav>

      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          {/* NESTED ROUTE */}
          <Route path='/products' element={<Products />}>
            <Route path='phone' element={<Phone />} />
            <Route path='tablet' element={<Tablet />} />
          </Route>
          <Route path='/posts' element={<Post />} />

        </Routes>
      </Suspense>
    </BrowserRouter >

    </>
  )
}

export default App
