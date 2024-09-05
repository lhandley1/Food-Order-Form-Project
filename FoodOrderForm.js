import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!
    Your Order was ${order}.
    Please show your confirmation number for pickup.`);
  };

  const labelFormat = {
    fontFamily: 'Arial',
    fontSize: 18,
    color: 'black',
    marginLeft: '20%',
    padding: 10
  };

  const inputFormat = {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
    margin: 2,
    padding: 4,
    borderRadius: 4
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={labelFormat} htmlFor="name"><b>Name:</b></label>
      <input style={inputFormat} id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <br/>
      <label style={labelFormat} htmlFor="phone"><b>Phone:</b></label>
      <input style={inputFormat} id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <br/>
      <label style={labelFormat} htmlFor="address"><b>Address:</b></label>
      <input style={inputFormat} id="address" name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
      <br/>
      <label style={labelFormat} htmlFor="order"><b>Order: </b></label>
      <input style={inputFormat} id="order" name="order" type="text" value={order} onChange={(e) => setOrder(e.target.value)}/>
      <button style={{ fontFamily: 'Arial', fontSize: 16, padding: 14, marginLeft: '8%', marginTop: '-5%', borderRadius: 50, color: 'white', backgroundColor: 'darkblue' }} type="submit"><b>Submit Order</b></button>
    </form>
  );
}

export default FoodOrderForm;