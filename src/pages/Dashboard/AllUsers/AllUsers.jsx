import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}?email=${user?.email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Successfully make Admin");
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}?email=${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      className="btn btn-xs btn-primary text-white"
                      onClick={() => handleMakeAdmin(user?._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>

                <td>
                  <button
                    className="btn btn-xs bg-red-600 text-white border-none"
                    onClick={() => handleDeleteUser(user?._id)}
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

export default AllUsers;
