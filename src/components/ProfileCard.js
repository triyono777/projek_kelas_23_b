import React from 'react';

function ProfileCard(props) {
    return (
        <div>
            <h2>Profil Pengguna</h2>
            <p><strong>Nama:</strong> {props.name}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Bio:</strong> {props.bio}</p>
            <p><strong>Lokasi:</strong> {props.location}</p>
            <p><strong>Website:</strong> <a href={props.website}>{props.website}</a></p>
        </div>
    );
}

export default ProfileCard;
