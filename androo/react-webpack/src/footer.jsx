import data from "../src/data/VisitCardPageData.json";
import {Logo} from './header.jsx';
const createdBy = () => <h3> CreatedBy <Logo dane ={data}/></h3>;
const footer = () =>
<footerBar>
    <supplementaryInfo></supplementaryInfo>
    <supplementaryOption></supplementaryOption>
    <createtBy>{createdBy()}</createtBy>
</footerBar>
export default footer(); 