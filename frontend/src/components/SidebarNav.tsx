import { Context } from "./StateContext";

export default function SidebarNav() {
    const {statecontext, setstatecontext}:any = Context()
  
    return (
      <div>
        <p>Home</p>
  
        {statecontext && <div>statecontext</div>}

        <button onClick={()=>setstatecontext(!statecontext)}>click2</button>
      </div>
    );
  }
  