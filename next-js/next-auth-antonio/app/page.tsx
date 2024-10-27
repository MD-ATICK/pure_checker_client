import LoginButton from "@/components/auth/login-button";
import BoxCard from "@/components/boxCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" h-screen center flex-col">
      <BoxCard header="Home" title="Welcome to our website!" backBtnLink="" backBtnText="">
        <LoginButton> <br />
          <Button variant={'default'} className=" font-semibold">Login Now!</Button>
        </LoginButton>
      </BoxCard>
    </div>
  );
}
