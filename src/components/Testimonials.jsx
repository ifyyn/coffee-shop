import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      content:
        "The best coffee I've ever had! The atmosphere is perfect for getting work done or catching up with friends.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Local Business Owner",
      content:
        "As someone who drinks coffee daily, I can confidently say R'Coffee stands above the rest. Their cold brew is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Food Blogger",
      content:
        "Not only is their coffee amazing, but their baristas are incredibly knowledgeable and friendly. A must-visit spot!",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-amber-50 p-8 rounded-lg shadow-md"
            >
              <div className="text-amber-500 mb-4">
                <FaQuoteLeft className="h-6 w-6" />
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={`https://source.unsplash.com/random/100x100/?portrait,${testimonial.id}`}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-amber-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-amber-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
