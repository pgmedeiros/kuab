import { sql } from '@vercel/postgres';
import { Course, Lecture } from './definitions';


export async function getClassFromSubject() {
  
    try {
  
      const data = await sql<Lecture>`
      SELECT
        link
      FROM from lectures
    `; 
      return data.rows;
  
    }catch(error) {
      console.log(error);
    }
  
}
