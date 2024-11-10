import Header from './components/Header/Header.jsx'
import HomePage from './Pages/Home/HomePage.jsx'
import { Route, Routes } from 'react-router-dom';
function App() {
  return(<>
    <Header />
    <Routes>
      <Route path ="/" element = {<HomePage />}/>
    </Routes>
    </>
  );

}

export default App;
