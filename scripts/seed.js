const { db } = require('@vercel/postgres');

const lectures = [
    {
      id: 'd7eaa454-ccec-4404-bde4-6c69603b7cb9',
      link: 'https://www.youtube.com/watch?v=h_cscbKu-lY&list=PL5TPkym335qztD0JofGEyVcdmlNf7arzE',
      position: '1',
      course: 'AED1',
      university: 'ufscar'
    },
    {
      id: 'f0823cbf-0901-427e-830f-48a3ca858d4a',
      link: 'https://www.youtube.com/watch?v=1Uz8wXKdzcA&list=PL5TPkym335qztD0JofGEyVcdmlNf7arzE&index=2',
      position: '2',
      course: 'AED1',
      university: 'ufscar'
    },
    {
      id: 'ce617aff-befc-4e86-871a-ff74ea78699e',
      link: 'https://www.youtube.com/watch?v=X60pMaSdo2A&list=PL5TPkym335qztD0JofGEyVcdmlNf7arzE&index=3',
      position: '3',
      course: 'AED1',
      university: 'ufscar'
    }
  ];

async function seedClassAlgorithmOne(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "lectures" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS lectures (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        link VARCHAR(1000) NOT NULL,
        position TEXT NOT NULL,
        course TEXT NOT NULL,
        university TEXT NOT NULL
      );
    `;

    console.log(`Created "lectures" table`);

    // Insert data into the "lectures" table
    const insertedLectures = await Promise.all(
      lectures.map(async (lecture) => {
        return client.sql`
        INSERT INTO lectures (id, link, position, course, university)
        VALUES (${lecture.id}, ${lecture.link}, ${lecture.position}, ${lecture.course}, ${lecture.university})
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

async function main() {
  const client = await db.connect();

  await seedClassAlgorithmOne(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
