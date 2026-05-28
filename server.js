process.on('uncaughtException', (err) => {
  console.error('CRASH ERROR:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('REJECTION ERROR:', err);
});
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const servicesRouter = require('./routes/services');
const teamRouter = require('./routes/team');
const projectsRouter = require('./routes/projects');
const inquiriesRouter = require('./routes/inquires');
const certsRouter = require('./routes/certifications');
const announcementsRouter = require('./routes/announcements');
const budRouter = require('./routes/bud');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'T-Bud backend is running!' });
});

app.use('/api/services', servicesRouter);
app.use('/api/team', teamRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/certifications', certsRouter);
app.use('/api/announcements', announcementsRouter);
app.use('/api/bud', budRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('T-Bud backend running on port ' + PORT);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught error:', err.message);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err.message);
});