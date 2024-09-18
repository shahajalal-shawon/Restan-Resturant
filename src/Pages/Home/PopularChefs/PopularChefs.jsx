import chefs1 from '../../../assets/chefs1.jpg'
import chefs2 from '../../../assets/chefs2.jpg'
import chefs3 from '../../../assets/chefs3.jpg'
import chefs4 from '../../../assets/chefs4.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const PopularChefs = () => {
    return (
      <div>
        <h1 className="bg-orange-700 text-center w-40 p-2 mx-auto items-center rounded">
          Team members
        </h1>
        <h1 className="text-5xl font-bold my-12 text-center uppercase">
          Our Popular Chefs
        </h1>
        <div className="flex justify-center items-center gap-10">
          <div>
            <img src={chefs1} alt="" />
            <div className="bg-orange-700 p-4 ">
              <p>CO-FOUNDER</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-medium">MIKE HARDSON</p>
                <p className="bg-black p-2 w-9">
                  <FaArrowRightLong></FaArrowRightLong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={chefs2} alt="" />
            <div className="bg-orange-700 p-4 ">
              <p className="uppercase">Main chef</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-medium uppercase">Kenneth Oliver</p>
                <p className="bg-black p-2 w-9">
                  <FaArrowRightLong></FaArrowRightLong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={chefs3} alt="" />
            <div className="bg-orange-700 p-4 ">
              <p className="uppercase">Head Waiter</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-medium uppercase">Quentin Samuel</p>
                <p className="bg-black p-2 w-9">
                  <FaArrowRightLong></FaArrowRightLong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={chefs4} alt="" />
            <div className="bg-orange-700 p-4 ">
              <p className="uppercase">Manager</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-medium uppercase"> Patrick James</p>
                <p className="bg-black p-2 w-9">
                  <FaArrowRightLong></FaArrowRightLong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopularChefs;