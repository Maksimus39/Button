import React from "react";

type NameProps = {
    name: string
    callBack: () => void
}
export const Button = (props: NameProps) => {

    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onclickHandler}>{props.name}</button>
    )
}