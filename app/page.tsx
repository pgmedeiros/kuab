import styles from './app.module.css';

export default function Home() {
  
  return (
    <div className={styles.mainText}>
      <p>
        Esse projeto possui como base os seguintes mandamentos: 
      </p>
      <ul>
        <li>
          O acesso a computadores - e qualquer outro meio que seja capaz de ensinar algo sobre como o mundo funciona - deve ser ilimitado e total.
        </li>
        <li>
          Toda a informação deve ser livre.
        </li>
        <li>
        Hackers devem ser julgados segundo seu hacking, e não segundo critérios sujeitos a vieses tais como graus acadêmicos, raça, cor, religião, posição ou idade.
        </li>
        <li>
        Computadores podem mudar sua vida para melhor.
        </li>
      </ul>
      
      <p>
      Aqui organizo e compartilho aulas que foram postadas online. Não criei nada, apenas organizei baseado baseado na <a href="https://cc.ufc.br/curso/matriz-curricular/">grade curricular da Universidade Federal do Ceará</a>.
      </p>
      
      <p>Os números ordinais no menu acima indicam o semestre. Clique e assista as aulas. Aos poucos também serão adicionados listas de exercício e materiais para leitura.</p>

      <p>Bom estudo :D</p>

      <p>Caso queira contribuir com algo, basta acessar o <a href="https://github.com/pgmedeiros/kuab">repositório</a>.</p>
    </div>
  )
}
