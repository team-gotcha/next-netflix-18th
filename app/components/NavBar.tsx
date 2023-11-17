"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

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
    link: "/search",
  },
  {
    id: 2,
    name: "Comming Soon",
    src: "/images/contents-off.svg",
    link: "/",
  },
  {
    id: 3,
    name: "Downloads",
    src: "/images/download-off.svg",
    link: "/",
  },
  {
    id: 4,
    name: "More",
    src: "/images/hambar-off.svg",
    link: "/",
  },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    const currentTabId = ITEM_LIST.findIndex((item) => item.link === pathname);
    if (currentTabId !== -1) {
      setCurrentTab(currentTabId);
    }
  }, [pathname]);

  const handleItemClick = (id: number, link: string) => {
    setCurrentTab(id);
    router.push(link);
  };

  return (
    <div className="fixed bottom-0 w-full max-w-[450px] h-14 flex justify-evenly items-center bg-neutral-900 z-50">
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
    </div>
  );
};

export default NavBar;

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
