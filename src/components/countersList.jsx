import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);
    console.log(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleIncrement = (id) => {
        setCounters(prevState => prevState.map(e => {
            if (e.id === id) e.value += 1
                return e;
        }))

    }
    const handleDecrement = (id) => {
        setCounters(prevState => prevState.map(e => {
            if (e.id === id && e.value) e.value -= 1
            return e;
        }))
    }
    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
        </>
    )
}
export default CountersList;
