const express = require('express');
const serverless = require('serverless-http');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config(); // This works in both local and Vercel if envs are set

const app = express();
const router = express.Router();

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

router.get('/browse', async (req, res) => {
  try {
    const { data, error } = await supabase.from('food_stats').select();
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error('Supabase error:', err.message);
    res.status(500).json({ error: 'Failed to fetch food stats' });
  }
});

app.use('/api', router);

module.exports = serverless(app);
