import { sql } from '@vercel/postgres';
import { Subject } from './definitions';


export async function getClassFromSubject() {
  
    try {
  
      const data = await sql<Subject>`
      SELECT
        link
      FROM from subject
    `; 
      return data.rows;
  
    }catch(error) {
      console.log(error);
    }
  
}
