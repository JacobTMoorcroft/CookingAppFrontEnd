import './PatchProfile.css'

import { useEffect, useState } from 'react';
import { getAllProfiles, patchProfile } from '../../api/api';

function PatchProfileData() {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItem] = useState(''); 
  const [nameInput, setNameInput] = useState('')
  const [relationInput, setRelationInput] = useState('')

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
    console.log(selectedItemId)
    
    const patchDataId = selectedItemId;

    const newName = nameInput.trim()
    const newRelation = relationInput.trim()

    const patchData = {
        profile_name: newName,
        relation: newRelation,
        
    };

    try {
      const response = patchProfile(patchDataId, patchData);
      console.log(response);
    
    } catch (error) {
      console.error("Could not change profile", error);

    }

  }

  return (
    <form className= 'form' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="item-dropdown">Select an Item:</label>
            <select
                id="item-dropdown"
                value={selectedItemId}
                onChange={handleSelectChange}
                >
                <option value="">Choose an option</option>
                {items.map((item) => (
                    <option key={item.id} value={item.id}>
                    {item.name} {item.profile_name}
                    </option>
                ))}
            </select>
            {selectedItemId && <p>Selected Item to change: {selectedItemId}</p>}
        </div>
      <div>
        <label>Profile Name </label>
                <input 
                    type='text'
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder='Name'
                />
    </div>
            <div>
                <label>Relation </label>
                <input 
                    type='text'
                    value={relationInput}
                    onChange={(e) => setRelationInput(e.target.value)}
                    placeholder='Relation'
                />
            </div>
      <button type='submit'>Change Selected Profile</button>
    </form>
  );
}

export default PatchProfileData;
