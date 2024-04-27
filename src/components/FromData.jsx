import { Fragment } from "react";
import EditForm from "./editform";

const FormData = ({ DataList, handleDelete, handleEdit, handleCancel }) => {
  return (
    <div className="formoutput w-[100%] h-[100%]">
      <h3 className="font-bold text-xl m-2">Here is your List:</h3>
      {DataList.length > 0 &&
        DataList.map((data, i) => {
          return (
            <Fragment key={i}>
              {data.isEdit && (
                <EditForm data={data} key={i} handleCancel={handleCancel} />
              )}
              {!data.isEdit && (
                <div
                  key={i}
                  className="flex space-x-48 shadow-2xl border-black bg-blue-950 text-white w-full md:w-[90%] h-[100%] p-2 rounded-md m-2 "
                >
                  <div className="md:w-[70%]" key={i}>
                    <p>
                      <b>Name: </b>
                      {data.name}
                    </p>
                    <p>
                      <b> Subject: </b>
                      {data.subject}
                    </p>
                    <p>
                      <b>Company:</b> {data.company}
                    </p>
                  </div>

                  <div className="flex h-[30%] space-x-3 md:w-[30%]">
                    <button
                      className="bg-rose-500 text-white p-1 rounded-md "
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-white text-black rounded-md px-2 shadow-inner"
                      onClick={() => {
                        handleEdit(data);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
    </div>
  );
};

export default FormData;
