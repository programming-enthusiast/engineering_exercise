import dotenv from 'dotenv';
import App from './app'

// Load environment variables
dotenv.config();

// Create Express app
const app = new App(8080);
app.start();
