import { Button } from "./Button";
import { Child } from "./Child";

export default function App(){
  return (
    <>
    <Child>
      <h1>Hi TS</h1>
    </Child>
    <Button outline disabled>Hi I am a button</Button>
    </>
  )
}