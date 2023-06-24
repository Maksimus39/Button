import React from 'react';

type MyFamilyPropsType = {
    name: string
    callback: () => void
}

export const MyFamily = (props: MyFamilyPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}