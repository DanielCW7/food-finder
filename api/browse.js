import express, { json, Router } from 'express';
import serverless from 'serverless-http';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Only load .env in local development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(json());

const router = Router();

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// GET route to fetch data
router.get('/browse', async (req, res) => {
  try {
    const { data, error } = await supabase.from('food_stats').select();
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch food stats' });
  }
});

app.use('/api', router);

export default serverless(app);
