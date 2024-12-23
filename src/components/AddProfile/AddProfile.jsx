import './AddProfile.css';
import {postProfile} from '../../api/api.jsx';
import { useState } from 'react';

function AddProfile() {
    const [nameInput, setNameInput] = useState('');
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const patchProfileData = {
            profile_name: nameInput,

        };

        try {
            const response = postProfile(patchProfileData);
            console.log(response);
            window.location.reload();
            
           
       } catch (error) {
           console.error("Could not add profile", error);
       }
       setNameInput('');
       
    };




    return (
        <form className = "form" onSubmit={handleSubmit}>
            <div>
                <label>Profile Name </label>
                <input 
                    type='text'
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder='Name'
                />
            </div>

            <button type="submit">Add Profile</button>
        </form>
    );
};



export default AddProfile;