import './Schedule.css';

function Counter() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return (
    <div className="schedule-container">
      {daysOfWeek.map((day) => (
        <div className="day" key={day}>
          <h3>{day}</h3>
          <div className="assignment">
            {/* Name and Dish will go here */}
            <p>Name: [Person's Name]</p>
            <p>Dish: [Dish Name]</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Counter;