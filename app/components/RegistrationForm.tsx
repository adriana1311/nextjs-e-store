"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   console.log("Registration successful:", data);
    // } catch (error) {
    //   console.error("Registration failed:", error);
    // }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto m-6 p-20 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600"
        >
          Register
        </button>
      </form>
      <p className="mt-6 text-gray-700">
        Already have an account?{" "}
        <Link href="./">
          <span className="text-yellow-500 cursor-pointer hover:underline">
            Login
          </span>
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
