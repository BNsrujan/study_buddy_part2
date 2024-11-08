const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const aiRoutes = require('./routes/aiRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');

const app = express();
app.use(express.json());

app.use('/files', fileRoutes);
app.use('/ai', aiRoutes);
app.use('/evaluation', evaluationRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
