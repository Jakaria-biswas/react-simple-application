import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Information = (props) => {
      console.log(props)
              
      const { img, name, address, profession, salary, email } = props.info;

      return (
            <div>

                  <div className="card mb-4 w-75  ">
                        <div className="card-body">
                        
                              <img className="w-100 img-thumbnail" src={img} alt="" />
                              <h6 className="card-title mt-1"> {name} </h6>
                              <p className="text-danger"><FontAwesomeIcon icon={faUserTie} /> {profession}</p>
                              <p >Salary per month ${salary}</p>
                              <p style={{ color: "goldenrod" }}><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                              <p style={{ color: "goldenrod" }} className=""><FontAwesomeIcon icon={faCompass} /> {address}</p>
                              <button onClick={() => props.addInformation(props.info)} className="btn btn-success">add information</button>
                        </div>
                  </div>
            </div>
      )
}
export default Information;