import { useState } from "react";
//
const Post = () => {
  //
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const postData = { name, img, price, description };
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

  // post data send start
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
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((data) => confirm("post succes"));
    }
    setName("");
    setPrice("");
    setDescription("");
    setImg("");
    //
  };
  //post data send end

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
          value={name}
        />
        <br />
        <p className="text-red-400">{nameError}</p>
        <input
          onChange={handleImg}
          type="text"
          placeholder="Image link"
          value={img}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full px-4 py-2 rounded-lg"
        />
        <br />
        <p className="text-red-400">{imgError}</p>
        <input
          onChange={handlePrice}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full px-4 py-2 rounded-lg"
          type="number"
          placeholder=" Product Price"
          value={price}
        />
        <br />

        <p className="text-red-400">{priceError}</p>
        <textarea
          onChange={handleDescription}
          className="my-2 border-2 border-solid border-[#f2f2f2] w-full h-[80px] resize-none px-4 py-2 rounded-lg"
          placeholder="Description"
          value={description}
        ></textarea>
        <p className="text-red-400">{descriptionError}</p>
        <button
          type="submit"
          className="px-3 py-1 block border-2 border-solid border-[#f2f2f2]"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
