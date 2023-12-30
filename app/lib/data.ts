import { sql } from '@vercel/postgres';
import { Course, Lecture } from './definitions';
import { unstable_noStore } from 'next/cache';


export async function getLectures(id_course: string) {

    console.log("entrou funcao get lectures");

    console.log(id_course);
  
    unstable_noStore();
  
    try {
  
      const data = await sql<Lecture>`
      SELECT
        link
      FROM lectures
      WHERE id_course = ${id_course};
    `; 
      return data.rows;
  
    }catch(error) {
      console.log(error);
    }  
}

export async function getCourses() {
  try {
    const data = await sql<Course>`SELECT id, name, description FROM courses`;

    return data.rows;
  }
  catch(error) {
    console.log(error);
  }
}
