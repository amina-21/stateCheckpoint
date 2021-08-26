import React from 'react'

const Profile = ({person}) => {
    
    return (
        <div>
            <h3>
                {person.fullName}
            </h3>
            <p>
                {person.bio}
            </p>
            <img src={person.imgSrc} alt={person.fullName} style={{height:300}}/>
            <p>
                {person.profession}
            </p>
            
            
        </div>
    )
}

export default Profile
