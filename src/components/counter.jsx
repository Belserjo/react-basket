import React from "react";

const Counter = (props) => {
    const {value} = props

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
    <div className='flex justify-content-center w-100 mx-auto'>
        <span> {props.name}</span>
        <span className={getBageClasses() + ' numbersOfItem'}>{formatValue()}</span>
        <button
            className='btn btn-primary btn-sm m-2'
            onClick={() => props.onIncrement(props.id)}
        >
            +
        </button>
        <button
            className='btn btn-primary btn-sm m-2'
            onClick={() => props.onDecrement(props.id)}
        >
            -
        </button>
        <button
            className='btn btn-danger btn-sm m-2'
            onClick={() => props.onDelete(props.id)}
        >
            Delete
        </button>
    </div>
    )
}

export default Counter;
