import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";
import {LOAD_USERS} from "../redux/reducers/people/actions";
import {Link} from "react-router-dom";

const Header = ({showForm}) => {
  const people = useSelector(selectPeople)
  const dispatch = useDispatch()

  const search = (e) => {
    dispatch({type: LOAD_USERS, payload: {page: 1, search: e.target.value}})
  }

  return (
    <div className='header'>
      <div className="logo">
        <img src="/logo.png" alt="Logo"/>
      </div>
      {showForm ? (
        <div className='form-search'>
          <form action="">
            <input type="text" value={people.search} onChange={search} placeholder='Search People'/>
            <button>Search</button>
          </form>
        </div>
      ) : (
        <div className='form-search'>
          <Link to={'/'}> ◄ Go Back </Link>
        </div>
      )}
    </div>
  );
};

export default Header;