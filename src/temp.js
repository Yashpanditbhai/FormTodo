const [name, setName] = useState("");
const [subject, setSubject] = useState("");
const [company, setCompany] = useState("");
const [DataList, setDataList] = useState([]);

const handleClick = () => {
  if (name.trim() !== "" && subject.trim() !== "" && company.trim() !== "") {
    const newData = { name, subject, company };
    setDataList((prevList) => [...prevList, newData]);
    setName("");
    setSubject("");
    setCompany("");
  } else {
    alert("Please fill in all fields.");
  }
};

const handleDelete = (index) => {
  setDataList((DataList) => DataList.filter((data, i) => i !== index));
};

// const handleDelete =(index)=>{
//   setDataList((data,i)=>i!==index);
// }
const handleEdit = (index) => {
  const dataToEdit = DataList[index];
  setName(dataToEdit.name);
  setSubject(dataToEdit.subject);
  setCompany(dataToEdit.company);
  setDataList((DataList) => DataList.filter((data, i) => i !== index));
};
