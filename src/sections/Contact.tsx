import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-black/30 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In <span className="text-primary neon-text">Touch</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
            Interested in working together or have a question? Drop me a message
            below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Email
                    </p>
                    <a
                      href="mailto:issaa0525@gemail.com"
                      className="text-white hover:text-primary transition-colors font-medium"
                    >
                      issaa0525@gemail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 text-secondary">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Location
                    </p>
                    <p className="text-white font-medium">AL-Zerqa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">
                    Name
                  </label>
                  <input
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(10,102,194,0.3)] hover:shadow-[0_0_25px_rgba(10,102,194,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
