import './App.css';
import NavigationPage from './components/NavigationPage/NavigationPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={< NavigationPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
