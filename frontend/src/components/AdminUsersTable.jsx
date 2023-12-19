import "../style/components/AdminUsersTable.scss";

function AdminUsersTable() {
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
      </table>
    </div>
  );
}

export default AdminUsersTable;
