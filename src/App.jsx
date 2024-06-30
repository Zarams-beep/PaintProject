import Footer from "./component/Footer";
import Header from "./component/Header";
import HomePage from "./views/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        
      </Routes>

      <Footer/>
    </div>
  </Router>
  )
}

export default App
