


const Table = ({result}) => {
    const {name, class: sClass, section, roll, marks, term} = result;

    return (
      <div className="overflow-x-auto mt-8">
        <p className="text-blue-700 text-center">{term}</p>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Class
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Roll
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Section
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Total
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-md">
                {name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-md">
                {sClass}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-md">
                {roll}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-md">
                {section}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-red-500 font-bold text-2xl">
                {marks}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Table;