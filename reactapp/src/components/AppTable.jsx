import React from "react";

export default function PlanForecastTable({ months, rows, planValues }) {
  const bgCycle = ["bg-gray-700", "bg-gray-600", "bg-gray-500"];

  return (
    <div className="sm:max-w-8xl md:max-w-11xl lg:max-w-13xl mx-auto px-4 overflow-x-auto">
    <div className="w-full overflow-x-auto bg-transparent p-2 max-w-screen mt-32">
      <form method="post" className="min-w-full" action="/some-action-url">
        <div className="inline-block min-w-full overflow-hidden rounded-2xl shadow-md">
          <table className="table-auto justify-center w-full border-collapse border border-gray-500 text-[9px] sm:text-[10px] md:text-xs">
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  className="border border-gray-600 px-1 py-2 bg-gray-800 text-gray-200 text-center whitespace-nowrap"
                >
                  Показатель
                </th>
                {months.map((month, i) => (
                  <th
                    key={month}
                    colSpan={2}
                    className={`border border-gray-600 px-0.5 py-0.5 text-center text-gray-200 whitespace-nowrap ${bgCycle[i % bgCycle.length]}`}
                  >
                    {month}
                  </th>
                ))}
              </tr>
              <tr>
                {months.map((month, i) => (
                  <React.Fragment key={month + "-sub"}>
                    <th
                      className={`border border-gray-600 px-0.5 py-0.5 text-center text-gray-200 whitespace-nowrap ${bgCycle[i % bgCycle.length]}`}
                    >
                      План
                    </th>
                    <th
                      className={`border border-gray-600 px-0.5 py-0.5 text-center text-gray-200 whitespace-nowrap ${bgCycle[i % bgCycle.length]}`}
                    >
                      Прогноз
                    </th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row}>
                  <td className="border border-gray-600 px-1 py-2 bg-gray-800 text-gray-200 text-center whitespace-nowrap">
                    {row}
                  </td>
                  {months.map((month, i) => {
                    const bgClass = bgCycle[i % bgCycle.length];
                    return (
                      <React.Fragment key={`${row}-${month}`}>
                        <td className={`border border-gray-600 ${bgClass} px-0.5 py-0.5 whitespace-nowrap`}>
                          <p
                            name={`${row}_${month}_plan`}
                            className="px-0.5 py-0.5 text-[9px] sm:text-[10px] md:text-xs w-[60px]"
                          >
                            {planValues?.[row]?.[month] ?? ""}
                          </p>
                        </td>
                        <td className={`border border-gray-600 px-0.5 py-0.5 whitespace-nowrap ${bgClass}`}>
                          <input
                            type="text"
                            name={`${row}_${month}_forecast`}
                            defaultValue={month}
                            className="border border-gray-400 rounded px-0.5 py-0.5 text-[9px] sm:text-[10px] md:text-xs w-[60px]"
                          />
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
</div>

  );
}
