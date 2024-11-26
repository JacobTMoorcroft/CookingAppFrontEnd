import "./DropDownMenu.css";

const Dropdown = ({ label, options, selectedValue, setSelectedValue }) => {
  const handleChange = (event) => {
    const selectedId = event.target.value;
    const selectedOption = options.find(
      (option) => option.id === parseInt(selectedId, 10)
    );
    setSelectedValue(selectedOption);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor={label} className="dropdown-label">
        {label}:
      </label>
      <select
        id={label}
        value={selectedValue?.id || ""}
        onChange={handleChange}
        className="dropdown-select"
      >
        <option value="">Choose an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name || option.profile_name || option.dish_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
