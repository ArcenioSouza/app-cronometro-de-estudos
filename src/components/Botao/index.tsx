import React from 'react'
import style from './Botao.module.scss'

interface Props {
   texto: string, 
   type?: "button" | "submit" | "reset" | undefined,
   onClick?: () => void 
}

const Botao = ({texto, type, onClick}: Props) => {

   return (
      <button 
         type={type} 
         className={style.botao}
         onClick={onClick}
      >
         {texto}
      </button>
   )
}

export default Botao