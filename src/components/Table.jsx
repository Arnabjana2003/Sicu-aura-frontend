import React from 'react'

function Table({data}) {
        return (
          <div className="overflow-x-auto mt-5">
    
            <table className="table-auto w-full">
              <thead className="bg-cyan-300 rounded-xl">
                <tr>
                  {data.length && Object.keys(data[0]).map((key) => (
                    <th key={key} className="px-4 py-2 text-left font-semibold text-gray-800 capitalize  border-gray-200">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
    
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    {Object.values(item).map((value, index) => (
                      <td key={index} className="px-4 py-2 text-sm text-gray-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
  
}

export default Table