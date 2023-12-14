
import "./Dashboard.css";
import Header from "./Header";
import Card from './Card';
import Footer from "./Footer";

import Bikes from "./Products/Bikes";
import CategoryItem  from "./Categories/ItemCategory";



function Dashboard () {
return (

    <div className="dashboard">


<Header />


<Card />

<CategoryItem />

<Bikes /> 


   
 
<Footer />


</div>

);

}


export default Dashboard;