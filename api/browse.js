const express = require('express');
const serverless = require("serverless-http")
const { createClient } = require('@supabase/supabase-js');

const app = express();

// init supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// middleware
app.use(express.json());
const router = express.Router();

// routes
router.get('/browse', async (req, res) => {
    try {
        let { data, error } = await supabase.from('food_stats').select();
        if (error) throw error;
        res.status(200).json(data);
    } catch(error) {
        console.error("error fetching food", error.message);
        res.status(500).json({ error: 'error fetching foods' })
    } 
});

app.use('/api', router)

export default serverless(app);
