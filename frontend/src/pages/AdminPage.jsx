import { Outlet } from "react-router-dom";
import NavAdmin from "../components/nav/navAdmin";

function AdminPage() {
  return (
    <div className="app-admin">
      <NavAdmin />
      <Outlet />
    </div>
  );
}

export default AdminPage;
