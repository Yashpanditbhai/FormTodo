import React, { Fragment, useRef } from "react";

const EditForm = ({ data, handleSave, handleCancel }) => {
  const nameRef = useRef();
  const subjectRef = useRef();
  const companyRef = useRef();

  const handleSaveClick = (e) => {
    e.preventDefault();

    handleSave({
      ...data,
      name: nameRef.current.value,
      subject: subjectRef.current.value,
      company: companyRef.current.value,
      isEdit: false,
    });
  };

  const handleCancelClick = () => {
    handleCancel({ ...data, isEdit: false });
  };

  return (
    <form
      onSubmit={handleSaveClick}
      className="bg-blue-950 w-[90%] border rounded-xl m-1 relative flex items-center justify-between flex-row"
    >
      <div className="flex flex-col w-[70%] m-1">
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          placeholder="Enter Name"
          className="border rounded-md m-1 bg-slate-200 p-1"
          ref={nameRef}
        />
        <input
          type="text"
          name="subject"
          defaultValue={data.subject}
          placeholder="Enter Subject"
          className="border rounded-md m-1 bg-slate-200 p-1"
          ref={subjectRef}
        />
        <input
          type="text"
          name="company"
          defaultValue={data.company}
          placeholder="Enter Company"
          className="border rounded-md m-1 bg-slate-200 p-1"
          ref={companyRef}
        />
      </div>
      <div className="text-white">
        <button
          className="p-1 bg-rose-500 mx-4 rounded-md px-1"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
        <button className="p-1 bg-sky-600 mx-4 rounded-md px-1" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
