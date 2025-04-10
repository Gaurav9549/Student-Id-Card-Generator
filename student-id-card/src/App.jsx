// src/App.js
import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import IDCard from './components/IDCard';
import TemplateSwitcher from './components/TemplateSwitcher';
import './App.css';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [template, setTemplate] = useState("1");

  return (
    <div className="App">

      <h1 style={{color:'blueviolet',fontWeight:'800',borderRadius:'13px',backgroundColor:'Background',width:'50%',textAlign:'center',margin:'auto'}}>Smart Student ID Generator</h1>
      <StudentForm onSubmit={setStudentData} />
      {studentData && (
        <>
          <TemplateSwitcher currentTemplate={template} setTemplate={setTemplate} />
          <IDCard studentData={studentData} template={template} />
        </>
      )}
    </div>
  );
}

export default App;
