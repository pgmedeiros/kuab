const { db } = require('@vercel/postgres');

const lectures = [
    {
      id: 'd7eaa454-ccec-4404-bde4-6c69603b7cb9',
      link: 'https://www.youtube.com/embed/h_cscbKu-lY?si=9AwvsMc-nOxwG8hG',
      position: '1',
      course_id: 'b39ae685-7050-4fd7-891a-93777f2fd2cc',
      university: 'ufscar'
    },
    {
      id: 'f0823cbf-0901-427e-830f-48a3ca858d4a',
      link: 'https://www.youtube.com/embed/1Uz8wXKdzcA?si=rPZ03_83-dJ7Bx1S',
      position: '2',
      course_id: 'b39ae685-7050-4fd7-891a-93777f2fd2cc',
      university: 'ufscar'
    },
    {
      id: 'ce617aff-befc-4e86-871a-ff74ea78699e',
      link: 'https://www.youtube.com/embed/X60pMaSdo2A?si=GBWMWNbyfW2fjmFK',
      position: '3',
      course_id: 'b39ae685-7050-4fd7-891a-93777f2fd2cc',
      university: 'ufscar'
    }
  ];


  const courses = [
    {
      id: 'b39ae685-7050-4fd7-891a-93777f2fd2cc',
      name: 'Algoritmos e Estrutura de Dados I',
      description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
    }
  ];

async function seedLecturesAlgorithm(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "lectures" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lectures (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        link VARCHAR(1000) NOT NULL,
        position TEXT NOT NULL,
        id_course UUID NOT NULL,
        university TEXT NOT NULL,
        FOREIGN KEY (id_course) REFERENCES courses (id)
      );
    `;

    console.log(`Created "lectures" table`);

    // Insert data into the "lectures" table
    const insertedLectures = await Promise.all(
      lectures.map(async (lecture) => {
        return client.sql`
        INSERT INTO lectures (id, link, position, id_course, university)
        VALUES (${lecture.id}, ${lecture.link}, ${lecture.position}, ${lecture.course_id}, ${lecture.university})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedLectures.length} lectures`);

    return {
      createTable,
      lectures: insertedLectures,
    };
  } catch (error) {
    console.error('Error seeding lectures:', error);
    throw error;
  }
}

async function seedCourses(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "courses" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS courses (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL      
      );
    `;

    console.log(`Created "courses" table`);

    // Insert data into the "courses" table
    const insertedCourses = await Promise.all(
      courses.map(async (course) => {
        return client.sql`
        INSERT INTO courses (id, name, description)
        VALUES (${course.id}, ${course.name}, ${course.description})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCourses.length} courses`);

    return {
      createTable,
      courses: insertedCourses,
    };
  } catch (error) {
    console.error('Error seeding courses:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCourses(client);
  await seedLecturesAlgorithm(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
