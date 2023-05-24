import { useQuery } from "@tanstack/react-query";

const AllAdmissions = () => {
  const { data: admissions = [] } = useQuery({
    queryKey: ["admission"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admission");
      const data = res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">All Admissions</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Class</th>
              <th>Email</th>
              <th>Number</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {admissions?.map((admission, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{admission?.name}</td>
                <td>{admission?.class}</td>
                <td>{admission?.email}</td>
                <td>{admission?.number}</td>
                <td>{admission?.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmissions;
