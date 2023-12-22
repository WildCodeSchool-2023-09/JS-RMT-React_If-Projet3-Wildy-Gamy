import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AdminUsersTable from "../components/AdminUsersTable";
import InputSearchBar from "../components/InputSearchBar";
import "../style/pages/AdminUsersPage.scss";

function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const usersData = useLoaderData();

  return (
    <div className="container-navbar-table">
      <div className="navbar">
        <p>dfezf</p>
      </div>
      <div className="table-search">
        <InputSearchBar
          setSearch={setSearch}
          search={search}
          data={usersData}
        />
        <AdminUsersTable search={search} playerData={usersData} />
      </div>
    </div>
  );
}

export default AdminUsersPage;
