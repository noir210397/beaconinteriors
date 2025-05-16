import Button from "@/components/Button";
import Label from "@/components/Label";
import PageHeaders from "@/components/PageHeaders";
import TextInput from "@/components/TextInput";
import Link from "next/link";
function Login() {
  return (
    <>
      <div className="w-[90%] mx-auto  flex flex-col gap-y-3 justify-center pb-3">
        <PageHeaders text="my account" className="w-full" />
        <h1 className="text-2xl uppercase ">login</h1>
        <form action="" className="w-full">
          <Label asterik>username or email address</Label>
          <TextInput className="border-b-2" />
          <Label asterik>Password</Label>
          <TextInput type="password" className="border-b-2" />
          <input type="checkbox" name="" id="" className="accent-primary" />
          <Label className="ps-2">Remember Me</Label>
          <Button className="bg-primary text-white py-2 px-5 block w-full max-w-[250px] rounded-md mt-5">
            Login
          </Button>
          <Link
            href={"/"}
            className="underline decoration decoration-primary py-2"
          >
            Lost your password?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
