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
          <CourseCard />
        </li>
        <li>
          <CourseCard />
        </li>
        <li>
          <CourseCard />
        </li>
      </ol>
      
    </>
  );
}


function CourseCard() {
  return(
    <div className={ styles.carro }>
      <p>Descrição da matéria a</p>
      <img className='rounded-xl h-32' src="https://algoritmosempython.com.br/images/algoritmos-python/estruturas-dados/Arvore.png" alt="arvore"/>
      <Link className='' href="/course">
        <button>Acessar</button>
      </Link>
    </div>
  );
}