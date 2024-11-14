import { Modals } from "@/components/Modals";
import { Footer } from "@/features/footer/components/Footer";
import { PublicNavbar } from "@/features/landing/navbar/components/PublicNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <PublicNavbar />
      <Modals />
      <Outlet />
      <Footer />
    </>
  );
}
