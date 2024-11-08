import Header from './components/Header/Header.jsx'
import Schedule from './components/Schedule/Schedule.jsx'
import { Route, Routes } from 'react-router-dom';
function App() {
  return(<>
    <Header />
    <Routes>
      <Route path ="/" element = {<Schedule />}/>
    </Routes>
    </>
  );

}

export default App;
