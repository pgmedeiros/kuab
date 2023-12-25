import Course from '@/app/course/page';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Semestre />
    </main>
  )
}

function Semestre() {
  return (

    <>
      <h5>Semestre 1</h5>
      <CourseButton />
    </>

  );
}


function CourseButton() {
  return (
    <>
      <ol>
        <li>
          <Link href="/course">Clique aqui</Link>
        </li>
        <li>
          <Link href="/course">Clique aqui</Link>
        </li>
        <li>
          <Link href="/course">Clique aqui</Link>
        </li>
      </ol>
      
    </>
  );
}