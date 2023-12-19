import React from "react";
import AdminUsersTable from "../components/AdminUsersTable";
import InputSearchBar from "../components/InputSearchBar";

function AdminUsersPage() {
  return (
    <>
      <InputSearchBar />
      <div>AdminUsersPage</div>
      <AdminUsersTable />
    </>
  );
}

export default AdminUsersPage;
