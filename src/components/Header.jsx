import { useTheme } from "@/contexts/themeContext";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { Link, useSearchParams } from "react-router-dom";
// import Buttons from "./ui/Buttons";
import { BriefcaseBusinessIcon, HeartIcon, PenBox } from "lucide-react";
import { useEffect, useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import ThemeBtn from "./ui/ThemeBtn";

const Header = () => {
  const { themeMode } = useTheme();
  const [showSignIn, setShowSignIn] = useState(false);
  const handleOverlayClick = (e) => {
    if (e.target == e.currentTarget) {
      setShowSignIn(false);
    }
    setSearch({});
  };
  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);
  return (
    <>
      <nav className="flex items-center justify-between mt-5">
        <div>
          {themeMode === "dark" ? (
            <Link to={"/"}>
              <img src="/logo.png" alt="hiredLogo" className="h-20" />
            </Link>
          ) : (
            <Link to={"/"}>
              <img src="/logo-dark.png" alt="hiredlogo" className="h-20" />
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center ">
          <SignedOut>
            <RainbowButton>
              <button onClick={() => setShowSignIn(true)}>Login</button>
            </RainbowButton>
          </SignedOut>
          <SignedIn>
            <div className={`mr-2`}>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-11 w-11",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My jobs"
                    href="/myjobs"
                    labelIcon={<BriefcaseBusinessIcon size={15} />}
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    href="/savedjobs"
                    labelIcon={<HeartIcon size={15} />}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
            <Link to="/postjobs">
              {/* only if u r a recruiter condn */}
              <RainbowButton>
                <PenBox className="mr-1" />
                Post A Job
              </RainbowButton>
            </Link>
          </SignedIn>
          <ThemeBtn />
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
