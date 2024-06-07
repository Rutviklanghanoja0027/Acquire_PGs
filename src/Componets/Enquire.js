import React, { useState } from "react";

const Enquire = () => {
  const [gender, setGender] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");
  const [sharing, setSharing] = useState("");
  const [location, setLocation] = useState("");
  
  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
    setShowLocation(value !== '');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = { email, name, message, number, status, sharing, location, gender };
    data.access_key = "0a430fee-6f3b-492f-b8d1-97c98fa5c4a7";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const responseData = await res.json();
        console.log("Success", responseData);
      } else {
        console.error("Failed to submit form:", res.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }

    // Clear form fields after submission
    setEmail("");
    setName("");
    setMessage("");
    setNumber("");
    setStatus("");
    setSharing("");
    setLocation("");
    setGender("");
    setShowLocation(false);
  };

  return (
    <div className="flex items-center justify-center" style={{ background: "#FFEEA9" }}>
      <div className="text-center pt-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-transparent min-w-screen bg-gradient-to-r from-cyan-500 to-teal-800 bg-clip-text text-center">
          Enquire for accommodation
        </h1>

        <div className="flex items-center text-left justify-center p-8" style={{ background: "#FFEEA9" }}>
          <form 
            className="flex flex-col gap-4 p-4 md:p-6 shadow-xl hover:shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 rounded-md" 
            style={{ background: "#FFEEA9" }} 
            onSubmit={onSubmit}
          >
            <label htmlFor="name" className="text-base md:text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
            />
            <label htmlFor="email" className="text-base md:text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
            />
            <label htmlFor="number" className="text-base md:text-lg font-medium">
  Contact No.
</label>
<input
  type="number"
  id="number"
  placeholder="Enter your Number"
  name="number"
  required
  value={number}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setNumber(value);
    }
  }}
  pattern="\d{10}"
  min="1000000000"
  max="9999999999"
  className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
/>

            <div>
              <label htmlFor="gender" className="text-base md:text-lg font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
                onChange={handleGenderChange}
                value={gender}
                placeholder=" Please select Gender"
              >
                <option value=""> Please select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              {showLocation && (
                <div className="mt-6"> 
                  <label htmlFor="prefer-location" className="text-base md:text-lg font-medium">
                    Prefer Location
                  </label>
                  <select
                    id="prefer-location"
                    name="prefer-location"
                    required
                    className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
                    placeholder="Please select location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {gender === 'male' && (
                      <>
                        <option value="" disabled> Please select prefer location</option>
                        <option value="Navrangpura">Navrangpura</option>
                        <option value="Ramdevnagar">Ramdevnagar</option>
                        <option value="Vastrapur">Vastrapur</option>
                      </>
                    )}
                    {gender === 'female' && (
                      <>
                      
                        <option value="Anand Nagar">Anand Nagar</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>

            <label htmlFor="sharing" className="text-base md:text-lg font-medium">
              Sharing
            </label>
            <select
              id="sharing"
              name="sharing"
              required
              className="w-full h-8 md:h-10 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
              value={sharing}
              onChange={(e) => setSharing(e.target.value)}
            >
              <option value="" disabled>
                Please select Sharing
              </option>
              <option value="2 Sharing">2 Sharing</option>
              <option value="3 Sharing">3 Sharing</option>
              <option value="Multi Sharing">Multi Sharing</option>
            </select>

            <label htmlFor="message" className="text-base md:text-lg font-medium">
              Write additional Enquiry
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full h-16 px-3 md:px-4 rounded-md bg-gradient-to-r from-cyan-100 to-teal-200 text-black text-base md:text-lg font-medium"
            ></textarea>

            <label htmlFor="status" className="text-base md:text-lg font-medium">
              Status
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="employed"
                name="status"
                value="employed"
                required
                className="h-4 w-4 md:h-5 md:w-5 mr-2"
                checked={status === "employed"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="employed" className="mr-4 text-base md:text-lg font-medium">
                Employed
              </label>
              <input
                type="radio"
                id="student"
                name="status"
                value="student"
                required
                className="h-4 w-4 md:h-5 md:w-5 mr-2"
                checked={status === "student"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="student" className="text-base md:text-lg font-medium">
                Student
              </label>
            </div>
            <button
              className="contact-submit text-base md:text-lg font-medium rounded-full bg-gradient-to-r from-cyan-200 to-teal-300 text-black px-8 py-2 md:px-10 md:py-3 hover:scale-110 transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
