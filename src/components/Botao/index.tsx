import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component<{ 
   texto: string, 
   type?: "button" | "submit" | "reset" | undefined,
   onClick?: () => void   
}> {

   render(){
      const { type = "button", onClick } = this.props
      return (
         <button 
            type={type} 
            className={style.botao}
            onClick={onClick}
         >
            {this.props.texto}
         </button>
      )
   }
}

export default Botao