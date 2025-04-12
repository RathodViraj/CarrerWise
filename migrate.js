const { drizzle } = require('drizzle-orm/neon-http');
const { neon } = require('@neondatabase/serverless');

const sql = neon('postgresql://neondb_owner:npg_6LtUzyqax3XO@ep-patient-river-a5wwqey6-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require');

async function main() {
    console.log('Running migrations...');
    
    try {
        // Create mock_interview table
        await sql`
            CREATE TABLE IF NOT EXISTS mock_interview (
                id SERIAL PRIMARY KEY,
                json_mock_resp TEXT NOT NULL,
                job_position VARCHAR NOT NULL,
                job_desc VARCHAR NOT NULL,
                job_experience VARCHAR NOT NULL,
                created_by VARCHAR NOT NULL,
                created_at VARCHAR,
                mock_id VARCHAR NOT NULL
            );
        `;
        
        // Create user_answer table
        await sql`
            CREATE TABLE IF NOT EXISTS user_answer (
                id SERIAL PRIMARY KEY,
                mock_id_ref VARCHAR NOT NULL,
                question TEXT NOT NULL,
                correct_ans TEXT NOT NULL,
                user_ans TEXT NOT NULL,
                feedback TEXT NOT NULL,
                rating VARCHAR NOT NULL,
                user_email VARCHAR NOT NULL,
                created_at VARCHAR
            );
        `;
        
        console.log('Tables created successfully');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

main(); 