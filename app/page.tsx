import Image from "next/image";
import RegisterPage from "./pages/register/page";
import LoginPage from "./pages/login/page";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <LoginPage />
    </RootLayout>
  );
}
