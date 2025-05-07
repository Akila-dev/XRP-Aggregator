"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  InputFieldRHF,
  FormMessage,
  SubmitButton,
  CardDiv,
} from "../../components";

import { FaMessage, FaEnvelope, FaUser } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(1, { message: "Required" }),
});

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  // ! RESET FORM VALUES
  const resetValues = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("subject", "");
    setValue("message", "");
  };

  //   ! SUBMIT FORM
  const onSubmit = (values) => {
    setIsPending(true);

    // ! SET ERROR AND SUCCESS MESSAGE TO EMPTY
    setError("");
    setSuccess("");

    // ! EXECUTE API FOR SENDING THE MESSAGE
    setTimeout(() => {
      // * IF SUCCESS, SET ISPENDING TO FALSE AND SET SUCCESS MESSAGE
      setIsPending(false);
      setSuccess("Message sent successfully!");
      resetValues();
      console.log(values);

      //   * AFTER 2 SECONDS, SET ERROR AND SUCCESS MESSAGE TO EMPTY
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);
      //   setError("");
    }, 2000);
  };

  return (
    <div
      className={`gsap-form-section h-full w-full dark-gradient-2 px-4 py-5 md:p-6 space-y-4 rounded-3xl border border-dark`}
    >
      <div className="flex flex-col gap-1 justify-start">
        {/* <p className="tag-2 w-fit">Contact Us</p> */}
        <h3>Leave Your Message</h3>
      </div>
      <form
        onSubmit={handleSubmit((d) => onSubmit(d))}
        className={`w-full ${isPending && "pending"} space-y-4`}
      >
        <CardDiv
          animation="slide-in"
          start="95%"
          className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8"
        >
          <InputFieldRHF
            label="Name"
            type="text"
            placeholder="Enter Name"
            rhf={{ ...register("name") }}
            error={errors.name?.message}
            icon={<FaUser className="input-icon" />}
          />
          <InputFieldRHF
            label="Email"
            type="mail"
            placeholder="Enter Email"
            rhf={{ ...register("email") }}
            error={errors.email?.message}
            icon={<FaEnvelope className="input-icon" />}
          />
          <InputFieldRHF
            label="Subject"
            type="text"
            placeholder="Enter Subject"
            rhf={{ ...register("subject") }}
            error={errors.subject?.message}
            additionalClassName="md:col-span-2"
            icon={<MdOutlineTitle className="input-icon" />}
          />
          <InputFieldRHF
            label="Message"
            type="textarea"
            placeholder="Enter Message"
            rhf={{ ...register("message") }}
            error={errors.message?.message}
            additionalClassName="md:col-span-2"
            icon={<FaMessage className="input-icon" />}
          />
        </CardDiv>

        {error && <FormMessage message={error} type="error" />}
        {success && <FormMessage message={success} type="success" />}

        {!error && !success && (
          <div className="w-full">
            <SubmitButton text="Send Message" submitting={isPending} />
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
