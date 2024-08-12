import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [defultData, setDefultData] = useState(null);
  const updateData = { name, img, price, description };
  const id = useParams().id;

  // update data get start
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDefultData(data));
  }, [id]);
  // update data get end
  //

  // input valu take start
  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  //
  const handleImg = (e) => {
    setImg(e.target.value);
    setImgError("");
  };
  //
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setPriceError("");
  };
  //
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setDescriptionError("");
  };
  // input valu take end
  // edit data send start
  const sendData = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Write product name");
    }
    if (!img) {
      setImgError("Inter image link");
    }
    if (!price) {
      setPriceError("Inter price");
    }
    if (!description) {
      setDescriptionError("Write description");
    }
    if ((name, img, price, description)) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    //

    //
  };
  //edit data send end

  //
  return (
    <div className="container mx-auto">
      <form
        onSubmit={sendData}
        className="mt-3 border-2 border-solid border-[#f2f2f2] text-center px-6 py-6 rounded-md"
      >
        <input
          placeholder="Product Name"
          onChange={handleName}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full px-4 py-2 rounded-lg"
          type="text"
          defaultValue={defultData?.name}
          name="name"
        />
        <br />
        <p className="text-red-400">{nameError}</p>
        <input
          onChange={handleImg}
          type="text"
          placeholder="Image link"
          defaultValue={defultData?.img}
          name="img"
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full px-4 py-2 rounded-lg"
        />
        <br />
        <p className="text-red-400">{imgError}</p>
        <input
          onChange={handlePrice}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full px-4 py-2 rounded-lg"
          type="number"
          placeholder="Product Price"
          defaultValue={defultData?.price}
          name="price"
        />
        <br />

        <p className="text-red-400">{priceError}</p>
        <textarea
          onChange={handleDescription}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full h-[80px] resize-none px-4 py-2 rounded-lg"
          placeholder="Description"
          defaultValue={defultData?.description}
          name="description"
        ></textarea>
        <p className="text-red-400">{descriptionError}</p>
        <button
          type="submit"
          className="px-3 py-1 block border-2 border-solid border-[#f2f2f2]"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
