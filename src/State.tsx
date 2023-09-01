import { useState } from "react";

export function State(){
    const [value, setValue] = useState<string>() // String | undefined
    const [collectionValue, setCollectionValue] = useState<number[]>([]) // number Array 

    return (
        <>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <br/>
        <input type="text" value={collectionValue.toString()} onChange={e => setCollectionValue([3, 6, 9])} />
        </>
    )
}