import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import BrandContainer from 'Components/compounds/BrandContainer';
import './style.scss';

const NotFound = (props) => {
  return (
<Fragment>
    <div className="notFound">
      <div className="notFoundGroup">
        <div className="first">
          <h1>404</h1>
            <h2> Page </h2>
         </div>
         <div className="second">
           <h2> The Page was not found</h2>
         </div>
       </div>

       <div className="home">
          <Link to="/"> Go Back To Home </Link>
       </div>

    </div>
  </Fragment>
  )
}

export default NotFound
