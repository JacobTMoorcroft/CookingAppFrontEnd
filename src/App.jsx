import Header from './components/Header/Header.jsx'
import HomePage from './Pages/Home/HomePage.jsx'
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './Pages/Profiles/ProfilePage.jsx'
import SchedulePage from './Pages/Schedule/SchedulePage.jsx'

function App() {
  return(<>
    <Header />
    <Routes>
      <Route path ="/" element = {<HomePage />}/>
      <Route path ="/Profiles" element = {<ProfilePage />}/>
      <Route path ="/Schedule" element = {<SchedulePage />}/>
    </Routes>
    </>
  );

}

export default App;
