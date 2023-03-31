import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#8ebeda] flex justify-center items-center p-4 text-white"
    >
      <form
        method="POST"
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black ">
            Contact
          </p>
          <p className=" py-4 mt-2">Email: </p>
          <p className=" py-4">Tel:</p>
        </div>
        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#fff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#6f6d70] hover:border-[#6f6d70] px-4 py-3 my-8 mx-auto flex items-center">
          Get in Touch !
        </button>
      </form>
    </div>
  );
};

export default Contact;
