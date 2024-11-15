import './DropdownMenu.css'

import { useEffect, useState } from 'react';
import { getAllProfiles, deleteProfile } from '../../api/api';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedItem)
    
    const deleteData = selectedItem;

    try {
      const response = deleteProfile(deleteData);
      console.log(response);
    
    } catch (error) {
      console.error("Could not delete profile", error);

    }



  }

  return (
    <form className= 'form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item-dropdown">Select an Item:</label>
        <select
          id="item-dropdown"
          value={selectedItem}
          onChange={handleSelectChange}
        >
          <option value="">Choose an option</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} {item.profile_name}
            </option>
          ))}
        </select>
        {selectedItem && <p>Selected Item to delete: {selectedItem}</p>}
      </div>
      <button type='submit'>Delete Selected Profile</button>
    </form>
  );
}

export default DropdownMenu;
