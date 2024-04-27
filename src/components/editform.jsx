import React, { Fragment } from "react";

const EditForm = ({data,key,handleCancel}) => {
  return (
    <Fragment>
      <form
        action=""
        className="bg-blue-950 w-[90%] border rounded-xl m-1 relative flex items-center justify-between flex-row"
      >
        <div className=" flex flex-col w-[70%] m-1 ">
          <input 
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Name"
            className="border rounded-md m-1 bg-slate-200 p-1"
          />
          <input
            type="text"
            name="subject"
            value={data.subject}
            placeholder="Enter Subject"
            className="border rounded-md m-1 bg-slate-200 p-1"
          />
          <input
            type="text"
            name="company"
            value={data.company}
            placeholder="Enter Company"
            className="border rounded-md m-1 bg-slate-200 p-1"
          />
        </div>
        <div className="text-white">
          <button className="p-1 bg-rose-500 mx-4 rounded-md px-1" onClick={handleCancel} >Cancel</button>
          <button className="p-1 bg-sky-600 mx-4 rounded-md px-1">Save</button>
        </div>
      </form>
    </Fragment>
  );

};

export default EditForm;
