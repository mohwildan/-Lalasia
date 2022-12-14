import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import ImageLogo from "../public/image/logo/Frame.svg";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

const listNav = [
  {
    tile: "Product",
    href: "/product",
  },
  {
    tile: "Services",
    href: "/services",
  },
  {
    tile: "Article",
    href: "/article",
  },
  {
    tile: "About Us",
    href: "/about",
  },
];

const Navbar: FC = () => {
  const router = useRouter();
  return (
    <Box
      as="nav"
      w="full"
      bg="screen-color"
      pos="fixed"
      zIndex={999}
      borderBottom="2px solid #F3F3F3"
      h="100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex align="center" cursor="pointer" gap={1}>
          <Image src={ImageLogo} />
          <Link href="/">
            <Heading as="h3" fontSize="1.2rem">
              Lalasia
            </Heading>
          </Link>
        </Flex>
        <UnorderedList
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          gap={7}
        >
          {listNav.map((item, i) => (
            <ListItem
              key={i}
              fontWeight={500}
              fontSize="18px"
              lineHeight="180%"
              color={router.asPath === item.href ? "main-color" : "text-color"}
              listStyleType="none"
              _before={{
                content: "''",
                position: "absolute",
                w: router.asPath === item.href ? "4rem" : "0",
                bg: "main-color",
                h: "3px",
                bottom: 0,
                transition: "0.3s",
              }}
            >
              <Link href={item.href}>
                <a>{item.tile}</a>
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Flex
          alignItems="center"
          gap={5}
          display={{ base: "none", md: "flex" }}
        >
          <Icon
            fontSize="1.8rem"
            _hover={{ color: "secondary-color" }}
            cursor="pointer"
            as={AiOutlineShopping}
          />
          <Icon
            fontSize="1.8rem"
            as={BsPerson}
            cursor="pointer"
            _hover={{ color: "secondary-color" }}
          />
        </Flex>
        <Icon
          as={FaBars}
          fontSize="1.5rem"
          display={{ base: "inline-flex", md: "none" }}
          cursor="pointer"
        />
      </Container>
    </Box>
  );
};

export default Navbar;
