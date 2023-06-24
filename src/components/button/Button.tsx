import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}
const Button = (props: ButtonPropsType) => {
    const ButtonHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={ButtonHandler}>{props.name}</button>
        </div>
    );
};

export default Button;