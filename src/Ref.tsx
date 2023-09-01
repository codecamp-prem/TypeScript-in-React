import { useRef } from "react";

// ref must be null or Ref Object not undefined when we pass to input.
export function Ref(){
    const inputRef = useRef<HTMLInputElement>(null) //() - undefined by default so (null) | html element. React will handle Ref for you. It is read only
    const value = useRef<number>() // user can mutate it themself.
    //const value = useRef(0)  // same as above 

    value.current = 10

    return (
        <>
        <input ref={inputRef} /> {/* // user will handle only when passing to component like this */}
        </>
    )
}