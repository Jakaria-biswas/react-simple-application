import React from 'react';

const UserInformationCount = (props) => {
    const cart = props.cart;

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        const info = cart[i];

        total = total + info.salary;
    }
    const alertMessage = () => {
         alert("please click user add information")
    }

    return (

        <div>
            <h5 className="text-primary">User Information add here</h5>

            <hr />
            <h6>Total User : {cart.length}</h6>
            <p>Salary :${total}</p>
            <b />
            <button onClick={alertMessage} className="btn btn-primary">Review user collection</button>
        </div>
    )
}
export default UserInformationCount;