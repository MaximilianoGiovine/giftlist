const app = require('./src/server')
const dbcon = require('./src/config/dbcon') // Import the dbcon function to establish a connection to the database


app.listen(3000, () => {
    console.log('Server is running on port 3000')
   dbcon() // Call the dbcon function to establish a connection to the database
})