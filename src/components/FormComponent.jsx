import React, { useReducer, useState } from "react";
import FormData from "./FromData";

const initalState = [
  {
    id: 0,
    name: "",
    subject: "",
    company: "",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.inputData.name,
          subject: action.inputData.subject,
          company: action.inputData.company,
        },
        // action.inputData.name(""),
        // action.inputData.subject(""),
        // action.inputData.company("")
      ];


    default:
      return state;
  }
};

let intialInputValues = {
  name: "",
  subject: "",
  company: "",
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [inputValues, setInputValues] = useState(intialInputValues);

  const onChnageHandler = (e) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", inputData: inputValues });
    
    console.log(inputValues);
  };

  // console.log(state);
  return (
    <div className="container flex flex-col justify-center items-center m-4">
      <div className="forminput flex flex-col w-[50%] ">
        <form>
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            name="name"
            value={state.name}
            onChange={onChnageHandler}
            placeholder="Name"
          />
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            name="subject"
            value={state.subject}
            // onChange={(e) => setSubject(e.target.value)}
            onChange={onChnageHandler}
            placeholder="Subject"
          />
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            value={state.company}
            name="company"
            onChange={onChnageHandler}
            placeholder="Company"
          />
          <div className="text-center mt-3 p-1 bg-blue-700 text-white rounded-full">
            <button type="submit" onClick={handleClick}>
              ADD
            </button>
          </div>
        </form>
      </div>
      <FormData DataList={state} />
    </div>
  );
};

export default FormComponent;
