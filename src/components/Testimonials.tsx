import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "HomePlate has given me the opportunity to share my family recipes and earn from my cooking skills. I love being my own boss!",
      author: "Priya Sharma",
      role: "Home Chef, Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "The food quality and taste is amazing. It's like having multiple moms cooking for you! Much better than restaurant food.",
      author: "Rahul Verma",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "As a working mom, I can now earn extra income doing what I love. The platform is so easy to use!",
      author: "Anjali Desai",
      role: "Home Chef, Pune",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by chefs and customers alike
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it - hear from our community
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                    <div className="ml-4">
                      <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}