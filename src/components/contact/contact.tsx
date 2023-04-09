import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast, ToastContainer, Zoom } from "react-toastify";

import Title from "../tittle/tittle";

export const Contact: React.FC<{}> = ({}) => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qar047m",
        "template_b2kloak",
        e.currentTarget,
        "E8FHGx70754i7fUv5"
      )
      .then(
        (result) => {
          alert("Email enviado,gracias por contactarme.");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section className="pt-10 flex flex-col" id="contact">
      <div className="font-poppins text-[36px] flex">
        <Title title="Envíame un mail" des="Contáctame" />
      </div>

      <div className=" flex flex-col mt-[-50px]">
        <div className="w-full p-6  md:w-[70%]">
          <form className="mt-6" onSubmit={sendEmail}>
            <div className="mb-2">
              <label>
                <span className="text-white">Nombre</span>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="
            sm:w-[50%]
            w-full
            block px-4 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50 
            text-black
            
          "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-white">Email address</span>
                <input
                  name="user_email"
                  type="email"
                  className="
            sm:w-[50%]
            block
            w-full          
            mt-2 px-4 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          text-black
          "
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>

            <div className="mb-2">
              <label>
                <span className="text-white">Asunto</span>
                <input
                  type="text"
                  name="subject"
                  required
                  className="
            sm:w-[50%]
            w-full
            block px-4 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50 
            text-black
            
          "
                  placeholder="Contratación para el puesto XXX - Empresa XXX"
                />
              </label>
            </div>

            <div className="mb-2">
              <label>
                <span className="text-white">Mensaje</span>
                <textarea
                  name="message"
                  required
                  className="
            block
            w-full
            mt-2 px-4 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            text-black
          "
                  rows={5}
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="
            mt-4
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                value="Send"
              >
                Contactame
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
