import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { useAuthStore } from "@/store/useAuthStore";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthDialog = () => {
  const {
    isLoginOpen,
    isRegisterOpen,
    onOpenLogin,
    onOpenRegister,
    onCloseDialog,
  } = useAuthStore();

  const onChangeForms = () => {
    if (isLoginOpen) {
      onOpenRegister();
    } else {
      onOpenLogin();
    }
  };

  return (
    <>
      {(isLoginOpen || isRegisterOpen) && (
        <Dialog
          onCloseDialog={onCloseDialog}
          className="bg-primary-navbar rounded-xl relative p-6 w-full max-w-[480px]"
        >
          <DialogContent className=" w-full flex flex-col gap-2">
            {isLoginOpen ? <LoginForm /> : <RegisterForm />}
            <button type="button" onClick={onChangeForms}>
              {isLoginOpen ? "Or Sign Up" : "Or Sign In"}
            </button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
