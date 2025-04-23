import { useState } from "react";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipCode: "",
    civicImpactScore: 0,
    badges: [],
    calendarPreferences: {
      eventTypes: [],
      reminderTime: "24h"
    },
    followedPolicies: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/civix-4f64a/us-central1/api/user", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log("Created user:", result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="zipCode" placeholder="Zip Code" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}