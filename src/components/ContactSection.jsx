const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>
                  Jl. Pelor Mas Raya No.III, Kekalik Jaya, Kec. Sekarbela, Kota
                  Mataram, Nusa Tenggara Bar. 83126
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p>Phone: 085964385273</p>
                <p>Email: fathularifin477@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
