
import React, { useState } from "react";
// import TodoList from "./components/second";

import FormComponent from "./components/FormComponent";

function App() {

  return (
    <div className="min-h-screen  flex items-center justify-center w-100vw bg-slate-900 text-black m-0 p-0">
     
      <div className="bg-white h-[100%] w-[60%] bg-white m-0 p-15 border-black rounded-xl mt-15">
        <FormComponent/>
       {/* <TodoList/> */}
      </div>
    </div>
  );
}

export default App;
