import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Footer from "./components/Footer";


function Root() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root },]
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App