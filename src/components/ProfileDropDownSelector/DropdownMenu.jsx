import { useEffect, useState } from 'react';
import { getAllProfiles } from '../../api/api';

function DropdownMenu() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(''); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllProfiles(); 
        setItems(response); 
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <label htmlFor="item-dropdown">Select an Item:</label>
      <select
        id="item-dropdown"
        value={selectedItem}
        onChange={handleSelectChange}
      >
        <option value="">--Choose an option--</option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} {/* Customize with the correct property */}
          </option>
        ))}
      </select>
      {selectedItem && <p>Selected Item ID: {selectedItem}</p>}
    </div>
  );
}

export default DropdownMenu;
