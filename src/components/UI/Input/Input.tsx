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
      <div>
        <div>
          <i className="fas fa-user"></i>
        </div>
        <input
          id={htmlFor} 
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </div>

        <span>{props.errorMessage}</span>
    </div>
  )
}

export default Input