import express from 'express';

import mountRoutes from './routes';

const app = express();

mountRoutes(app);

app.listen(1245);

export default app;
