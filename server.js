const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv/config');
//Importing routes
const appRoutes = require('./routes/base_routes');
//const leagueRouter = require('./routes/league');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
//connect to DB
/*mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log('Connected to DB'));
*/
//Middleware for responses
app.use(express.json());

//Route middleware
app.use('/', appRoutes);

//Setting the port
app.listen(process.env.SERVER_PORT, () => console.log('Nba project is running!'));