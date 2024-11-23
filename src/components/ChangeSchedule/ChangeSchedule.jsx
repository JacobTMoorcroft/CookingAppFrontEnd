import { useState } from 'react';
import Dropdown from './Dropdown';

const ParentComponent = () => {
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");

  const handleSave = async () => {
    const payload = {
      dropdown1: dropdown1Value,
      dropdown2: dropdown2Value,
    };

    try {
      const response = await fetch('https://your-api-endpoint.com/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Successfully updated:", data);
      } else {
        console.error("Failed to update:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during update:", error);
    }
  };

  return (
    <div>
      <h1>Manage Dropdown Selections</h1>
      <Dropdown
        label="Dropdown 1"
        options={["Option 1", "Option 2", "Option 3"]}
        selectedValue={dropdown1Value}
        setSelectedValue={setDropdown1Value}
      />
      <Dropdown
        label="Dropdown 2"
        options={["Option A", "Option B", "Option C"]}
        selectedValue={dropdown2Value}
        setSelectedValue={setDropdown2Value}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ParentComponent;
