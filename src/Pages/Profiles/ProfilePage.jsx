import './ProfilePage.css';
import Profiles_List from '../../components/Profiles_List/Profiles_List.jsx';
import AddProfile from '../../components/AddProfile/AddProfile.jsx'
import DropdownMenu from '../../components/DropdownMenuDelete/DropdownMenuDelete.jsx';
import PatchProfileData from '../../components/PatchProfile/PatchProfile.jsx';

function Home() {

  return (
    <div className="ProfilePage">
      <Profiles_List />
      <AddProfile />
      <DropdownMenu />
      <PatchProfileData />
    </div>
  );
}

export default Home;