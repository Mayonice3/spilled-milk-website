
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
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      company: "TechFlow Solutions",
      content: "The analytics and insights provided helped us understand our audience better than ever. Our conversion rate from social media increased by 300% in just 4 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      company: "Bella's Bistro",
      content: "Our restaurant's social media was practically non-existent before. Now we have a thriving community of food lovers and our bookings have doubled!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Fitness Coach",
      company: "@fitwithdavid",
      content: "The content strategy they developed for me was phenomenal. My workout videos now regularly get 50K+ views, and I've built an amazing fitness community.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "Beauty Brand Owner",
      company: "Glow Beauty Co.",
      content: "Not only did they grow our followers, but they helped us build genuine relationships with our customers. Our brand loyalty has never been stronger.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Alex Parker",
      role: "Travel Blogger",
      company: "@wanderwithAlex",
      content: "The team's expertise in travel content is unmatched. They helped me secure brand partnerships worth over $50K in my first year working with them.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their growth journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-stone-50 border-stone-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-amber-600 opacity-20" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-stone-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-stone-800">{testimonial.name}</div>
                    <div className="text-sm text-stone-600">{testimonial.role}</div>
                    <div className="text-sm text-amber-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-stone-600 mb-6">
              Let us help you achieve the same remarkable results. Start your growth journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started Now
              </button>
              <button className="border border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
