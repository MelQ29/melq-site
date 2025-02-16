import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/images/my-photo.jpg";

// Рассчитываем возраст
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const ProfileContainer = styled.div`
  text-align: center;
  margin: 10px 0;
  padding: 10px;
  background-color:rgba(36, 36, 36, 0.89);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Photo = styled.div`
     width: 150px;
     height: 150px;
     border-radius: 50%;
     background-color: #666;
     margin: 0 auto;
     background-image: url(${myPhoto});
     background-size: cover;
     background-position: center;
`;

const Profile = () => {
  const age = calculateAge("2000-09-29");

  return (
    <ProfileContainer>
      <h1>Владислав Мельников (MelQ29)</h1>
      <Photo />
      <p>Возраст: {age} лет</p>
      <p>
        Город:{" "}
        <a
          href="https://www.google.com/maps/place/Калининград,+Россия"
          target="_blank"
          rel="noopener noreferrer"
        >
          г. Калининград
        </a>
      </p>
    </ProfileContainer>
  );
};

export default Profile;