Before running the project, follow these steps:

1. **Database Setup:**
   - Create a PostgreSQL database named "zithara".
   - Create a table named "customers" with the following columns:
     - sno (Serial Primary Key)
     - customer name (VARCHAR)
     - age (INTEGER)
     - phone (VARCHAR)
     - location (VARCHAR)
     - created_at (TIMESTAMP)
   - Add 50 records to the "customers" table.

2. **Run Backend (Node.js):**
   - Navigate to the "node" folder in your terminal.
   - Run the "welcome.js" file using the command:
     ```
     node welcome.js
     ```

3. **Run Frontend (React.js):**
   - Navigate to the "my-app" folder in your terminal.
   - Start the frontend server using the command:
     ```
     npm start
     ```
   
4. **Access Output:**
   - After starting the frontend server, you can access the output by opening your web browser and navigating to:
     ```
     http://localhost:3000
     ```

By following these steps, you'll have both the backend and frontend servers running, and you can access the web application to manage the customer records by visiting "localhost:3000" in your web browser.
