import { sql } from '@vercel/postgres';
import { Course, Lecture } from './definitions';


export async function getLectures() {
  
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

export async function getCourses() {
  try {
    const data = await sql<Course>`SELECT name, description FROM courses`;

    return data.rows;
  }
  catch(error) {
    console.log(error);
  }
}
