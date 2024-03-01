import React, { useState } from "react";
import "../App.css";

function Tableview({ customers }) {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of records per page
  const recordsPerPage = 20;
  // State to track sorting order (ascending or descending)
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to extract date
  function extractDate(date) {
    const Str_date = date.toString();
    const dateObject = new Date(Str_date);
    return dateObject.toISOString().split('T')[0];
  }

  // Function to extract time
  function extractTime(date) {
    const Str_date = date.toString();
    const dateObject = new Date(Str_date);
    return dateObject.toISOString().split('T')[1];
  }

  // Function to sort data based on date
  const sortData = () => {
    const sortedCustomers = customers.slice().sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    return sortedCustomers;
  };

  // Calculate the index of the first and last record to display based on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortData().slice(indexOfFirstRecord, indexOfLastRecord);
 

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle sorting order toggle
  const toggleSortOrder = () => setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  // Calculate total number of pages
  const totalPages = Math.ceil(customers.length / recordsPerPage);

  return (
    <div className="container">
        <div className="row justify-content-center">
    <div className="col-lg-10">
      <h2 className="table_Heading">Customer List</h2>
      <table className="table table-success table-striped table-hover ">
        <thead>
          <tr>
            <th>sno</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th onClick={toggleSortOrder} style={{ cursor: "pointer" }}>Date {sortOrder === "asc" ? "▲" : "▼"}</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((customer, index) => (
            <tr key={index}>
              <td>{customer.sno}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{extractDate(customer.created_at)}</td>
              <td>{extractTime(customer.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      {totalPages > 1 &&
        <nav aria-label="...">
          <ul className="pagination pagination-xs">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        </nav>
      }
    </div>
    </div>
    </div>
  );
}

export default Tableview;
