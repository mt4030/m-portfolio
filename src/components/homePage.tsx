import Footer from "../layout/footer"
import Header from "../layout/header"
import About from "./aboutmePage"
import Contact from "./Contact"

import Herosection from "./hero/herosection"
import Project from "./projectPage"
import Tools from "./Skill"
const Home=()=>{



    return(
        <>
<Header/>
<Herosection/>     
<Project/>
<Tools/>
<About/>
 <Contact/>
 <Footer/>

     

      

        </>
        




    )
}
export default Home