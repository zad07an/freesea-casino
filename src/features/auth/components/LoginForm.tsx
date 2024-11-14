import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const LoginForm = () => {
  return (
    <form className=" w-full flex flex-col gap-3">
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="email" className=" text-sm font-semibold">
          Username or Email<span className=" text-primary-red">*</span>
        </label>
        <Input type="email" id="email" className=" w-full" />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="password" className=" text-sm font-semibold">
          Password<span className=" text-primary-red">*</span>
        </label>
        <Input type="password" id="password" className=" w-full" />
      </div>
      <Button className=" bg-primary-blue">Sign in</Button>
    </form>
  );
};
