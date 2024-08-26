import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, IconButton, VStack, Text, useColorModeValue, useDisclosure, Collapse } from "@chakra-ui/react";
import { FiHome, FiMail, FiUser, FiCalendar, FiSearch, FiBarChart, FiFolder, FiSettings, FiLogOut, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img from "../../assets/techy.gif";
import control from "../../assets/control.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.700", "white");

  // const Menus = [
  //   { title: "Dashboard", icon: FiHome, path: "/dashboard" },
  //   { title: "Inbox", icon: FiMail, path: "/inbox" },
  //   { title: "Accounts", icon: FiUser, path: "/accounts", gap: true },
  //   { title: "Schedule", icon: FiCalendar, path: "/schedule" },
  //   { title: "Search", icon: FiSearch, path: "/search" },
  //   { title: "Analytics", icon: FiBarChart, path: "/analytics" },
  //   { title: "Files", icon: FiFolder, path: "/files", gap: true },
  //   { title: "Settings", icon: FiSettings, path: "/settings" },
  // ];

  const Menus = [
    { title: "Dashboard", icon: FiHome, path: "/dashboard" },
    { title: "Link Wallet", icon: FiUser, path: "/ledger" },
    { title: "Deposit",  icon: FiBarChart, path: "/deposit" },
    { title: "Settings", icon: FiSettings, path: "/settings" },
    { href: "/withdrawal", label: "Withdraw Money" },
    { href: "/withdrawal", label: "Withdrawal List" },
  ];

 


  return (
    <Flex h="100vh" bg={bgColor} color={textColor} direction="column">
      <Flex
        direction="column"
        alignItems={open ? "flex-start" : "center"}
        p={4}
        w={open ? "240px" : "60px"}
        transition="width 0.3s"
        bg={bgColor}
        position="relative"
        h="full"
      >
        <IconButton
          icon={open ? <FiChevronLeft /> : <FiChevronRight />}
          onClick={() => setOpen(!open)}
          position="absolute"
          top="16px"
          right={open ? "-20px" : "-20px"}
          transform={open ? "translateX(0)" : "translateX(50%)"}
          transition="transform 0.3s"
          size="sm"
          borderRadius="full"
          aria-label="Toggle Sidebar"
        />

        <Flex alignItems="center" mb={8}>
          <Box
            as="img"
            src={img}
            alt="Logo"
            boxSize={open ? "50px" : "30px"}
            transition="box-size 0.3s"
            cursor="pointer"
          />
          {open && (
            <Text ml={4} fontSize="xl" fontWeight="bold">
              Dashboard
            </Text>
          )}
        </Flex>

        <VStack spacing={4} alignItems={open ? "flex-start" : "center"}>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <Flex
                align="center"
                p={2}
                borderRadius="md"
                w="full"
                _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                transition="background 0.3s"
                justifyContent={open ? "flex-start" : "center"}
              >
                <Box as={menu.icon} boxSize="20px" />
                {open && (
                  <Text ml={4} fontSize="md">
                    {menu.title}
                  </Text>
                )}
              </Flex>
            </Link>
          ))}
        </VStack>


        

        <Flex mt="auto" direction="column" w="full">
          <Flex
            align="center"
            p={2}
            borderRadius="md"
            w="full"
            _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
            transition="background 0.3s"
            justifyContent={open ? "flex-start" : "center"}
            cursor="pointer"
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/";
              }
            }}
          >
            <Box as={FiLogOut} boxSize="20px" />
            {open && (
              <Text ml={4} fontSize="md">
                Logout
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
