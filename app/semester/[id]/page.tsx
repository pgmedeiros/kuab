import Link from 'next/link';
import styles from '../../app.module.css';
import { getCourses } from '../../lib/data';

export default async function Semestre({ params }: { params: { id : string } }) {  

    const courses = await getCourses(params.id);
  
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
        <p className={ styles.courseCardTitle}> { name } </p>
        <p className={ styles.courseCardDescription}> { description } </p>
        <Link className={ styles.courseCardButton } href={ link } >
          <button className= { styles.button } >Acessar</button>
        </Link>
      </div>
    );
  }