require('dotenv/config');
const express = require('express');
const userRoutes = require('./users/users-routes');

const server = express();
const port = process.env.PORT || 4000;


server.use(express.json());

server.use('/api', userRoutes);

// error catching
server.use((err, _, res, __) => {
	console.log(err);

	res.status(500).json({
		message: 'Something went wrong',
	});
});

server.listen(port, () => {
	console.log(`### Running at http://localhost:${port}`);
});