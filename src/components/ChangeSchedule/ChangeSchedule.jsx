import { useState, useEffect } from 'react';
import Dropdown from '../DropDownMenu/DropDownMenu.jsx';
import {getAllProfiles, getAllDishes, patchSchedule, clearSchedule} from '../../api/api.jsx'
import TimeTable from '../TimeTableForSchedule/TimeTable.jsx'
import "./changeSchedule.css";

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
      setRefreshKey((prevKey) => prevKey + 1); 
    }, 200);

  };
  
  const handleClear = async () => {
    try {
      const response = clearSchedule();
      console.log(response)
    } catch (error) {
      console.log("Could not clear timetable" + error);
    }

    setTimeout(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 200)

  }

  return (
    <div className='entireBlock'>

      <div>
        <TimeTable refreshKey={refreshKey} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>
      <h3 className='selectDay'>Select a Day to change</h3>

      <h1 className='selectDay'>Manage Dropdown Selections</h1>
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
      <button onClick={handleSave} className="save-Button">Save</button>
      <button onClick={handleClear} className="clear-Button">Clear Schedule</button>
    </div>
  );
};

export default ParentComponent;
