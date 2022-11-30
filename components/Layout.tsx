import Link from "next/link";
import Nav from "./Nav";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
