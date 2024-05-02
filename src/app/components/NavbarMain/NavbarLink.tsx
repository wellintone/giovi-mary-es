import { usePathname, useRouter } from "next/navigation";
import { waitToChange } from "./utility";
import Link from "next/link";

interface ICustomNavLink {
  route: string;
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
}

const NavbarLink = ({ route, children, onClick }: ICustomNavLink) => {
  const currentPath = usePathname();

  return (
    <div className="navbarLink">
      <Link className="route" href={route} onClick={onClick}>
        {children}
      </Link>
      <span
        className={`bottom__line ${currentPath === route ? "activated" : ""}`}
      ></span>
    </div>
  );
};

export default NavbarLink;
