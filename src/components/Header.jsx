import { useTheme } from "@/contexts/themeContext";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
import { RainbowButton } from "./ui/rainbow-button";
import ThemeBtn from "./ui/ThemeBtn";

const Header = () => {
  const { themeMode } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      <div>
        {themeMode === "dark" ? (
          <img src="/logo.png" alt="hiredLogo" className="h-20" />
        ) : (
          <img src="/logo-dark.png" alt="hiredlogo" className="h-20" />
        )}
      </div>

      {/* 
      <SignedOut>
        <RainbowButton>
          <SignInButton />
        </RainbowButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      <div className="flex  items-center justify-center">
        <RainbowButton>Login</RainbowButton>
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Header;
