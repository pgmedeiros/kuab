import { sql } from '@vercel/postgres';
import { Course } from './definitions';


export async function getClassFromSubject() {
  
    try {
  
      const data = await sql<Course>`
      SELECT
        link
      FROM from course
    `; 
      return data.rows;
  
    }catch(error) {
      console.log(error);
    }
  
}
