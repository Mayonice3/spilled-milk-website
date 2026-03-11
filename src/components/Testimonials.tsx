import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      company: "@sarahstyles",
      content: "Working with this team transformed my Instagram presence completely. I went from 5K to 150K followers in just 6 months, and my engagement rates are through the roof!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=1a3a8f&color=fff"
    },
    {
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      company: "TechFlow Solutions",
      content: "The analytics and insights provided helped us understand our audience better than ever. Our conversion rate from social media increased by 300% in just 4 months.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Marcus+Chen&background=1a3a8f&color=fff"
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      company: "Bella's Bistro",
      content: "Our restaurant's social media was practically non-existent before. Now we have a thriving community of food lovers and our bookings have doubled!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=1a3a8f&color=fff"
    },
    {
      name: "David Kim",
      role: "Fitness Coach",
      company: "@fitwithdavid",
      content: "The content strategy they developed for me was phenomenal. My workout videos now regularly get 50K+ views, and I've built an amazing fitness community.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=David+Kim&background=1a3a8f&color=fff"
    },
    {
      name: "Lisa Thompson",
      role: "Beauty Brand Owner",
      company: "Glow Beauty Co.",
      content: "Not only did they grow our followers, but they helped us build genuine relationships with our customers. Our brand loyalty has never been stronger.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Lisa+Thompson&background=1a3a8f&color=fff"
    },
    {
      name: "Alex Parker",
      role: "Travel Blogger",
      company: "@wanderwithAlex",
      content: "The team's expertise in travel content is unmatched. They helped me secure brand partnerships worth over $50K in my first year working with them.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Alex+Parker&background=1a3a8f&color=fff"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#1a3a8f]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our satisfied clients have to say about their growth journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#1a3a8f] opacity-60" />
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#1a3a8f] text-[#1a3a8f]" />
                  ))}
                </div>

                <p className="text-black/80 mb-6 leading-relaxed italic text-sm sm:text-base font-medium">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover border-2 border-[#1a3a8f]/30"
                  />
                  <div>
                    <div className="font-bold text-black text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-black/70 font-medium">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm text-[#1a3a8f] font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border-2 border-white/20 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-black/70 mb-6 text-sm sm:text-base px-4">
              Let us help you achieve the same remarkable results. Start your growth journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1a3a8f] hover:bg-[#1a3a8f]/90 text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl">
                Get Started Now
              </button>
              <button className="border-2 border-[#1a3a8f] text-[#1a3a8f] hover:bg-[#1a3a8f] hover:text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final component export
export default Testimonials;
