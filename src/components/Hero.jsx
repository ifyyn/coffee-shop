const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Crafting the Perfect{" "}
              <span className="text-amber-700">Coffee</span> Experience
            </h1>
            <p className="text-lg text-gray-700">
              Discover our handcrafted coffee blends made from the finest beans
              around the world.
            </p>
            <div className="flex space-x-4">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Order Now
              </button>
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                View Menu
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvZmZlfGVufDB8fDB8fHww"
                alt="Coffee"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
