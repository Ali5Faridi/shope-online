import { ComponentProps } from "react"

type variant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

type Button = ComponentProps<'button'> & {
    variant?: variant;
}

function Button({children, variant,style, ...rest}: Button) {

  return (
    <button {...rest} style={{borderRadius:'4px', padding:'4px 8px',...style,...checkVariant(variant)}}> {children} </button>
  )
}

export default Button

function checkVariant(variant?: variant){
    if(variant === 'primary'){
        return {backgroundColor: 'blue', color: 'white'}
    } else if(variant === 'secondary'){
        return {backgroundColor: 'gray', color: 'white'}
  } else if(variant === 'danger'){
        return {backgroundColor: 'red', color: 'white'}
  } else if(variant === 'warning'){
        return {backgroundColor: 'yellow', color: 'black'}
  } else if(variant === 'success'){
        return {backgroundColor: 'green', color: 'white'}
  } else {
      return {backgroundColor: 'blue', color: 'white'}
  } 
}
