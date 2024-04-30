import React, { useEffect, useReducer, useState } from "react";
import FormData from "./FromData";

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
          isEdit: false,
        },
      ];

    case "manage":
      return state.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });

    case "DELETE":
      return state.filter((data) => data.id != action.id);

    case "RESET_EDIT":
      return state.map((item) => ({
        ...item,
        isEdit: false,
      }));

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
    setInputValues(intialInputValues);

    // console.log(inputValues);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  const handleEdit = (data) => {
    console.log(data);
    const task = {
      ...data,
      isEdit: true,
    };
    dispatch({ type: "manage", task });
  };

  const handleSave = (task) => {
    dispatch({ type: "manage", task });
  };

  const handleCancel = (task) => {
    dispatch({ type: "manage", task });
  };

  return (
    <div className="container flex flex-col justify-center items-center m-4">
      <div className="  forminput flex flex-col w-[60%] ">
        <form className="flex flex-col" onSubmit={handleClick}>
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            name="name"
            value={inputValues.name}
            onChange={onChnageHandler}
            placeholder="Name"
          />
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            name="subject"
            value={inputValues.subject}
            // onChange={(e) => setSubject(e.target.value)}
            onChange={onChnageHandler}
            placeholder="Subject"
          />
          <input
            className="m-1 bg-slate-200 p-1"
            type="text"
            value={inputValues.company}
            name="company"
            onChange={onChnageHandler}
            placeholder="Company"
          />
          <div className="text-center mt-3 p-1 bg-blue-700 text-white rounded-full">
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
      <FormData
        DataList={state}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </div>
  );
};

export default FormComponent;
