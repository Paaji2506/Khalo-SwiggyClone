import React, { useState } from "react";
import Adminnav from "./Adminnav";

export default function Addrestaurant() {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);

  const initialvalues = {
    name: "",
    contact: "",
    address: "",
    image: "",
    keywords: "",
  };
  const [formValues, setformValues] = useState(initialvalues);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleformChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const addkeyword = (e) => {
    e.preventDefault();
    let dis = document.getElementById("diskeyword");
    let list = document.createElement("li");
    list.append(text);
    dis.append(list);
    setTextArray((prevArray) => [...prevArray, text]);
    setText("");
    console.log(textArray);
  };

  async function handleFormSubmit(e){
  e.preventDefault();
  let restaurant = {
   name:formValues.name,
   contact:formValues.contact,
   address:formValues.address,
   image:formValues.image,
   keywords:textArray
  };
//   let resp =  await fetch('https://localhost:32768/api/restaurant', {
//    method: 'POST',
//    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(restaurant),
//  });
//  if(resp.status===200){
    alert(JSON.stringify(restaurant));
    alert("Restaurant Added Successfully");
    setTimeout(() => (window.location.href = "/allrestaurants"), 1000);
setformValues({
    name: "",
    contact: "",
    address: "",
    image: "",
    keywords: "",
});
};
// }

  return (
    <div>
      <Adminnav />
      <div className="restform">
        <form  onSubmit={handleFormSubmit}>
          <div className="rest-form-heading">
            <h3>Add Restaurant </h3>
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name "
              id="exampleInputEmail1"
              name="name"
              value={formValues.name}
              onChange={handleformChange}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Enter Contact Number "
              id="exampleInputPassword1"
              name="contact"
              value={formValues.contact}
              onChange={handleformChange}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="textarea"
              class="form-control"
              placeholder="Enter Location or Address "
              id="exampleInputPassword1"
              name="address"
              value={formValues.address}
              onChange={handleformChange}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="file"
              class="form-control"
              id="exampleInputPassword1"
              name="image"
              value={formValues.image}
              onChange={handleformChange}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              onChange={handleChange}
              value={text}
              placeholder="Enter Keywords "
              id="exampleInputPassword1"
            />
            <div id="diskeyword"></div>
            <button onClick={addkeyword} className="addkeybtn">
              Add Keyword
            </button>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
