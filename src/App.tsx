import './App.css';
import NavigationPage from './components/NavigationPage/NavigationPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutesConstant from './constants/routes.constant';

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={< NavigationPage />}/>
          {/* <Route path={RoutesConstant.HqLogin || } element={< HqLogin />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
