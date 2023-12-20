import "../style/components/AdminUsersTable.scss";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

function AdminUsersTable({ playerData }) {
  return (
    <div className="table-container">
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
          {playerData.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td aria-label="delete-button">
                <DeleteButton />
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
};

export default AdminUsersTable;
