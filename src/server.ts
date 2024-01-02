import 'express-async-errors';
import express from 'express';

const app = express();
app.use(express.json());
// app.use(routes)
const PORT = 3033;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
