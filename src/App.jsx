import React, { useState } from "react";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [form, setForm] = useState({
    username: "admin",
    password: "123@",
    isEnabled: false,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = (value) => {
    setForm({
      ...form,
      isEnabled: value, // Update form state with the Boolean toggle value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md mx-4">
        <span>Username</span>
        <input
          type="text"
          name="username"
          onChange={handleForm}
          className="border rounded p-2 my-2 w-full"
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleForm}
          className="border rounded p-2 my-2 w-full"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white p-2 rounded cursor-pointer mt-4 mb-4"
        />
 
          <div className="p-6 bg-white rounded shadow-md ">
            {/* <div>
              Username: {form.username} <br/>
              Passward: {form.password} <br/>
              Toggle Status: {form.isEnabled ? "True" : "False"}
              </div> */}
            <div className="mt-2">
            <ToggleButton onToggle={handleToggle} />
            </div>
            {form.isEnabled && (
          <div className="mt-4">
            <p><strong>Username:</strong> {form.username}</p>
            <p><strong>Password:</strong> {form.password}</p>
          </div>
        )}

          </div>
        
      </form>
    </div>
  );
}

export default App;
