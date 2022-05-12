import classes from './Toggle.module.css'

const Toggle: React.FC = () => {
  return (
    <div className={classes.Toggle}>
        <i className="fas fa-comment-dots"></i>
            <input
                placeholder="Напишите что ну нужно сделать..."
                className="todo-input"
                type="text" 
                // onChange={event => setValue(event.target.value)} 
                // value={value}
            />
            <button 
                className="add-btn" 
                // onClick={() => clickHandler(value)}
            >
                <i className="fas fa-plus"></i> Добавить
            </button>
    </div>
  )
}

export default Toggle