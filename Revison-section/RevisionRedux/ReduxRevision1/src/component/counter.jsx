import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {INCREMENT ,increment } from "../redux/action"

export function Counter() {

    let count = useSelector((state) => state.count)

    let dispatch=useDispatch()

    return (
        <>
            <button onClick={()=>dispatch(increment())}>Inc</button>
            <h1>{count}</h1>
            <button>Dec</button>
            <button>Reset</button>
        </>
    )
}