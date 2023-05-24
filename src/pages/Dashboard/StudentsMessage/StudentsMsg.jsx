import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const StudentsMsg = () => {
  const { user } = useContext(AuthContext);

  const { data: messages = [], refetch } = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/message?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeletemessage = (id) => {
    fetch(`http://localhost:5000/message/${id}?email=${user?.email}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            refetch();
        }
    })
  };
  return (
    <div>
      <h2 className="text-3xl">Students Message: </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{message?.name}</td>
                <td>{message?.email}</td>
                <td>{message?.number}</td>
                <td>{message?.message}</td>
                <td>
                  <button
                    className="btn btn-xs bg-red-600 text-white border-none"
                    onClick={() => handleDeletemessage(message?._id)}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsMsg;
