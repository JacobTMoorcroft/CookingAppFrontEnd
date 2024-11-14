import './HomePage.css';
import Home_Timetable from '../../components/Home_Timetable/Home_Timetable.jsx';
import Profiles_List from '../../components/Profiles_List/Profiles_List.jsx';


function Home() {

  return (
    <div className="HomePage">
      <Home_Timetable />
      <Profiles_List />
    </div>
  );
}

export default Home;