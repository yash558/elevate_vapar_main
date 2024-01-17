import React from 'react'

const Table = () => {
  const table = [
    {
      para1: 'Full Body Check-ups Basic',
      para2: 'Full Body Check-ups Basic',
      para3: 'Full Body Check-ups Advance +',
      para4: 'Parameter Details',
    },
    {
      para1: 'Lipid Profile',
      para2: 'Lipid Profile',
      para3: 'Lipid Profile',
      para4: 'Lipid Profile',
    },
    {
      para1: 'Liver Function Test',
      para2: 'Liver Function Test',
      para3: 'Liver Function Test',
      para4: 'Liver Function Test',
    },
    {
      para1: 'Complete Hemogram',
      para2: 'Complete Hemogram',
      para3: 'Complete Hemogram',
      para4: 'Complete Hemogram',
    },
    {
      para1: 'Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)',
      para2: 'Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)',
      para3: 'Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)',
      para4: 'Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)',
    },
    {
      para1: 'Iron Studies',
      para2: 'Iron Studies',
      para3: 'Iron Studies',
      para4: 'Iron Studies',
    },
    {
      para1: 'Urine Routine & Microscopy Extended',
      para2: 'Kidney Function Test',
      para3: 'Kidney Function Test',
      para4: 'Kidney Function Test',
    },
    {
      para1: 'Kidney Function Test (KFT)',
      para2: 'HbA1c',
      para3: 'HbA1c',
      para4: 'HbA1c',
    },
    {
      para1: 'Blood Glucose Fasting',
      para2: 'Urine Routine & Microscopy Extended',
      para3: 'Urine Routine & Microscopy Extended',
      para4: 'Urine Routine & Microscopy Extended',
    },
    {
      para1: '',
      para2: 'Blood Glucose Fasting',
      para3: 'Blood Glucose Fasting',
      para4: 'Blood Glucose Fasting',
    },
    {
      para1: '',
      para2: '',
      para3: 'Vitamin B12 Cyanocobalamin',
      para4: 'Vitamin B12 Cyanocobalamin',
    },
    {
      para1: '',
      para2: '',
      para3: 'Vitamin D Total-25 Hydroxy',
      para4: 'Vitamin D Total-25 Hydroxy',
    },
    {
      para1: '',
      para2: '',
      para3: '',
      para4: 'COVID-19 Antibody - IgG',
    },
  ]
  return (
    <div className="p-8">
      <h1 className="text-[#3267FF] font-bold">
        Full Body <br />
        Health Check Up plans
      </h1>

      <div className="min-w-full overflow-x-auto rounded-xl">
        <table className="min-w-full table-auto border rounded-t-xl border-gray-300">
          <thead>
            <tr className="bg-[#3267FF] text-white">
              <th className="px-4 py-3 text-left font-semibold">Parameter</th>
              <th className="px-4 py-3 text-left">84 Parameter</th>
              <th className="px-4 py-3 text-left">87 Parameter</th>
              <th className="px-4 py-3 text-left">89 Parameter</th>
              <th className="px-4 py-3 text-left">90 Parameter</th>
            </tr>
          </thead>
          <tbody>
            {table.map((data, index) => (
              <tr
                key={index}
                className="bg-[#F2F9FF] transition hover:bg-gray-100 border-b border-r hover:shadow-md"
              >
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">{data.para1}</td>
                <td className="px-4 py-3">{data.para2}</td>
                <td className="px-4 py-3">{data.para3}</td>
                <td className="px-4 py-3">{data.para4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
