
import { createClient } from "@supabase/supabase-js";

// Init Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
    try {
        const { data, error } = await supabase.from('food_stats').select('*');

        if(error) {
            res.status(500).join({error})
        };
    
        res.status(200).json({data});
  } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: 'Error fetching data' });
  }    
}
