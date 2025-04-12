const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const schema = require('../utils/schema');

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
const db = drizzle(sql, { schema });

async function checkDatabase() {
  try {
    console.log('Checking database connection...');
    
    // Check MockInterview table
    const mockInterviews = await db.select().from(schema.MockInterview);
    console.log('MockInterview table:', mockInterviews.length > 0 ? 'OK' : 'Empty');
    
    // Check Question table
    const questions = await db.select().from(schema.Question);
    console.log('Question table:', questions.length > 0 ? 'OK' : 'Empty');
    
    // Check UserAnswer table
    const userAnswers = await db.select().from(schema.UserAnswer);
    console.log('UserAnswer table:', userAnswers.length > 0 ? 'OK' : 'Empty');
    
    console.log('Database check completed successfully');
  } catch (error) {
    console.error('Error checking database:', error);
  }
}

checkDatabase(); 