import { List } from "./Generic_Component";

export function Generic(){
    // if typeScript is unable to infer what actual type is : manually specify
    // <List< {id: number, name: string, age?: number} >  ?-> Optional
    // .../>
    return (
        <>
        <List
        items={[
            {id: 1, name: "John", age: 35},
            {id: 2, name: "Jane", age: 30}
        ]} 
        getKey={item => item.id} 
        renderItem={item => <div>Name: {item.name} - Age: {item.age}</div>}
        />
        </>
    )
}