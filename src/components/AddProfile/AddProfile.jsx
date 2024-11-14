import './AddProfile.css';
import {postProfile} from '../../api/api.jsx';
import { useState } from 'react';

function AddProfile() {
    const [nameInput, setNameInput] = useState('');
    const [relationInput, setRelationInput] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const patchProfileData = {
            profile_name: nameInput,
            relation: relationInput,

        };

        try {
            const response = postProfile(patchProfileData);
            console.log(response);
            window.location.reload();
            
           
       } catch (error) {
           console.error("Could not add profile", error);
       }
       setNameInput('');
       setRelationInput('');
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
            <div>
                <label>Relation </label>
                <input 
                    type='text'
                    value={relationInput}
                    onChange={(e) => setRelationInput(e.target.value)}
                    placeholder='Relation'
            />
            </div>
            <button type="submit">Add Profile</button>
        </form>
    );
};



export default AddProfile;