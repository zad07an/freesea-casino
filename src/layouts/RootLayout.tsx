import { PublicNavbar } from "@/features/landing/navbar/components/PublicNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <PublicNavbar />
      <Outlet />
    </>
  );
}
