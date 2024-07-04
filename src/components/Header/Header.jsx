import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TR5CQW5P');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleNavigate = () => {
    navigate("/UserProfile");
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    switch (buttonName) {
      case "PARTICIPANTES":
        navigate(`/viewparticipants`);
        break;
      case "EVENTOS":
        navigate(`/viewevents`);
        break;
      case "CALENDARIO":
        navigate(`/eventscalendar`);
        break;
      case "MI CALENDARIO":
        navigate(`/meetingsViews`)
        break;
      case "FEEDBACK":
        navigate(`/feedback`);
        break;
      case "DASHBOARD":
        navigate(`/dashboard`);
        break;
      case "REGISTRO":
        navigate(`/register`);
        break;
      case "LOGIN":
        navigate(`/login`);
        break;
      default:
        break;
    }
  };

  let buttons = [];
  if (!user || user === null) {
    buttons = ["CALENDARIO", "REGISTRO", "LOGIN"];
  } else if (user.user_type === "admin") {
    buttons = [
      "CALENDARIO",
      "EVENTOS",
      "PARTICIPANTES",
      "FEEDBACK",
      "DASHBOARD",
    ];
  } else if (user.user_type === "supplier") {
    buttons = ["MI CALENDARIO", "EVENTOS", "FEEDBACK"];
  } else if (user.user_type === "attendee") {
    buttons = ["MI CALENDARIO", "EVENTOS"];
  }

  return (
    <>
      <Box
        className="header-container"
        sx={{
          width: "100%",
          backgroundColor: "#1C1C24",
          padding: "10px 20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Flex
          as="header"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{
              display: { base: "block", md: "none" },
              margin: "0 20px",
              cursor: "pointer",
            }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                sx={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
              <MenuList
                sx={{
                  border: "none",
                  backgroundColor: "white",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  marginTop: "60px",
                }}
              >
                {buttons.map((buttonName) => (
                  <MenuItem
                    key={buttonName}
                    onClick={() => handleButtonClick(buttonName)}
                    sx={{ color: "black" }}
                  >
                    {buttonName}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Box
            className="logo-container"
            sx={{
              margin: "0 20px",
              textAlign: "center",
            }}
          >
           <Link to='/'>
            <Image
              src="https://www.samoo-elearningexperience.tech/src/assets/Img/logo-empresa.png"
              alt="logo"
              className="logo-company"
              sx={{
                width: "150px",
                height: "auto",
              }}
            />
            </Link>
          </Box>

          <Box
            className="btn-header"
            sx={{
              display: { base: "none", md: "flex" },
              gap: "15px",
              justifyContent: "center",
              flex: "1",
            }}
          >
            {buttons.map((buttonName) => (
              <Button
                key={buttonName}
                colorScheme="black"
                variant="ghost"
                sx={{
                  color: selectedButton === buttonName ? "black" : "white",
                  backgroundColor:
                    selectedButton === buttonName ? "white" : "transparent",
                }}
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </Button>
            ))}
          </Box>
          {user && (
            <Box
              sx={{
                margin: "0 20px",
                cursor: "pointer",
              }}
              onClick={handleNavigate}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.9994 8.33329C22.0843 8.33276 19.22 9.09681 16.6925 10.5492C14.165 12.0016 12.0626 14.0915 10.5952 16.6103C9.12784 19.1291 8.34675 21.9887 8.32993 24.9038C8.31311 27.8188 9.06114 30.6873 10.4994 33.2229C11.4715 31.9595 12.7211 30.9366 14.1516 30.2332C15.5822 29.5299 17.1553 29.165 18.7494 29.1666H31.2494C32.8435 29.165 34.4166 29.5299 35.8471 30.2332C37.2776 30.9366 38.5273 31.9595 39.4994 33.2229C40.9376 30.6873 41.6856 27.8188 41.6688 24.9038C41.652 21.9887 40.8709 19.1291 39.4035 16.6103C37.9361 14.0915 35.8337 12.0016 33.3062 10.5492C30.7787 9.09681 27.9145 8.33276 24.9994 8.33329ZM41.5473 37.6583C44.3328 34.027 45.8394 29.5766 45.8327 25C45.8327 13.4937 36.5056 4.16663 24.9994 4.16663C13.4931 4.16663 4.16604 13.4937 4.16604 25C4.15916 29.5766 5.66584 34.027 8.45146 37.6583L8.44104 37.6958L9.18062 38.5562C11.1345 40.8406 13.5606 42.6741 16.2915 43.9305C19.0225 45.1868 21.9933 45.836 24.9994 45.8333C29.223 45.8411 33.3481 44.5581 36.8223 42.1562C38.3034 41.1329 39.6464 39.9229 40.8181 38.5562L41.5577 37.6958L41.5473 37.6583ZM24.9994 12.5C23.3418 12.5 21.7521 13.1584 20.58 14.3305C19.4079 15.5026 18.7494 17.0924 18.7494 18.75C18.7494 20.4076 19.4079 21.9973 20.58 23.1694C21.7521 24.3415 23.3418 25 24.9994 25C26.657 25 28.2467 24.3415 29.4188 23.1694C30.5909 21.9973 31.2494 20.4076 31.2494 18.75C31.2494 17.0924 30.5909 15.5026 29.4188 14.3305C28.2467 13.1584 26.657 12.5 24.9994 12.5Z"
                  fill="white"
                />
              </svg>
            </Box>
          )}
        </Flex>
      </Box>
      <Box sx={{ paddingTop: "80px" }}></Box>
    </>
  );
};

export default Header;
