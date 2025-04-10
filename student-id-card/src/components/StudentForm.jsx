// src/components/StudentForm.jsx
import React, { useState } from "react";
import "./FormStyles.css";
import { classDivisionOptions } from "../data/classDivisionOptions";
import Select from "react-select";
import { allergyOptions } from "../data/allergies";

const StudentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    classDivision: "",
    allergies: [],
    rackNumber: "",
    busRoute: "",
    photo: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllergiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value
    );
    setFormData((prev) => ({ ...prev, allergies: selectedOptions }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFormData((prev) => ({ ...prev, photo: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        onChange={handleChange}
        required
      />

      <select
        value={formData.classDivision}
        onChange={(e) =>
          setFormData({ ...formData, classDivision: e.target.value })
        }
      >
        <option value="">Select Class & Division</option>
        {classDivisionOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Select
        isMulti
        name="allergies"
        options={allergyOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(selectedOptions) =>
          setFormData({
            ...formData,
            allergies: selectedOptions.map((opt) => opt.value),
          })
        }
      />

      <input
        type="text"
        name="rackNumber"
        placeholder="Rack Number"
        onChange={handleChange}
      />

      <select name="busRoute" onChange={handleChange}>
        <option value="">Select Bus Route</option>
        <option value="Route 1">Route 1</option>
        <option value="Route 2">Route 2</option>
        <option value="Route 3">Route 3</option>
      </select>

      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="photo-preview" />
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
