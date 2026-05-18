import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function Base() {
  return (
    <>
      <div className="d-flex flex-column">
        <Header className="flex-shrink-0"></Header>
        <div className="flex-grow-1 pb-5">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
