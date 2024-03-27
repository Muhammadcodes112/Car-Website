import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex space-x-96 justify-between py-5 bg-black px-20 items-center">
        <div className="logo font-bold text-3xl">Lurex</div>
        <div className="nav">
          <ul className="flex space-x-10 items-center justify-between font-bold">
            <li>Home</li>
            <li>Cars</li>
            <li>About Us</li>
            <li>Booking</li>
            <li className="btn">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
