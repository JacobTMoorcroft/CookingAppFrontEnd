
import PropTypes from 'prop-types';

const Dropdown = ({ label, options, selectedValue, setSelectedValue }) => {
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label}>{label}: </label>
      <select id={label} value={selectedValue} onChange={handleChange}>
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedValue: PropTypes.string.isRequired,
    setSelectedValue: PropTypes.func.isRequired,
  };
export default Dropdown;
