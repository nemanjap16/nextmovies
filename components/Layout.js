import MainHeader from "../components/MainHeader";

export default function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}
