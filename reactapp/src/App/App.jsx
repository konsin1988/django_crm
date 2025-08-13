// App.js
import React, { useState, useEffect } from "react";
import AppHeader from "../components/AppHeader.jsx"
import PlanForecastTable from "../components/AppTable.jsx";
import AppFooter from "../components/AppFooter.jsx";
import Dropdown from "../components/Dropdown.jsx";

export default function App() {
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
         "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const rows = ["Выручка", "Контракт", "ВСК", "Прогноз"];
  const planValues = {
  Выручка: { Январь: "12005445", Февраль: "11000000", Март: "13000000" },
  Прибыль: { Январь: "5000000", Февраль: "4800000", Март: "5300000" },
  Расходы: { Январь: "7000000", Февраль: "6200000", Март: "7700000" },
};
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000); // 4 секунды
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (value) => {
    console.log("Выбрано подразделение:", value);
  };

  return (
    <div className="App body-gradient min-h-screen min-w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <AppHeader />
        {/* Dropdown с отступом снизу и шириной до max-w-sm */}
        <div className="pt-24 pl-4 max-w-sm">
          <Dropdown apiUrl="http://localhost:8000/api/frc_unique/" onSelect={handleSelect} />
        </div>
        <div className="w-full">
          <PlanForecastTable months={months} rows={rows} planValues={planValues} />
      <AppFooter />
      </div>
    </div>
  );
}

