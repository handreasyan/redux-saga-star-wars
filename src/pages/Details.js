import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {selectPeopleDetails} from "../redux/reducers/peopleDetails/selectors";
import {useSelector} from "react-redux";
import Header from "../components/Header";

const Details = () => {
  const location = useLocation()
  const details = useSelector(selectPeopleDetails)

  if (details.loading) {
    return <div className='loading'> Loading ... </div>
  }

  if (!details.data) {
    return (
      <div id='link-to-current-page'>
        <Link to={location.pathname}> Refresh Page </Link>
      </div>
    )
  }

  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,
  } = details.data

  return (
    <>
      <Header showForm={false}/>
      <div className='details'>
        <h1>{name}</h1>
        <div>Birth Year : <span>{birth_year}</span></div>
        <div>Eye Color : <span>{eye_color}</span></div>
        <div>Gender : <span>{gender}</span></div>
        <div>Hair Color : <span>{hair_color}</span></div>
        <div>Height : <span>{height}</span></div>
        <div>Mass : <span>{mass}</span></div>
        <div>Skin Color : <span>{skin_color}</span></div>
      </div>

    </>
  );
};

export default Details;