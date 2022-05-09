import {Link} from "react-router-dom";
import PeopleTable from "../components/PeopleTable";
import {useEffect} from "react";
import Header from "../components/Header";

function App() {

  useEffect(() => {
    document.getElementById('link-to-home-page').children[0].click()
  }, [])

  return (
    <>
      <Header showForm={true}/>
      <div id='link-to-home-page'>
        <Link to={'/'}> Open App </Link>
      </div>

      <PeopleTable/>
    </>
  );
}

export default App;
