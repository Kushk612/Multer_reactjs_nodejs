import { useState } from "react";
import axios from "axios";

const App = () => {
  const [fileName, setFileName] = useState();
  const [file, setFile] = useState();

  const onChange = (e) => {
    setFileName(e.target.value);
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("file", file);

    axios
      .post("http://localhost:3005/upload", fromData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div>
          <h2>file upload</h2>
          <label>{fileName}</label>
          <input
            type="file"
            name={file}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default App;
