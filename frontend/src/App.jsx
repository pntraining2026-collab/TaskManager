import {useEffect,useState} from "react";
import api from "./api";
export default function App(){
const[tasks,setTasks]=useState([]);const[title,setTitle]=useState("");
const load=async()=>setTasks((await api.get("/tasks")).data);
useEffect(()=>{load()},[]);
return <div style={{padding:40}}>
<h1>Task Manager</h1>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Task"/>
<button onClick={async()=>{if(!title)return;await api.post("/tasks",{title});setTitle("");load();}}>Add</button>
<hr/>
{tasks.map(t=><div key={t._id}><span style={{textDecoration:t.completed?"line-through":"none"}}>{t.title}</span>{" "}
<button onClick={async()=>{await api.put("/tasks/"+t._id);load();}}>Toggle</button>{" "}
<button onClick={async()=>{await api.delete("/tasks/"+t._id);load();}}>Delete</button></div>)}
</div>}
