import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="max-w-[720px] mx-auto px-5 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold tracking-tight text-[var(--bv-text)] mb-2"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm font-medium text-[var(--bv-text-3)] mb-8"
      >
        Have a project in mind? Let's build something great together.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[var(--bv-text-2)] mb-1.5">
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bv-surface)] border border-white/10 text-sm text-[var(--bv-text)] placeholder:text-[var(--bv-text-3)] transition-colors focus:outline-none focus:border-[var(--bv-blue)] focus:ring-1 focus:ring-[var(--bv-blue)]"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[var(--bv-text-2)] mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bv-surface)] border border-white/10 text-sm text-[var(--bv-text)] placeholder:text-[var(--bv-text-3)] transition-colors focus:outline-none focus:border-[var(--bv-blue)] focus:ring-1 focus:ring-[var(--bv-blue)]"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[var(--bv-text-2)] mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl bg-[var(--bv-surface)] border border-white/10 text-sm text-[var(--bv-text)] placeholder:text-[var(--bv-text-3)] transition-colors focus:outline-none focus:border-[var(--bv-blue)] focus:ring-1 focus:ring-[var(--bv-blue)] resize-y"
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-full bg-[var(--bv-blue)] text-white text-sm font-semibold transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : isSubmitSuccessful ? "Sent! Thank you." : "Send message"}
        </motion.button>
      </motion.form>
    </section>
  );
}
