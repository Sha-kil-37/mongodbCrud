import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  //
  const [Data, setData] = useState([]);
  // console.log(Data);
  //
  // post data get start
  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [Data]);
  // post data get end
  // single data delet start
  const handledDelet = (id) => {
    confirm("are you sure delete this post")
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletdata) => {
        if (deletdata.deletedCount > 0) {
          const remaing = Data.filter((product) => id !== product._id);
          setData(remaing);
        }
      });
  };
  // single data delet end
  //
  return (
    <div className="container mx-auto">
      <h1 className="px-2 text-center mb-3 font-bold text-xl">
        This is home page
      </h1>
      <h3 className="text-center mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        excepturi ullam tempore dolorum maxime pariatur, reprehenderit cum
        optio, amet eius nemo ea..
      </h3>
      <div>
        <h1 className="font-semibold text-xl py-5">All Post</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {Data.length > 0 ? (
            Data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-4 px-4 rounded-lg border-2 border-solid border-[#f2f2f2]"
                >
                  <div className="h-[300px] overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={item.img}
                      alt="product"
                    />
                  </div>
                  <h1 className="text-center font-semibold">{item.name}</h1>
                  <p className="text-center"> Taka {item.price}</p>
                  <div className="grid grid-cols-3 mt-3 gap-x-3">
                    <Link
                      to={`/products/${item._id}`}
                      className="px-2 py-1 border-2 border-solid border-[#f2f2f2]"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/edit/${item._id}`}
                      className="px-2 py-1 border-2 border-solid border-[#f2f2f2]"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handledDelet(item._id)}
                      className="px-2 py-1 border-2 border-solid border-[#f2f2f2]"
                    >
                      Delet
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Post</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
