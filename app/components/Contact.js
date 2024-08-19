"use client";
import React, {useState, useRef, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.png";
import LinkedinIcon from "../../public/linkedin-icon.png";
import emailjs from "@emailjs/browser";

function Contact() {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");

    const [statusMessage, setStatusMessage] = useState("");
    

    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY), []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
      
        
        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            if(response.status === 200) {
                setStatusMessage("Email sent successfully!");
            }
        })
          
          .catch((error) => {
            console.log("FAILED...", error);
            setStatusMessage("Failed to send email!");
          });

        // Clear form fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    }

  return (
    <div id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        {/* Left section */}
        <div className="flex items-center flex-col">
            <h4 className="text-xl font-bold my-2 mb-8 z-10">Get in touch</h4>
            <div className="flex flex-row gap-4 z-10">
                <Link href="https://github.com/mylamthuy">
                    <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10" />
                </Link>
                <Link href="https://www.linkedin.com/in/mylamthuy/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10" />
                </Link>
            </div>
        </div>
        
        {/* Right section */}
        <div>
            <form className="flex flex-col"
                onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input ref={nameRef} type="text" id="name" name="name" placeholder="Jane" className="border border-gray-300 rounded-md p-2 w-full block" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input ref={emailRef} type="email" id="email" name="email" placeholder="example@gmail.com" className="border border-gray-300 rounded-md p-2 w-full block" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea ref={messageRef} type="text" id="message" name="message" rows={4} className="border border-gray-300 rounded-md p-2 w-full block" required />
                </div>
                <button type="submit" className="bg-[#2d8da5] hover:bg-[#286b7c] text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>
            </form>

            {/* {emailSend ? (
                <p className="text-[#069957] text-md font-medium mt-4">
                    Email sent successfully!
                </p>
                ) : (
                    <p className="text-[#c33537] text-md font-medium mt-4">
                    Error in sending email!
                </p>
            )} */}
            {statusMessage && <p className="text-md font-medium mt-4">{statusMessage}</p>}
        </div>
    </div>
  )
}

export default Contact