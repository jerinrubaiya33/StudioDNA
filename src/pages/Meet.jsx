import React, { useState, useEffect } from "react";

const Meet = () => {
  const architects = [
    {
      id: "elena",
      name: "Elena Rostova",
      role: "Principal Architect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      role: "Lead Sustainable Designer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "aria",
      name: "Aria Takahashi",
      role: "Urban Planner & Partner",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
    },
  ];

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:30 AM - 12:00 PM",
    "02:00 PM - 02:30 PM",
    "03:30 PM - 04:00 PM",
    "04:30 PM - 05:00 PM",
  ];

  // Application States
  const [selectedArchitect, setSelectedArchitect] = useState(architects[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formError, setFormError] = useState("");
  const [pendingBooking, setPendingBooking] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationInput, setVerificationInput] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [verificationNotice, setVerificationNotice] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);

  // Persistent Storage for Booked Appointments
  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem("architect_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  const [isBooked, setIsBooked] = useState(false);

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem("architect_bookings", JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  // Check if a specific slot combination is already taken
  const isSlotTaken = (architectId, date, time) => {
    return bookedSlots.some(
      (slot) =>
        slot.architectId === architectId &&
        slot.date === date &&
        slot.time === time,
    );
  };

  // Advanced Strict Email Validation Block
  const validateRealEmail = (email) => {
    const lowerEmail = email.toLowerCase().trim();

    // 1. Strict structural format check (Limits TLD extensions to 2-6 letters maximum)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(lowerEmail)) return false;

    // 2. Blacklist common "testing/placeholder" keywords
    const fakeKeywords = [
      "test",
      "example",
      "fake",
      "burner",
      "sample",
      "demo",
      "mailinator",
      "yopmail",
      "xyz",
    ];
    const hasFakeKeyword = fakeKeywords.some((keyword) =>
      lowerEmail.includes(keyword),
    );
    if (hasFakeKeyword) return false;

    // 3. Block sequential single character domain loops (like m.aaaaaa)
    const domainPart = lowerEmail.split("@")[1] || "";
    const lastDotIndex = domainPart.lastIndexOf(".");
    if (lastDotIndex !== -1) {
      const tld = domainPart.substring(lastDotIndex + 1);
      if (/^(.)\1+$/.test(tld) && tld.length > 3) {
        return false;
      }
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const resetVerification = () => {
    setPendingBooking(null);
    setVerificationCode("");
    setVerificationInput("");
    setVerificationError("");
    setVerificationNotice("");
  };

  const handleScrollToBooking = (e, arch) => {
    e.preventDefault();
    setSelectedArchitect(arch);
    setSelectedTime("");
    setFormError("");
    setIsBooked(false);
    resetVerification();
    const targetElement = document.getElementById("booking-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper function to handle individual EmailJS calls
  const sendSingleEmail = async (
    targetRecipient,
    booking,
    code,
    serviceId,
    templateId,
    publicKey,
  ) => {
    const recipientName =
      targetRecipient === "jujuba338788@gmail.com" ? "Admin" : booking.name;

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: targetRecipient,
            to_name: recipientName,
            email: booking.email,
            name: booking.name,
            from_name: booking.name,
            customer_name: booking.name,
            client_name: booking.name,
            full_name: booking.name,
            user_email: booking.email,
            user_name: booking.name,
            from_email: booking.email,
            reply_to: booking.email,
            admin_email: "jujuba338788@gmail.com",
            subject: "StudioDNA Verification Code",
            architect_name: selectedArchitect.name,
            appointment_date: booking.date,
            appointment_time: booking.time,
            verification_code: code,
            message: `Your StudioDNA appointment verification code is ${code}.`,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `EmailJS send failed (${response.status}): ${errorText || response.statusText}`,
      );
    }
  };

  // Sends two parallel emails: One to the dynamic user email and one to the static admin email
  const sendVerificationCode = async (booking, code) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const adminEmail = "jujuba338788@gmail.com";

    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "Email service is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      );
    }

    // Trigger parallel dispatches via Promise.all
    await Promise.all([
      sendSingleEmail(
        booking.email,
        booking,
        code,
        serviceId,
        templateId,
        publicKey,
      ),
      sendSingleEmail(
        adminEmail,
        booking,
        code,
        serviceId,
        templateId,
        publicKey,
      ),
    ]);

    console.info(
      "Both User and Admin verification emails sent successfully via EmailJS",
      {
        user_email: booking.email,
        admin_email: adminEmail,
      },
    );
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // 1. Empty field checks
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError("Please fill out your name and email address first.");
      return;
    }
    if (!selectedDate) {
      setFormError("Please select a future calendar date.");
      return;
    }
    if (!selectedTime) {
      setFormError("Please select an available 30-minute window slot.");
      return;
    }

    // 2. Strict email validation execution
    if (!validateRealEmail(formData.email)) {
      setFormError(
        "Please input a valid email address. Fake or dynamic test domains are blocked.",
      );
      return;
    }

    // 3. Conflict safeguard check
    if (isSlotTaken(selectedArchitect.id, selectedDate, selectedTime)) {
      setFormError(
        "This precise slot was just claimed! Please pick an alternate time or date.",
      );
      return;
    }

    // Save appointment details
    const newBooking = {
      architectId: selectedArchitect.id,
      date: selectedDate,
      time: selectedTime,
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
    };

    const code = String(Math.floor(100000 + Math.random() * 900000));

    try {
      setIsSendingCode(true);
      await sendVerificationCode(newBooking, code);
      setPendingBooking(newBooking);
      setVerificationCode(code);
      setVerificationInput("");
      setVerificationError("");
      setVerificationNotice(
        `A verification code has been sent to ${newBooking.email}.`,
      );
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    setVerificationError("");
    setVerificationNotice("");

    if (!verificationInput.trim()) {
      setVerificationError(
        "Please enter the verification code sent to your email.",
      );
      return;
    }

    if (verificationInput.trim() !== verificationCode) {
      setVerificationError(
        "That verification code is incorrect. Please check your email and try again.",
      );
      return;
    }

    if (
      isSlotTaken(
        pendingBooking.architectId,
        pendingBooking.date,
        pendingBooking.time,
      )
    ) {
      setVerificationError(
        "This slot was claimed before verification finished. Please choose another time.",
      );
      return;
    }

    setBookedSlots((prev) => [...prev, pendingBooking]);
    setFormData({ name: pendingBooking.name, email: pendingBooking.email });
    setSelectedDate(pendingBooking.date);
    setSelectedTime(pendingBooking.time);
    resetVerification();
    setIsBooked(true);
  };

  const getMinDateString = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  };

  // Splits the 6-digit verification input into individual boxes for display
  const otpDigits = Array.from({ length: 6 }, (_, i) => verificationInput[i] || "");

  return (
    <section id="meet" className="relative z-10 -mt-7 mb-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-20 bg-[#f5f2ea] rounded-3xl md:rounded-4xl text-neutral-800 space-y-12 md:space-y-24">
      {/* 1. Meet Our Architects Grid */}
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#ff7b00]">
            The Minds Behind The Vision
          </span>
          <h3 className="text-xl md:text-4xl font-serif font-medium uppercase mt-1 text-[#4f5d39]">
            Consult Our Architects
          </h3>
          <hr className="border-neutral-200 mb-6 md:mb-8 mt-1.5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {architects.map((arch, index) => (
            <div
              key={index}
              className="group overflow-hidden w-full sm:max-w-[290px]"
            >
              <div className="aspect-square overflow-hidden bg-neutral-100 grayscale-50 hover:grayscale-0 transition-all duration-500 ease-in-out">
                <img
                  src={arch.image}
                  alt={arch.name}
                  className="w-full h-80 sm:h-100 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-2 space-y-0.5">
                <h4 className="text-sm sm:text-base font-serif font-medium text-[#4f5d39] leading-tight">
                  {arch.name}
                </h4>
                <p className="text-[9px] sm:text-[11px] tracking-wide text-neutral-500 uppercase">
                  {arch.role}
                </p>
              </div>

              <button
                onClick={(e) => handleScrollToBooking(e, arch)}
                type="button"
                className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-3 text-[10px] sm:text-xs uppercase font-medium tracking-wider border border-[#4f5d39] text-[#4f5d39] bg-transparent hover:bg-[#4f5d39] hover:text-white active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer group/btn"
              >
                <span>Book a slot</span>
                <span className="text-sm font-semibold leading-none transform transition-transform duration-300 ease-in-out group-hover/btn:rotate-45">
                  +
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* 2. Interactive Booking Interface */}
      <div
        id="booking-section"
        className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
      >
        {/* Profile Summary Panel */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-8">
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ff7b00] mb-2">
              Let's Build Together
            </span>
            <h3 className="text-2xl md:text-3xl text-[#4f5d39] font-serif font-medium uppercase leading-tight">
              From Imagining To Real Concrete Form.
            </h3>
          </div>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            Great architecture doesn't start with blueprints; it starts with a
            conversation. We pride ourselves on being completely approachable,
            transparent, and genuinely excited about your ideas. No rigid
            formalities—just a friendly chat over coffee to see how we can bring
            your dream project to life.
          </p>

          {/* Trust Badges / Highlights */}
          <div className="space-y-3 pt-2 md:pt-4">
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aab992]/20 flex items-center justify-center text-[#aab992] font-bold text-xs mt-0.5">
                ✓
              </span>
              <span className="text-xs sm:text-sm font-medium">
                Zero obligation, 100% collaborative discovery call.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aab992]/20 flex items-center justify-center text-[#aab992] font-bold text-xs mt-0.5">
                ✓
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-700">
                Direct access to lead architects from day one.
              </span>
            </div>
          </div>

          {/* Calendar Selection Review Block */}
          <div className="relative p-4 bg-white border border-neutral-200 rounded-xl space-y-2 mt-4">
            <span className="absolute -top-2 left-3 bg-[#f5f2ea] px-2 text-[9px] font-mono uppercase tracking-widest text-neutral-400">
              Fig. 01 — Consultant
            </span>
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
              Reviewing Calendar For
            </p>
            <div className="flex items-center gap-3">
              <img
                src={selectedArchitect.image}
                alt=""
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <h4 className="font-serif font-medium text-[#4f5d39] text-sm sm:text-base">
                  {selectedArchitect.name}
                </h4>
                <p className="text-[10px] text-neutral-500 uppercase">
                  {selectedArchitect.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Booking Control Card */}
        <div className="lg:col-span-7 relative bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200 shadow-[0_1px_3px_rgba(35,43,26,0.06)] min-h-[460px] flex flex-col justify-center">
          {/* Registration corner ticks */}
          <span className="pointer-events-none absolute top-4 left-4 w-3 h-3 border-t border-l border-[#ff7b00]/50" />
          <span className="pointer-events-none absolute top-4 right-4 w-3 h-3 border-t border-r border-[#ff7b00]/50" />
          <span className="pointer-events-none absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#ff7b00]/50" />
          <span className="pointer-events-none absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#ff7b00]/50" />

          {!isBooked && !pendingBooking ? (
            <form
              onSubmit={handleBookingSubmit}
              noValidate
              className="space-y-7"
            >
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-neutral-200">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#ff7b00] mb-1.5">
                    Sheet R.01 — Reservation
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#4f5d39] leading-snug">
                    Schedule Your Consultation
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    30-minute session · claimed slots remain disabled across refreshes.
                  </p>
                </div>
                <span className="hidden sm:block shrink-0 font-mono text-[10px] text-neutral-300 tracking-wider mt-1">
                  01 / 03
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="group/field">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full text-sm px-0 py-2 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-[#4f5d39] focus:ring-0 transition-colors placeholder:text-neutral-300"
                  />
                </div>
                <div className="group/field">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full text-sm px-0 py-2 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-[#4f5d39] focus:ring-0 transition-colors placeholder:text-neutral-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                  Select a Future Date
                </label>
                <input
                  type="date"
                  min={getMinDateString()}
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedTime("");
                    setFormError("");
                  }}
                  className="w-full sm:w-1/2 text-sm px-0 py-2 bg-transparent border-0 border-b border-neutral-300 rounded-none focus:outline-none focus:border-[#4f5d39] focus:ring-0 transition-colors cursor-pointer"
                />
              </div>

              {/* Dynamic Time Slot Matrix */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  Available 30-Min Windows
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((time) => {
                    // Only check if slot is taken if a date has actually been picked
                    const taken = selectedDate
                      ? isSlotTaken(selectedArchitect.id, selectedDate, time)
                      : false;
                    const active = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={taken}
                        onClick={() => {
                          setSelectedTime(time);
                          if (formError) setFormError("");
                        }}
                        className={`relative py-2.5 px-2 text-[11px] text-center transition-all duration-200 font-medium rounded-md border ${
                          taken
                            ? "bg-neutral-50 text-neutral-300 border-neutral-200 cursor-not-allowed line-through"
                            : active
                              ? "bg-[#4f5d39] text-white border-[#4f5d39] shadow-sm"
                              : "bg-white text-neutral-600 border-neutral-200 hover:border-[#4f5d39]/60 hover:text-[#4f5d39]"
                        }`}
                      >
                        {taken ? "Booked" : time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Inline UI Error Text block */}
              {formError && (
                <div className="flex items-start gap-2.5 pl-3 py-2 border-l-2 border-red-400 bg-red-50/50 text-red-700 text-xs animate-fade-in">
                  <span>{formError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSendingCode}
                className="w-full text-center py-3.5 px-4 text-xs uppercase font-medium tracking-[0.15em] text-white bg-[#4f5d39] hover:bg-[#3d492c] transition-colors rounded-md shadow-sm active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSendingCode ? "Sending Code…" : "Send Verification Code"}
              </button>
            </form>
          ) : pendingBooking ? (
            <form
              onSubmit={handleVerificationSubmit}
              noValidate
              className="space-y-7"
            >
              <div className="text-center space-y-3 pb-5 border-b border-neutral-200">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#ff7b00]">
                  Sheet R.02 — Verification
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#4f5d39] font-medium">
                    Confirm Your Details
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-md mx-auto">
                    A code was sent to{" "}
                    <span className="text-neutral-800 font-medium">
                      {pendingBooking.email}
                    </span>
                    . Enter it below to lock in your appointment.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#f5f2ea]/60 border border-neutral-200 rounded-xl text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Architect</span>
                  <span className="text-neutral-800">{selectedArchitect.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Date</span>
                  <span className="text-neutral-800">{pendingBooking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Time Slot</span>
                  <span className="text-neutral-800">{pendingBooking.time}</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3 text-center">
                  Verification Code
                </label>
                {/* Hidden input captures actual typing; visual boxes reflect the value */}
                <div className="relative max-w-xs mx-auto">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={verificationInput}
                    onChange={(e) => {
                      setVerificationInput(
                        e.target.value.replace(/\D/g, "").slice(0, 6),
                      );
                      if (verificationError) setVerificationError("");
                      if (verificationNotice) setVerificationNotice("");
                    }}
                    aria-label="Verification code"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                  />
                  <div className="flex justify-center gap-2 pointer-events-none">
                    {otpDigits.map((digit, i) => (
                      <div
                        key={i}
                        className={`w-10 h-12 sm:w-11 sm:h-13 flex items-center justify-center rounded-md border text-base font-mono font-medium transition-colors ${
                          digit
                            ? "border-[#4f5d39] text-[#4f5d39] bg-[#4f5d39]/5"
                            : "border-neutral-300 text-neutral-300 bg-neutral-50"
                        } ${
                          i === verificationInput.length
                            ? "border-[#ff7b00] ring-1 ring-[#ff7b00]/40"
                            : ""
                        }`}
                      >
                        {digit || "·"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {verificationError && (
                <div className="flex items-start gap-2.5 pl-3 py-2 border-l-2 border-red-400 bg-red-50/50 text-red-700 text-xs animate-fade-in justify-center text-center">
                  <span>{verificationError}</span>
                </div>
              )}

              {verificationNotice && (
                <div className="flex items-start gap-2.5 pl-3 py-2 border-l-2 border-[#4f5d39] bg-[#4f5d39]/5 text-[#4f5d39] text-xs animate-fade-in justify-center text-center">
                  <span>{verificationNotice}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 text-center py-3.5 px-4 text-xs uppercase font-medium tracking-[0.15em] text-white bg-[#4f5d39] hover:bg-[#3d492c] transition-colors rounded-md shadow-sm active:scale-[0.99]"
                >
                  Verify & Confirm
                </button>
                <button
                  type="button"
                  disabled={isSendingCode}
                  onClick={async () => {
                    try {
                      setIsSendingCode(true);
                      await sendVerificationCode(
                        pendingBooking,
                        verificationCode,
                      );
                      setVerificationError("");
                      setVerificationNotice(
                        "A new verification code has been sent to your email.",
                      );
                    } catch (error) {
                      setVerificationNotice("");
                      setVerificationError(error.message);
                    } finally {
                      setIsSendingCode(false);
                    }
                  }}
                  className="flex-1 text-center py-3.5 px-4 text-xs uppercase font-medium tracking-[0.15em] text-[#4f5d39] bg-white border border-[#4f5d39] hover:bg-[#4f5d39]/5 transition-colors rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSendingCode ? "Sending…" : "Resend Code"}
                </button>
              </div>

              <button
                type="button"
                onClick={resetVerification}
                className="block text-center mx-auto text-[11px] text-neutral-400 underline underline-offset-2 hover:text-neutral-600 transition"
              >
                Edit booking details
              </button>
            </form>
          ) : (
            /* Booking Success Layout */
            <div className="text-center space-y-6 py-6">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#ff7b00]">
                Sheet R.03 — Confirmed
              </span>
              <div className="w-14 h-14 border border-[#4f5d39] rounded-full flex items-center justify-center mx-auto text-[#4f5d39] text-xl">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#4f5d39] font-medium">
                  Appointment Confirmed
                </h3>
                <p className="text-sm text-neutral-500 max-w-md mx-auto">
                  Hi <span className="text-neutral-800 font-medium">{formData.name}</span>,
                  your session with{" "}
                  <span className="text-neutral-800 font-medium">{selectedArchitect.name}</span>{" "}
                  is locked in.
                </p>
              </div>

              <div className="p-4 bg-[#f5f2ea]/60 border border-neutral-200 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Date</span>
                  <span className="text-neutral-800">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Time Slot</span>
                  <span className="text-neutral-800">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase tracking-wide">Sent To</span>
                  <span className="text-neutral-800">{formData.email}</span>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <a
                  href="https://meet.google.com/landing?hs=190&authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center py-3.5 px-7 text-xs uppercase font-medium tracking-[0.15em] text-white bg-[#ff8614] hover:bg-[#fa9230] transition-colors rounded-md shadow-sm cursor-pointer"
                >
                  Join Google Meet Channel
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsBooked(false);
                    setSelectedTime("");
                    setFormData({ name: "", email: "" });
                    setFormError("");
                    resetVerification();
                  }}
                  className="block text-center mx-auto text-[11px] text-neutral-400 underline underline-offset-2 hover:text-neutral-600 transition"
                >
                  Book another session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Meet;