
import "./Dashboard.css";
import Menu from "./Menu";
import Card from './Card';
import Footer from "./Footer"; 
import ContentWrap from "./content-wrap";

// import Bikes from "./Products/Bikes";
// import CategoryItem  from "./Categories/ItemCategory";



function Dashboard () {
return (

<div className="dashboard">

<Menu />
<ContentWrap />
<Card />
{/* <CategoryItem /> */}
{/* <Bikes />  */}
<Footer />

</div>

);

}


export default Dashboard;