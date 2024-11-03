import Counter from "@/components/Counter";
import Message from "@/components/Message";

export default function Home() {
  return (
    <div>
        <h4>Home</h4>
        <p>This is the home page</p>

        <Message text="React" color="blue"/>
        <Message text="JSX" color="green"/>

        <Counter initialValue={5}/>
        <Counter initialValue={20}/>
    </div>
  );
}
