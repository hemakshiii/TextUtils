import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


 export default function Navbar(props){
    return(

        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" type="checkbox"  onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
</div>
          </div>
        </div>
        </nav>
    );
}

Navbar.propTypes={title:PropTypes.string.isRequired,
                 about:PropTypes.string.isRequired}

Navbar.defaultProps={
  title:'Set title here',
  about:"Set about"
}







