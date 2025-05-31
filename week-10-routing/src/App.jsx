import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </div>
}

function Layout() {
  return <div style={{ height: "100vh", background: "pink", color: "black" }}>
    <Header />
    <div style={{ height: "90vh", backgroundColor: "red" }}>
      <Outlet />
    </div>
    <Footer />
  </div>
}

function Header() {
  return <div>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>
}

function Footer() {
  return <div>
    This is the footer
  </div>
}

function ErrorPage() {
  return <div>
    You are at the wrong address!
  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }

  return <div>
    NEET programs for class 12th
    <button onClick={redirectUser}>Click to go back</button>
  </div>
}

export default App
