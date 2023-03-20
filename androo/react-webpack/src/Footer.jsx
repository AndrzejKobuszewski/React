import data from "./data/VisitCardPageData.json";
import { Logo } from "./Header.jsx";
const CreatedBy = () => (
  <h3 style={{ lineHeight: "8rem", textAlign: "right", maxWidth: "100em", fontWeight:"bolder" }}>
    {" "}
    CreatedBy <Logo dane={data} />
  </h3>
);

const Footer = () => (
  <footerBar>
    <supplementaryInfo></supplementaryInfo>
    <supplementaryOption></supplementaryOption>
    <createdBy>{<CreatedBy style={{ fontWeight: "400" }} />}</createdBy>
  </footerBar>
);
export default Footer;
