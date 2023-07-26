import React from 'react';

const data = [
  { id: 1, firstName: 'Mark', },
  { id: 2, firstName: 'Jacob' },
  { id: 3, firstName: 'Larry' },
];

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="whitespace-nowrap px-6 py-3">ID</th>
          <th className="whitespace-nowrap px-6 py-3">First Name</th>

        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
          >
            <td className="whitespace-nowrap px-6 py-4 font-medium">{row.id}</td>
            <td className="whitespace-nowrap px-6 py-4">{row.firstName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
