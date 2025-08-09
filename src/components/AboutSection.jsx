const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlfGVufDB8fDB8fHww"
              alt="Coffee Shop"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg w-3/4">
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Since 2010
              </h3>
              <p className="text-gray-700">Serving the finest coffee in town</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-900">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2010, R'Coffee started as a small coffee cart in
              downtown. Our passion for quality coffee and dedication to
              customer experience helped us grow into the beloved coffee shop we
              are today.
            </p>
            <p className="text-gray-700">
              We source our beans directly from sustainable farms around the
              world and roast them in-house to bring you the freshest, most
              flavorful coffee experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-amber-900">100+</h3>
                <p className="text-gray-600 text-sm">Coffee Varieties</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-amber-900">10+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-amber-900">5000+</h3>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-amber-900">3</h3>
                <p className="text-gray-600 text-sm">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
