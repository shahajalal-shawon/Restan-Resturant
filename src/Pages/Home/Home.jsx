import Bannar from "./Bannar/Bannar";
import Contact from "./Contace/Contact";
import DelisiusFood from "./DelisiusFood/DelisiusFood";
import PopularChefs from "./PopularChefs/PopularChefs";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <DelisiusFood></DelisiusFood>
            <Contact></Contact>
            <PopularChefs></PopularChefs>
        </div>
    );
};

export default Home;