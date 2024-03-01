import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Tableview from "./Tableview";
import CustomerList from "./Fullcustomerlist";
import "../App.css";





function Navbar() {
    const [search, setSearch] = useState('');
    const [customer, setCustomer] = useState(null);
    let [isCustomerListEnabled, setIsCustomerListEnabled] = useState(true);
    let [enablebackbutton, setIsbackbutton] = useState(true);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const backbutton = ()=>{
        setIsCustomerListEnabled(true)
        setIsbackbutton(false)
        setSearch('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsCustomerListEnabled(false);
        setIsbackbutton(true)
        //console.log(isCustomerListEnabled)
       
        axios.get(`http://localhost:3001/api/search?search=${search}`)
            .then(response => {
                // Handle response from backend
                setCustomer(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-dark " style={{ height: '70px' }}>
                    <div className="container">
                        <div className="navbar-brand zithara" style={{ color: 'whitesmoke', fontSize:'60px'}}>ZITHARA</div>
                        <form className="d-flex searchbar" onSubmit={handleSubmit}>
                            <input className="form-control me-2" value={search}type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>


            {(customer && enablebackbutton) && <div>
                <button className="fa-solid fa-arrow-left back" onClick={backbutton}  style={{ backgroundColor:'white'}} >  B a c k</button>
                <Tableview customers={customer} />
                </div>
            }
            {isCustomerListEnabled && <CustomerList />}
        </div>
    );
}

export default Navbar;

