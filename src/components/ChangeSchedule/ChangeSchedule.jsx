import { useState, useEffect } from 'react';
import Dropdown from '../DropDownMenu/DropDownMenu.jsx';
import {getAllProfiles, getAllDishes, patchSchedule} from '../../api/api.jsx'
import TimeTable from '../TimeTableForSchedule/TimeTable.jsx'

const ParentComponent = () => {
  const [dropdownProfile, setDropdownProfile] = useState(null);
  const [dropdownDishes, setDropdownDishes] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchDataProfiles = async () => {
      try {
        const fetchedProfiles = await getAllProfiles();
        console.log(fetchedProfiles);
        setProfiles(fetchedProfiles);
      } catch (error) {
        console.error("Could not fetch profile data", error);
      }
    };
    fetchDataProfiles();

  }, []);

  useEffect(() => {
    const fetchDataDishes = async () => {
      try {
        const fetchedDishes = await getAllDishes();
        console.log(fetchedDishes);
        setDishes(fetchedDishes);
      } catch (error) {
        console,error("Could not fetch profile data", error);
      }
    };
    fetchDataDishes();

  }, []);
  


  const handleSave = async (e) => {
    e.preventDefault();

    const payload = {
      profiles: dropdownProfile,
      dishes: dropdownDishes,
    };

    try {
      const response = patchSchedule(selectedDay.day, payload);
      console.log(response);
    } catch (error) {
      console.log("Could not save timetable", error);
    }



    

    setTimeout(() => {
      setRefreshKey((prevKey) => prevKey + 1); // Increment refresh key after delay
    }, 100);

  };


  return (
    <div>

      <div>
        <TimeTable refreshKey={refreshKey} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>

      <h1>Manage Dropdown Selections</h1>
      <Dropdown
        label="Set Profile"
        options={profiles} 
        selectedValue={dropdownProfile}
        setSelectedValue={setDropdownProfile}
      />
      <Dropdown
        label="Set Dish"
        options={dishes} 
        selectedValue={dropdownDishes}
        setSelectedValue={setDropdownDishes}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ParentComponent;
