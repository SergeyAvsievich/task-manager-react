import classes from './Backdrop.module.css'

interface IPropsBackdrop {
    onClick: () => void
}

export const Backdrop: React.FC<IPropsBackdrop> = ({onClick}) => {
    return (
        <div 
            className={classes.Backdrop} 
            onClick={onClick}>
        </div>)}