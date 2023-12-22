import "../style/components/AdminUsersTable.scss";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import connexion from "../../connexion";

function AdminUsersTable({ playerData, search }) {
  const deleteData = (id) => {
    try {
      connexion.delete(`/player/${id}`);
      console.info("delete reussi");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="title-table">
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>#Edit</th>
          </tr>
        </thead>
        <tbody>
          {playerData
            .filter((el) => {
              return el.username.includes(search);
            })
            .map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.password}</td>
                <td className="button-container" aria-label="delete-button">
                  <DeleteButton onClick={() => deleteData(el.id)} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

AdminUsersTable.propTypes = {
  playerData: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  search: PropTypes.string.isRequired,
};

export default AdminUsersTable;
