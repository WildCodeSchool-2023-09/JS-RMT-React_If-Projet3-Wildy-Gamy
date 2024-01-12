import { useState } from "react";
import AdminUsersTable from "../components/AdminUsersTable";
import InputSearchBar from "../components/InputSearchBar";

function AdminUsersPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="container-navbar-table">
      <div className="table-search">
        <InputSearchBar setSearch={setSearch} />
        <AdminUsersTable search={search} />
      </div>
    </div>
  );
}

export default AdminUsersPage;
