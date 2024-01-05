import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import connexion from "../services/connexion";
import "../style/components/AdminUsersTable.scss";
import DeleteButton from "./DeleteButton";

function AdminUsersTable({ search }) {
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    try {
      const res = await connexion.get(`/players?search=${search}`);
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  const deleteData = (id) => {
    try {
      connexion.delete(`/players/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr className="title-table">
          <th>#</th>
          <th>User Name</th>
          <th>Email</th>
          <th>#Edit</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td className="button-container" aria-label="delete-button">
              <DeleteButton onClick={() => deleteData(el.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

AdminUsersTable.propTypes = {
  search: PropTypes.string.isRequired,
}.isRequired;

export default AdminUsersTable;
