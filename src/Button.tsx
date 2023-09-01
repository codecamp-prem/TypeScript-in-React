import type { ComponentProps } from "react"
// import { Child } from "./Child";

type ButtonProps = {
    outline: boolean,
} & ComponentProps<"button">
// & ComponentProps<typeof Child>
export function Button({ outline, ...props } : ButtonProps){
    return (
        <>
        <button style={{border: outline ? "1px solid red": undefined}}  {...props}></button>
        </>
    )
}