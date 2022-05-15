import React, { ChangeEventHandler} from 'react'
import classes from './Input.module.css'

interface PropsInput {
  type: string,
  label: string,
  value: string,
  errorMessage: string,
  onChange: ChangeEventHandler<HTMLInputElement> 
}

const Input: React.FC<PropsInput> = (props) => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
        <input
          id={htmlFor} 
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />

        <span>{props.errorMessage}</span>
    </div>
  )
}

export default Input