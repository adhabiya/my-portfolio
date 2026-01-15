import React, { useState, useRef, memo } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

/* ---------------- Animation Variants ---------------- */

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ---------------- Status Message ---------------- */

const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
        status === "success"
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
          : status === "error"
          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
      }`}
    >
      {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
      {status === "success" && <CheckCircle2 className="w-4 h-4" />}
      {status === "error" && <AlertCircle className="w-4 h-4" />}
      {message}
    </motion.div>
  );
};

/* ---------------- Main Component ---------------- */

function ContactComponent() {
  const formRef = useRef();

  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormState({
      status: "loading",
      message: "Sending, please wait...",
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormState({
            status: "success",
            message: "Thank you! Your message has been sent successfully.",
          });
          formRef.current.reset();
          setTimeout(
            () => setFormState({ status: "idle", message: "" }),
            5000
          );
        },
        () => {
          setFormState({
            status: "error",
            message: "Failed to send message. Please try again later.",
          });
          setTimeout(
            () => setFormState({ status: "idle", message: "" }),
            5000
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-xl"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground flex items-center gap-3">
            <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
            Contact
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Whether you want to discuss a project, ask a question, or just say
            hello — I’d love to hear from you.
          </p>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <a
            href="mailto:adhabiyaummer8841@gmail.com"
            className="flex items-center gap-2 text-primary text-lg font-medium hover:underline"
          >
            <Mail className="w-5 h-5" />
            adhabiyaummer8841@gmail.com
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={formContainerVariants}
          className="w-full p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-2xl shadow space-y-4"
        >
          <AnimatePresence>
            {formState.status !== "idle" && (
              <motion.div variants={itemVariants}>
                <StatusMessage
                  status={formState.status}
                  message={formState.message}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={itemVariants}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={formState.status === "loading"}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={formState.status === "loading"}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              required
              disabled={formState.status === "loading"}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              disabled={formState.status === "loading"}
              className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2"
            >
              {formState.status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default memo(ContactComponent);
