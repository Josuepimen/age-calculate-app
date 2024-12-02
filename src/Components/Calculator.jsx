import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";

function Calculator() {
  const [birthdate, setbirthdate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDate = new Date(birthdate);

    if (birthDate > today) {
      setError("La fecha de nacimiento no puede ser en el futuro");
      setAge(null);
      return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculateAge);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center">
          Calculadora de Edad
        </h2>
        <form onSubmit={calculateAge}>
          <BsCalendar2Date className="mr-2 text-blue-500" />
          <label htmlFor="birthdate" className="block text-gray-800  mb-2">
            Ingresa tu Fecha de Nacimiento:
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1800-01-01"
            max={new Date().toISOString().split("T")[0]}
            value={birthdate}
            onChange={(e) => setbirthdate(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm mb-2"> {error} </p>}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Calcular Edad
          </button>
        </form>
        {age !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Tu edad es:</p>
            <p className="text-2xl text-blue-600">{age} años</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
