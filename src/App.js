import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./form";
import List from "./list";
import Alert from "./alert";

function App() {
  const [error, seterror] = useState(false);
  const [name, setname] = useState();
  const [id, setid] = useState();
  const [list, setlist] = useState([]);
  const [isedit, setisedit] = useState(false);
  const [alert, setalert] = useState({ type: "", show: false, message: "" });
  console.log(isedit);
  return (
    <div className="App">
      <div className="container">
        <Alert
          alert={alert}
          error={error}
          setalert={setalert}
          isedit={isedit}
        />
        <h2>crud app</h2>
        <Form
          seterror={seterror}
          name={name}
          setname={setname}
          list={list}
          setlist={setlist}
          isedit={isedit}
          setisedit={setisedit}
          alert={alert}
          setalert={setalert}
          setid={setid}
          id={id}
        />
      </div>

      <List
        list={list}
        setlist={setlist}
        setid={setid}
        setname={setname}
        name={name}
        id={id}
        setisedit={setisedit}
      />
    </div>
  );
}

export default App;
