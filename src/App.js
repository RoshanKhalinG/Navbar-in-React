import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Button from './Components/Button/button';

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("No file selected");
    } else {
      alert(`File named ${file.name} uploaded successfully!`);
    }
  };

  const handleRemove = () => {
    setFile(null);
    alert("File removed");
  };

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} bytes`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

<div className='main'>
<div className="main-container">
        <h1>File Uploader In React</h1>
        <div className="input-container">
          <input type="file" onChange={handleFileChange} className='choosefile' />
        </div>

        {file && <p>Selected file: {file.name}</p>}
        {file && <p>File Size: {formatFileSize(file.size)}</p>}
        {file && <p>File Type: {file.type}</p>}

        <div className="button-container">
          <Button onClick={handleUpload} name="Upload" />
          {file && <Button onClick={handleRemove} name="Remove" />}
        </div>
      </div>

</div>

      {/* Footer */}
      <footer className={`footer ${theme}`}>
        <p>&copy; 2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
