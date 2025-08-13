import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dropdown({ apiUrl, onSelect }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        // Ожидаем, что ответ — массив уникальных подразделений
        setOptions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка загрузки подразделений:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (onSelect) onSelect(e.target.value);
  };

  if (loading) {
    return <div className="text-gray-500">Загрузка...</div>;
  }

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="px-3  border rounded-md shadow-sm text-gray-100 bg-gray-600"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
