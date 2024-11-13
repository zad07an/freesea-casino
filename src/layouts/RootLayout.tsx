import { PublicNavbar } from "@/features/navbar/components/PublicNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <section className=" w-full">
      <PublicNavbar />
      <Outlet />
    </section>
  );
}
