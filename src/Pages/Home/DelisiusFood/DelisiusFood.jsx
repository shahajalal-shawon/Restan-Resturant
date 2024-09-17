import dfood from '../../../assets/delisius-food.png'
import about1 from '../../../assets/dfood-side1.png';
import about2 from '../../../assets/dfood-side2.png';
const DelisiusFood = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-10 mt-24">
          <div className="space-y-8">
            <p className="bg-orange-700 rounded w-32 p-2">ABOUT DELISH</p>
            <h1 className="text-6xl font-bold uppercase">
              Delicious Food For <br /> Healthy Life
            </h1>
            <div className="flex justify-center  items-center gap-12">
              <img src={about1} alt="" />
              <div>
                <h1 className="text-2xl font-bold">Quality Food</h1>
                <p>
                  The wise man therefore always holds Indies matters this
                  principle information
                </p>
              </div>
            </div>
            <div className="flex justify-center  items-center gap-12">
              <img src={about2} alt="" />
              <div>
                <h1 className="text-2xl font-bold">Supply Chain Maintain</h1>
                <p>
                  The wise man therefore always holds Indies matters this
                  principle information
                </p>
              </div>
            </div>
            <button className="btn btn-outline  hover:bg-orange-700 ">READ MORE</button>
          </div>
          <div>
            <img src={dfood} alt="" />
          </div>
        </div>
      </div>
    );
};

export default DelisiusFood;