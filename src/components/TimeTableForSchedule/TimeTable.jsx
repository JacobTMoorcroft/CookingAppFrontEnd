import './TimeTable.css';
import {getAllSchedule} from '../../api/api.jsx';
import {useEffect, useState } from 'react';
import emptyPlate from '../../assets/empty-plate.jpg';

function Home_Timetable({refreshKey, selectedDay, setSelectedDay}) {
  const [schedule, setSchedule] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSchedule = await getAllSchedule();
        console.log(fetchedSchedule);
        const sortedSchedule = sortDaysByIndex(fetchedSchedule);
        setSchedule(sortedSchedule);
        console.log(sortedSchedule);
      } catch (error) {
        console.error("Could not fetch data", error);
      }

    };
    fetchData();

  }, [refreshKey]);

  const sortDaysByIndex = (schedule) => {
    return schedule.sort((a, b) => a.day_id - b.day_id);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    console.log("Selected Day:", day.id);
  }

  return (
    <div className="schedule_page_container">
      {schedule.map((day) => (
        <div 
        className={`schedulePageDay ${selectedDay?.day_id === day.day_id ? `selected` : ''}`} 
        key={day.day_id}
        onClick={() => handleDayClick(day)}
        >
          <h3>{day.day}</h3>
          <div className="assignment">
        
            <p>Name: {day.profiles && day.profiles.profile_name ? day.profiles.profile_name : "No one assigned" }</p>
            <p>Dish: {day.dishes && day.dishes.dish_name ? day.dishes.dish_name : "No dish assigned"}</p>

          </div>
          <img className="dishImage" src={day.dishes?.imgURL || emptyPlate} alt="Dish image" />
        </div>
      ))}
    </div>
  );
}

export default Home_Timetable;