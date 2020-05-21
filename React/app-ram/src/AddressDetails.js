import React from "react";

export default function AddressDetails(props) {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Street Address" id="street" />
        </div>
        <div>
          <input type="text" placeholder="Street Address Line 2" id="apt" />
        </div>
        <div>
          <input type="text" placeholder="City" id="city" />
        </div>
        <div>
          <input type="text" placeholder="State" id="state" />
        </div>
        <div>
          <input type="text" placeholder="Country" id="country" />
        </div>
        <button onClick={(event) => props.onDataChange(event, "Address")}>
          Update Address Information
        </button>
      </form>
    </div>
  );
}
