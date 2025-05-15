import express, { json, Router } from 'express';
import serverless from "serverless-http";
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();

// init supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// middleware
app.use(json());
const router = Router();

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
