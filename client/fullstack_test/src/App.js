import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

import { onDrop, API_ENDPOINT } from "./services/files";

import { Table } from "./components/table";

import "./App.css";
import styles from "./App.module.css";

const App = () => {
  const [files, setFiles] = useState();

  useEffect(() => {
    const fetchFiles = async () => {
      if (!files) {
        const query = await fetch(API_ENDPOINT + "?format=json");
        const data = await query.json();
        setFiles(data);
      }
    };
    fetchFiles();
  }, [files]);

  return (
    <div className="App">
      <h1 className={styles.header}>Files dashboard</h1>
      <div className={styles.tableContainer}>
        <div>
          <Table files={files} />
        </div>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className={styles.dropzone}>
                <input {...getInputProps()} />
                <h3 className={styles.textColor}>
                  Drag 'n' drop some files here, or click to select files
                </h3>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default App;
