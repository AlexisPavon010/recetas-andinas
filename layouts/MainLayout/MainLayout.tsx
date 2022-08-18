import Header from "layouts/MainLayout/components/Header";

interface MainLayoutProps {
  children?: JSX.Element[] | JSX.Element;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
