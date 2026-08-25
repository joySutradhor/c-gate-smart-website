"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    contactMethod: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this with your backend / Formspree / email API
    console.log(formData);

    setSubmitted(true);
  };

  return (
    <main className="bg-[#F8FAFC] text-[#1F2937]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative Shapes */}

        

        <div
          className="
            relative
            mx-auto
            max-w-7xl
           
          "
        >

          <div className="flex  flex-col items-center justify-center py-20 text-center  lg:py-16 w-full">

            {/* Label */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#E4E9EE]
                bg-[#F8FAFC]
                px-4
                py-2
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#415A77]
                "
              />

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#667085]
                "
              >
                Get In Touch
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                max-w-3xl
                text-[32px]
                font-semibold
                leading-[1.12]
                tracking-[-0.03em]
                text-[#182433]

                sm:text-[42px]

                lg:text-[52px]
              "
            >
              Let's Talk About
              <span className="block text-[#415A77]">
                Your Gate Project
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-2xl
                text-[15px]
                leading-7
                text-[#667085]

                sm:text-[16px]
              "
            >
              WWhether you need a bespoke gate, gate automation, servicing, refurbishment or repairs, we're here to help. Get in touch with our team to discuss your requirements and find the right solution for your home or business.
            </p>


            

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14

          sm:px-8

          lg:px-10
          lg:py-20
        "
      >

        <div
          className="
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >

          {/* Phone */}

          <a
            href="tel:+4401494 578656"
            className="
              group
              rounded-3xl
              border
              border-[#E4E9EE]
              bg-white
              p-6

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#D8E0E8]
              hover:shadow-[0_15px_40px_rgba(24,36,51,0.07)]
            "
          >

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EAF0F5]
                  text-[#415A77]
                "
              >
                <Phone size={19} />
              </div>

              <ArrowUpRight
                size={18}
                className="
                  text-[#98A2B3]
                  transition
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-[#415A77]
                "
              />

            </div>

            <p
              className="
                mt-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#98A2B3]
              "
            >
              Call Us
            </p>

            <p
              className="
                mt-1.5
                text-[17px]
                font-semibold
                text-[#182433]
              "
            >
              01494 578656
            </p>

            <p
              className="
                mt-1
                text-[13px]
                text-[#667085]
              "
            >
              Speak with our team
            </p>

          </a>


          {/* Email */}

          <a
            href="mailto:info@gatesmart.co.uk"
            className="
              group
              rounded-3xl
              border
              border-[#E4E9EE]
              bg-white
              p-6

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#D8E0E8]
              hover:shadow-[0_15px_40px_rgba(24,36,51,0.07)]
            "
          >

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EAF0F5]
                  text-[#415A77]
                "
              >
                <Mail size={19} />
              </div>

              <ArrowUpRight
                size={18}
                className="
                  text-[#98A2B3]
                  transition
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-[#415A77]
                "
              />

            </div>

            <p
              className="
                mt-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#98A2B3]
              "
            >
              Email Us
            </p>

            <p
              className="
                mt-1.5
                break-all
                text-[17px]
                font-semibold
                text-[#182433]
              "
            >
              info@gatesmart.co.uk
            </p>

            <p
              className="
                mt-1
                text-[13px]
                text-[#667085]
              "
            >
              Send us your requirements
            </p>

          </a>


          {/* Location */}

          <div
            className="
              group
              rounded-3xl
              border
              border-[#E4E9EE]
              bg-white
              p-6

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#D8E0E8]
              hover:shadow-[0_15px_40px_rgba(24,36,51,0.07)]
            "
          >

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EAF0F5]
                  text-[#415A77]
                "
              >
                <MapPin size={19} />
              </div>

              <Clock3
                size={18}
                className="text-[#98A2B3]"
              />

            </div>

            <p
              className="
                mt-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#98A2B3]
              "
            >
              Service Area
            </p>

            <p
              className="
                mt-1.5
                text-[17px]
                font-semibold
                text-[#182433]
              "
            >
              Buckinghamshire & Surrounding Areas
            </p>

            <p
              className="
                mt-1
                text-[13px]
                text-[#667085]
              "
            >
              Contact us to discuss your location
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM + SIDEBAR
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-16

          sm:px-8

          lg:px-10
          lg:pb-24
        "
      >

        <div
          className="
            grid
            gap-6

            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-8
          "
        >

          {/* =================================================
              LEFT INFORMATION PANEL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#182433]
              p-7
              text-white

              sm:p-9

              lg:p-10
            "
          >

            {/* Background Decoration */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#415A77]
                opacity-30
                blur-3xl
              "
            />


            <div className="relative">

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/50
                "
              >
                Start Your Project
              </span>


              <h2
                className="
                  mt-4
                  text-[27px]
                  font-semibold
                  leading-tight

                  sm:text-[31px]
                "
              >
                Tell us what
                <span className="block text-[#C8D5E2]">
                  you have in mind.
                </span>
              </h2>


              <p
                className="
                  mt-5
                  text-[14px]
                  leading-6
                  text-white/60
                "
              >
                Every project is different. Share a few
                details with us and our team can help you
                understand the options available for your
                property.
              </p>


              {/* Process */}

              <div className="mt-9 space-y-6">

                {/* Step 1 */}

                <div className="flex gap-4">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      text-[12px]
                      font-semibold
                    "
                  >
                    01
                  </div>

                  <div>

                    <h3
                      className="
                        text-[14px]
                        font-semibold
                      "
                    >
                      Tell us about your project
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        leading-5
                        text-white/50
                      "
                    >
                      Give us some basic information
                      about what you need.
                    </p>

                  </div>

                </div>


                {/* Step 2 */}

                <div className="flex gap-4">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      text-[12px]
                      font-semibold
                    "
                  >
                    02
                  </div>

                  <div>

                    <h3
                      className="
                        text-[14px]
                        font-semibold
                      "
                    >
                      Discuss your requirements
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        leading-5
                        text-white/50
                      "
                    >
                      We&apos;ll discuss the design,
                      functionality and suitable options.
                    </p>

                  </div>

                </div>


                {/* Step 3 */}

                <div className="flex gap-4">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      text-[12px]
                      font-semibold
                    "
                  >
                    03
                  </div>

                  <div>

                    <h3
                      className="
                        text-[14px]
                        font-semibold
                      "
                    >
                      Move forward with confidence
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        leading-5
                        text-white/50
                      "
                    >
                      Get clear guidance before making
                      your project decisions.
                    </p>

                  </div>

                </div>

              </div>


              {/* Trust */}

              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  border-t
                  border-white/10
                  pt-6
                "
              >

                <ShieldCheck
                  size={21}
                  className="text-[#C8D5E2]"
                />

                <p
                  className="
                    text-[12px]
                    leading-5
                    text-white/50
                  "
                >
                  Your project details are only used
                  to respond to your enquiry.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div
            className="
              rounded-3xl
              border
              border-[#E4E9EE]
              bg-white
              p-6

              sm:p-8

              lg:p-10
            "
          >

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Form Header */}

                <div className="mb-8">

                  <span
                    className="
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#415A77]
                    "
                  >
                    Enquiry Form
                  </span>

                  <h2
                    className="
                      mt-2
                      text-[26px]
                      font-semibold
                      tracking-[-0.02em]
                      text-[#182433]
                    "
                  >
                    Send us a message
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-6
                      text-[#667085]
                    "
                  >
                    Fill in the details below and
                    we&apos;ll get back to you.
                  </p>

                </div>


                {/* Name + Email */}

                <div
                  className="
                    grid
                    gap-5
                    sm:grid-cols-2
                  "
                >

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-[13px]
                        font-semibold
                        text-[#1F2937]
                      "
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#E4E9EE]
                        bg-[#F8FAFC]
                        px-4
                        text-[14px]
                        text-[#1F2937]
                        outline-none

                        placeholder:text-[#98A2B3]

                        transition

                        focus:border-[#415A77]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#415A77]/10
                      "
                    />

                  </div>


                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-[13px]
                        font-semibold
                        text-[#1F2937]
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#E4E9EE]
                        bg-[#F8FAFC]
                        px-4
                        text-[14px]
                        text-[#1F2937]
                        outline-none

                        placeholder:text-[#98A2B3]

                        transition

                        focus:border-[#415A77]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#415A77]/10
                      "
                    />

                  </div>

                </div>


                {/* Phone + Project Type */}

                <div
                  className="
                    grid
                    gap-5
                    sm:grid-cols-2
                  "
                >

                  {/* Phone */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        text-[13px]
                        font-semibold
                        text-[#1F2937]
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#E4E9EE]
                        bg-[#F8FAFC]
                        px-4
                        text-[14px]
                        text-[#1F2937]
                        outline-none

                        placeholder:text-[#98A2B3]

                        transition

                        focus:border-[#415A77]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#415A77]/10
                      "
                    />

                  </div>


                  {/* Project Type */}

                  <div>

                    <label
                      htmlFor="projectType"
                      className="
                        mb-2
                        block
                        text-[13px]
                        font-semibold
                        text-[#1F2937]
                      "
                    >
                      Project Type
                    </label>

                    <div className="relative">

                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="
                          h-12
                          w-full
                          appearance-none
                          rounded-xl
                          border
                          border-[#E4E9EE]
                          bg-[#F8FAFC]
                          px-4
                          pr-10
                          text-[14px]
                          text-[#1F2937]
                          outline-none

                          transition

                          focus:border-[#415A77]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#415A77]/10
                        "
                      >

                        <option value="">
                          Select project type
                        </option>

                        <option value="metal-gate">
                          Metal Gate
                        </option>

                        <option value="wooden-gate">
                          Wooden Gate
                        </option>

                        <option value="aluminium-gate">
                          Aluminium Gate
                        </option>

                        <option value="composite-gate">
                          Composite Gate
                        </option>

                        <option value="gate-automation">
                          Gate Automation
                        </option>

                        <option value="railings">
                          Railings
                        </option>

                        <option value="other-metalwork">
                          Other Metalwork
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                      <ChevronDown
                        size={17}
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          text-[#667085]
                        "
                      />

                    </div>

                  </div>

                </div>


                {/* Preferred Contact */}

                <div>

                  <label
                    className="
                      mb-3
                      block
                      text-[13px]
                      font-semibold
                      text-[#1F2937]
                    "
                  >
                    Preferred Contact Method
                  </label>

                  <div
                    className="
                      grid
                      grid-cols-3
                      gap-2
                      
                    "
                  >

                    {[
                      {
                        value: "phone",
                        label: "Phone",
                      },
                      {
                        value: "email",
                        label: "Email",
                      },
                      {
                        value: "either",
                        label: "Either",
                      },
                    ].map((option) => {

                      const active =
                        formData.contactMethod ===
                        option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              contactMethod:
                                option.value,
                            }))
                          }
                          className={`
                            rounded-xl
                            border
                            px-3
                            py-3
                            text-[13px]
                            font-medium
                            transition
                            cursor-pointer

                            ${
                              active
                                ? "border-[#415A77] bg-[#EAF0F5] text-[#182433]"
                                : "border-[#E4E9EE] bg-[#F8FAFC] text-[#667085] hover:border-[#C8D2DC] hover:text-[#182433]"
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      );

                    })}

                  </div>

                </div>


                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-[13px]
                      font-semibold
                      text-[#1F2937]
                    "
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your gate, automation, railings or metalwork requirements..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#E4E9EE]
                      bg-[#F8FAFC]
                      px-4
                      py-3.5
                      text-[14px]
                      leading-6
                      text-[#1F2937]
                      outline-none

                      placeholder:text-[#98A2B3]

                      transition

                      focus:border-[#415A77]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#415A77]/10
                    "
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    bg-[#415A77]

                    px-6
                    py-3.5

                    text-[14px]
                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#344B65]
                    hover:shadow-[0_10px_25px_rgba(65,90,119,0.22)]

                    active:scale-[0.99]
                  "
                >

                  Send Enquiry

                  <Send size={16} />

                </button>


                <p
                  className="
                    text-center
                    text-[11px]
                    leading-5
                    text-[#98A2B3]
                  "
                >
                  By submitting this form, you agree
                  that we can contact you regarding your
                  enquiry.
                </p>

              </form>

            ) : (

              /* =================================================
                  SUCCESS STATE
              ================================================= */

              <div
                className="
                  flex
                  min-h-[560px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  text-center
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF0F5]
                    text-[#415A77]
                  "
                >
                  <Check size={28} />
                </div>


                <h2
                  className="
                    mt-6
                    text-[28px]
                    font-semibold
                    text-[#182433]
                  "
                >
                  Thank You
                </h2>


                <p
                  className="
                    mt-3
                    max-w-md
                    text-[14px]
                    leading-6
                    text-[#667085]
                  "
                >
                  Your enquiry has been received.
                  We&apos;ll review your project details
                  and get back to you as soon as possible.
                </p>


                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E4E9EE]
                    px-5
                    py-3
                    text-[14px]
                    font-semibold
                    text-[#182433]
                    transition
                    hover:bg-[#F8FAFC]
                  "
                >
                  Send another enquiry
                  <ArrowRight size={16} />
                </button>

              </div>

            )}

          </div>

        </div>

      </section>



    

    </main>
  );
}