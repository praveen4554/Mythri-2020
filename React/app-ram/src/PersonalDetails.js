import React from "react";

export default function PersonalDetails(props) {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="First Name" id="firstName" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" id="lastName" />
        </div>
        <div>
          <input type="text" placeholder="Gender" id="gender" />
        </div>
        <div>
          <input type="text" placeholder="E-Mail" id="email" />
        </div>
        <div>
          <input type="text" placeholder="Contact Number" id="contact" />
        </div>
        <button onClick={(event) => props.onDataChange(event, "Personal")}>
          Update Personal Information
        </button>
      </form>
    </div>
  );
}
