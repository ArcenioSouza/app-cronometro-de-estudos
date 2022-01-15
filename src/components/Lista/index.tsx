import style from './Lista.module.scss'

const Lista = () => {
   const tarefas = [
      {
         tarefa: "React",
         tempo: "02:00:00",
      },
      {
         tarefa: "Javascript",
         tempo: "01:00:00",
      },
      {
         tarefa: "Typescript",
         tempo: "03:00:00",
      },
   ];

   return (
      <aside className={style.listaTarefas}>
         <h2>Estudos do dia</h2>
         <ul>
            {tarefas.map((tarefa, index) => (
               <li key={index} className={style.item}>
                  <h3>{tarefa.tarefa}</h3>
                  <span>{tarefa.tempo}</span>
               </li>
            ))}
         </ul>
      </aside>
   );
};

export default Lista;
