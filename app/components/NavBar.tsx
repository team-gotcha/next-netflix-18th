import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const ITEM_LIST = [
    {
      id: 0,
      name: "Home",
      src: "/images/home-on.svg",
      link: "/main",
    },
    {
      id: 1,
      name: "Search",
      src: "/images/search-on.svg",
      link: "/main",
    },
    {
      id: 2,
      name: "Comming Soon",
      src: "/images/contents-off.svg",
      link: "/main",
    },
    {
      id: 3,
      name: "Downloads",
      src: "/images/download-off.svg",
      link: "/main",
    },
    {
      id: 4,
      name: "More",
      src: "/images/hambar-off.svg",
      link: "/main",
    },
  ];
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleItemClick = (id: number, link: string) => {
    setCurrentTab(id);
    router.push(link);
  };

  return (
    <Container>
      {ITEM_LIST.map(({ id, name, link, src }) => {
        const selected: boolean = currentTab === id;
        return (
          <NavItem
            key={id}
            onClick={() => {
              handleItemClick(id, link);
            }}
            selected={selected}
          >
            <Image src={src} alt={name} width={20} height={20} />

            <span className={selected ? "selected" : "not-selected"}>
              {name}
            </span>
          </NavItem>
        );
      })}
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  width: 375px;
  height: 53px;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #121212;
`;

const NavItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

  font-size: 0.5rem;
  margin-top: 0.2rem;

  cursor: pointer;

  .selected {
    color: white;
  }

  .not-selected {
    color: #878787;
  }

  img {
    filter: ${({ selected }) =>
      selected
        ? ""
        : "invert(55%) sepia(3%) saturate(0%) hue-rotate(100deg) brightness(95%) contrast(86%)"};
  }
`;
