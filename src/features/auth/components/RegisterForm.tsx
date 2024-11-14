import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const RegisterForm = () => {
  return (
    <form className=" w-full flex flex-col gap-3">
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="email" className=" text-sm font-semibold">
          Email<span className=" text-primary-red">*</span>
        </label>
        <Input type="email" id="email" className=" w-full" />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="username" className=" text-sm font-semibold">
          Username<span className=" text-primary-red">*</span>
        </label>
        <Input id="username" className=" w-full" />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="password" className=" text-sm font-semibold">
          Password<span className=" text-primary-red">*</span>
        </label>
        <Input type="password" id="password" className=" w-full" />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="confirmPassword" className=" text-sm font-semibold">
          Confirm Password<span className=" text-primary-red">*</span>
        </label>
        <Input type="password" id="confirmPassword" className=" w-full" />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <label htmlFor="promocode" className=" text-sm font-semibold">
          Promocode<span className=" text-primary-red">*</span>
        </label>
        <Input id="promocode" className=" w-full" />
      </div>
      <Button className=" bg-primary-blue">Sign up</Button>
    </form>
  );
};
