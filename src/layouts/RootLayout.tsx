import { Modals } from "@/components/Modals";
import { Footer } from "@/features/footer/components/Footer";
import { Coins } from "@/features/landing/coins/components/Coins";
import { PublicNavbar } from "@/features/landing/navbar/components/PublicNavbar";
import { Sidebar } from "@/features/sidebar/components/Sidebar";
import { PrivateNavbar } from "@/features/user-panel/private-navbar/components/PrivateNavbar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const isLoggedIn = useCurrentUser();

  return (
    <>
      <Modals />
      {isLoggedIn ? (
        <>
          <PrivateNavbar />
          <section className="w-full flex">
            <Sidebar />
            <Outlet />
          </section>
        </>
      ) : (
        <>
          <PublicNavbar />
          <Outlet />
        </>
      )}
      <div>
        <Coins />
        <Footer />
      </div>
    </>
  );
}
