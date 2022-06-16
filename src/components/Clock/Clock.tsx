import React, { useState } from 'react'
import classes from './Clock.module.css'

export const Clock: React.FC = () => {

    const [time, setTime] = useState('')

    function watchingDate() {
        setTimeout(() => {
            setTime(new Date(Date.now()).toLocaleString())
        }, 1000)

        return time.replace(',', '')
    }

    function getCurrentDay() {
        console.log('call')
        const days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ]

        const d = new Date()
        const n = d.getDay()

        return days[n]
    }

    return (
        <figcaption className={classes.Clock}>
            <h2>
                {watchingDate()} {getCurrentDay()}
            </h2>
        </figcaption>
    )
}