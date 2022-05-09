import {useDispatch, useSelector} from "react-redux";
import {selectPeople} from "../redux/reducers/people/selectors";
import PeopleTablePagination from "./PeopleTablePagination";
import {LOAD_USERS} from "../redux/reducers/people/actions";
import {Link} from "react-router-dom";

function PeopleTable() {
  const people = useSelector(selectPeople)
  const dispatch = useDispatch()

  const changePage = (newPage) => {
    dispatch({type: LOAD_USERS, payload: {page: newPage, search: people.search}})
  }


  if (people.loading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <>
      <table border={1} width='100 % ' cellPadding={5} cellSpacing={0}>
        < thead>
        < tr>
          < th> Name< /th>
          <th>Birth Year</th>
          <th>Eye Color</th>
          <th>Gender</th>
          <th>Hair Color</th>
          <th>Height</th>
          <th>Details</th>
        </tr>
        </thead>
        <tbody>
        {
          people?.data?.results?.map(character => {
            const id = character.url.replaceAll(/\D/g, '')
            return (
              <tr key={character.name + character.birth_year}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.eye_color}</td>
                <td>{character.gender}</td>
                <td>{character.hair_color}</td>
                <td>{character.height}</td>
                <td><Link to={`/people/${id}`}>See Details</Link></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <PeopleTablePagination page={people.page} total={people?.data?.count} onChange={changePage}/>
    </>
  )
    ;
}

export default PeopleTable;
