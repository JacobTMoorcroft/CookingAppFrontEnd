import './Home_Timetable.css';
import {getAllSchedule} from '../../api/api.jsx';
import {useEffect, useState } from 'react';

function HomeTimetable() {
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

  }, []);

  const sortDaysByIndex = (schedule) => {
    return schedule.sort((a, b) => a.day_id - b.day_id);
  };

  return (
    <div className="schedule-container">
      {schedule.map((day) => (
        <div className="day" key={day.id}>
          <h3>{day.day}</h3>
          <div className="assignment">
            {/* Name and Dish will go here */}
            <p>Name: {day.profiles && day.profiles.profile_name ? day.profiles.profile_name : "No one assigned" }</p>
            <p>Dish: {day.dishes && day.dishes.dish_name ? day.dishes.dish_name : "No dish assigned"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeTimetable;