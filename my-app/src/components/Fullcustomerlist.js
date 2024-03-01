import React, { useState, useEffect } from 'react';
import Tableview from './Tableview';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/string') // Assuming your backend API endpoint is '/api/customers'
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>

      {!isLoading && <Tableview customers={customers} />}
    </div>
  )
}

export default CustomerList;
