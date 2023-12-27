import Link from 'next/link';
import styles from '@/app/app.module.css'

export default function Home() {
  return (
    <main>
      <Semestre />
    </main>
  )
}

function Semestre() {
  return (

    <div className={styles.main}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
    </div>

  );
}

function CourseCard() {
  return(
    <div className={ styles.courseCard }>
      <img src='https://imgs.search.brave.com/ZwbiXkVL-43SpzagJwN3JXkJib5C9k8QJ7N_1nD9Oh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzI0LzQzLzg4/LzM2MF9GXzUyNDQz/ODg3N19QWkZ6d2M1/T1dKM01UV1FWRmZI/S3d1MURSVk1hU2dQ/eC5qcGc' className={ styles.courseCardImg }></img>
      <p className={ styles.courseCardTitle}>Algoritmo e Estrutura de Dados I</p>
      <p className={ styles.courseCardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Link className={ styles.courseCardButton } href="/course">
        <button className= { styles.button } >Acessar</button>
      </Link>
    
    
    </div>
  );
}