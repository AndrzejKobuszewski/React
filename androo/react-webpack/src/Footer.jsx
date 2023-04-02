import data from "./data/VisitCardPageData.json";
import { Logo } from "./Header.jsx";
const CreatedBy = () => (
  <h3 style={{ lineHeight: "8rem", textAlign: "right", maxWidth: "100em", fontWeight:"bolder" }}>
    {" "}
    CreatedBy <Logo dane={data} />
  </h3>
);

const Footer = () => (
  <div className='footerBar'>

    <div className='createdBy'>{<CreatedBy style={{ fontWeight: "400" }} />}</div>
  </div>
);
export default Footer;
