import SiteFooter from "./SiteFooter";

export default function Page({ children }) {
  return (
    <>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
