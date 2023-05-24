import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const AllAdmissions = () => {
  const {user} = useContext(AuthContext);
  const { data: admissions = [], refetch } = useQuery({
    queryKey: ["admission"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admission");
      const data = res.json();
      return data;
    },
  });

  const handleMakeApprove = (id) => {
    fetch(`http://localhost:5000/admission/${id}?email=${user?.email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Successfully approved this student");
          refetch();
        }
      });
  };
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
              <th>Make Approve</th>
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
                {admission?.status !== "approved" && (
                  <td>
                    <button
                      className="btn btn-xs btn-primary text-white"
                      onClick={() => handleMakeApprove(admission?._id)}
                    >
                      Make Approve
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmissions;
