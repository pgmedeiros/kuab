import Link from 'next/link';
import styles from './app.module.css';
import { getCourses } from './lib/data';


export default function Home() {
  
  return (
    <main>
      <Semestre />
    </main>
  )
}

async function Semestre() {  

  const courses = await getCourses();

  return (

    <div className={styles.main}>
      
      {courses?.map((course) => {
        return (
          <CourseCard key={course.name} name={course.name} description={course.description} id_course={course.id}/>
        );
      })}

    </div>

  );
}

function CourseCard({name, description, id_course}: {name : string, description: string, id_course: string}) {
  
  const link = `/course/${id_course}`;
  
  return(
    <div className={ styles.courseCard }>
      <img src='https://imgs.search.brave.com/ZwbiXkVL-43SpzagJwN3JXkJib5C9k8QJ7N_1nD9Oh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzI0LzQzLzg4/LzM2MF9GXzUyNDQz/ODg3N19QWkZ6d2M1/T1dKM01UV1FWRmZI/S3d1MURSVk1hU2dQ/eC5qcGc' className={ styles.courseCardImg }></img>
      <p className={ styles.courseCardTitle}> { name } </p>
      <p className={ styles.courseCardDescription}> { description } </p>
      <Link className={ styles.courseCardButton } href={ link } >
        <button className= { styles.button } >Acessar</button>
      </Link>
    </div>
  );
}
