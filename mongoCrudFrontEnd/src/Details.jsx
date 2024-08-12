import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  //
  const [singleData, setSingleData] = useState(null);
  const paramsid = useParams().id;

  // single product data get start
  useEffect(() => {
    fetch(`http://localhost:5000/products/${paramsid}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);
  // single product data get end
  //
  return (
    <div className="container mx-auto border-2 border-solid border-[#f2f2f2] mt-5 px-4 py-6 text-center">
      <h1 className="text-3xl font-bold">{singleData?.name}</h1>
      <h2 className="mt-3 text-xl font-semibold">Price in bangladesh</h2>
      <div className="grid grid-cols-2 grid-rows-2 border-2 border-solid border-[#f2f2f2] w-[300px] mx-auto mt-5 py-2">
        <div>
          <p>
            <strong>Official</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Tk {singleData?.price}</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Unofficial</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Not Available</strong>
          </p>
        </div>
      </div>
      <div className="text-center mt-5">
        <img className="inline" src={singleData?.img} alt="product" />
      </div>

      <h2 className="mt-3">{ singleData?.description}</h2>
    </div>
  );
};

export default Details;
