import Image from "next/image";
import bg_img from "@/assets/image/login_bg.png";
import bg_img_mobile from "@/assets/image/login_mobile.png";
import LoginHeader from "./LoginHeader";
import InputField from "./InputField";
import Link from "next/link";
import Button from "@/app/components/Button/Button";

const page = () => {
  return (
    <div className="login_bg">
      <Image src={bg_img} className="hidden sm:block" alt="bg_image"/>
      <Image src={bg_img_mobile} className="block sm:hidden" alt="bg_image"/>
      <div className="login">
        <LoginHeader />
        <h1 className="login_welcome">Welcome to the Cactus club!</h1>
        <div className="input_wrapper">
          <InputField key="username" name="username" type="text" />
          <InputField key="password" name="password" type="password" />
        </div>
        <p className="forget_pass"><Link href="/">forget password</Link></p>
        <Button label="login"/>
        <p className="create_account">do not have an account? <Link href="/">signup</Link></p>
      </div>
    </div>
  );
};

export default page;
