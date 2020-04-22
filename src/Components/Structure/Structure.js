import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Data from '../../Data';
import { useState } from 'react';
import Information from '../../Components/Information/Information';
import './Structure.css';
import UserInformationCount from '../UserInformationCount/UserInformationCount';

const Structure = () => {

     console.log(Data);

     const first3 = Data.slice(0,10);
     const [data, setData] = useState(first3);
     const [cart, setCart] = useState([]);
     const addInformation = (info) => {
          //   console.log("added user information",info);
          const newUser = [...cart, info];
          setCart(newUser);
     }

       
     // const newUsers = [...users];
     // setUsers(newUsers)







     return (
          <div className="container information-container position-relative  ">
               <div className="row">
                    <div className="col-sm-6 ">
                         <h5 className="text-primary">User list</h5>
    
                         <hr />
                         <div>
                              <ul>

                                   {data.map(single => <Information addInformation={addInformation} info={single}></Information>)}
                              </ul>

                         </div>
                    </div>
                    <div className="col-sm-6 information-border position-relative ">
                         <div className="position-fixed">
                              <UserInformationCount cart={cart}></UserInformationCount>
                         </div>
                    </div>
               </div>
               <div className="footer-area">
                    <p><small>&copy; Jakaria - Biswas</small></p>
               </div>
          </div>
     )
}
export default Structure;