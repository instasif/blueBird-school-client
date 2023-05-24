import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const ManageTeachers = () => {
  const { user } = useContext(AuthContext);
  const { data: teachers = [], refetch } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/teachers");
      const data = await res.json();
      return data;
    },
  });

  const deletingTeacher = (id) => {
    fetch(`http://localhost:5000/teachers/${id}?email=${user?.email}`, {
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
      <h2 className="text-3xl">Manage Teachers</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Possion</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers?.map((teacher, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="avatar placeholder">
                  <div className="rounded-full w-12">
                    <img src={teacher?.img} alt="teacher" />
                  </div>
                </td>
                <td>{teacher?.name}</td>
                <td>{teacher?.possion}</td>
                <td>{teacher?.phone}</td>
                <td>
                  <label
                    htmlFor="confirmationModal"
                    onClick={() => deletingTeacher(teacher._id)}
                    className="btn btn-xs bg-red-600 text-white border-none"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeachers;
