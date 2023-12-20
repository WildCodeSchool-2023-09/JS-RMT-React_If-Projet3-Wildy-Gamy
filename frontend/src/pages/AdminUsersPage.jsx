import React from "react";
import { useLoaderData } from "react-router-dom";
import AdminUsersTable from "../components/AdminUsersTable";
import InputSearchBar from "../components/InputSearchBar";

function AdminUsersPage() {
  const data = useLoaderData();
  console.info(data);
  return (
    <>
      <InputSearchBar />
      <AdminUsersTable playerData={data} />
    </>
  );
}

export default AdminUsersPage;
