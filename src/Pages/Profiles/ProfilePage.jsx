import './ProfilePage.css';
import Profiles_List from '../../components/Profiles_List/Profiles_List.jsx';
import AddProfile from '../../components/AddProfile/AddProfile.jsx'
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu.jsx';

function Home() {

  return (
    <div className="ProfilePage">
      <Profiles_List />
      <AddProfile />
      <DropdownMenu />
    </div>
  );
}

export default Home;