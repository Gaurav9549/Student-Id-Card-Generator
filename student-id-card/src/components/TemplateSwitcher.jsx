// src/components/TemplateSwitcher.jsx
import React from 'react';
import './Switcher.css';

const TemplateSwitcher = ({ currentTemplate, setTemplate }) => {
  return (
    <div className="switcher">
      <label>Template:</label>
      <select value={currentTemplate} onChange={(e) => setTemplate(e.target.value)}>
        <option value="1">Template 1</option>
        <option value="2">Template 2</option>
      </select>
    </div>
  );
};

export default TemplateSwitcher;
