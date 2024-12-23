import './Profiles_List.css';
import {getAllProfiles} from '../../api/api.jsx';
import {useEffect, useState } from 'react';


function Profiles_List() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProfiles = await getAllProfiles();
                console.log(fetchedProfiles);
                setProfiles(fetchedProfiles);

            } catch (error) {
                console.error("Could not fetch data", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className='profile-container'>

            <div className='title'><h2>Profiles</h2></div>
            {profiles.map((profile) => (
                <div className='profiles' key={profile.id}>
                <h4>Name: {profile.profile_name}</h4>
               </div>
            ))}
        </div>

    );
}


export default Profiles_List;