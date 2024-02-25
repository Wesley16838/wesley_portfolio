import Props from "@/types/components/layout";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";
import "./style.scss";

const Layout = ({ children, navList, currentState }: Props) => {
  return (
    <div className="layout">
      <Header />
      <Nav listItems={navList!} currentState={currentState!} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
