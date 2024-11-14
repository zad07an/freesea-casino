import { HomeLanding } from "@/features/landing/home-landing/components/HomeLanding";
import { UserPanelTemplate } from "@/features/user-panel/user-panel-template/components/UserPanelTemplate";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export const HomeTemplate = () => {
  const isLoggedIn = useCurrentUser();

  return isLoggedIn ? <UserPanelTemplate /> : <HomeLanding />;
};
