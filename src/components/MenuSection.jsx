const MenuSection = () => {
  const coffeeMenu = [
    {
      id: 1,
      name: "Espresso",
      description:
        "Strong black coffee made by forcing steam through ground coffee beans",
      price: 3.5,
      category: "hot",
      images:
        "https://images.unsplash.com/photo-1622240506921-042a4e71c172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk foam",
      price: 4.5,
      category: "hot",
      images:
        "https://plus.unsplash.com/premium_photo-1669374537636-518629de3b85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZmZlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Iced Latte",
      description: "Espresso with cold milk and ice",
      price: 4.75,
      category: "cold",
      images:
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZmZlfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Americano",
      description: "Espresso shots topped with hot water",
      price: 3.75,
      category: "hot",
      images:
        "https://images.unsplash.com/photo-1595574444306-e235cef5ea37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Cold Brew",
      description: "Slow-steeped coffee for a smoother taste",
      price: 4.25,
      category: "cold",
      images:
        "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvZmZlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: 5.0,
      category: "hot",
      images:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZmZlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Our Coffee Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully crafted coffee drinks made with premium beans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMenu.map((item) => (
            <div
              key={item.id}
              className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-amber-900">
                    {item.name}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button className="mt-4 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
