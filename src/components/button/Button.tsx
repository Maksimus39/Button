import React from 'react';

type ButtonPropsType={
    name: string
    callback: ()=>void
}
const Button = (props: ButtonPropsType) => {
    const onclickHandler = () => {
      props.callback()
    }
    return (
        <div>
            <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;

