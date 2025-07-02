
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, TrendingUp, Users, Camera, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Instagram className="h-8 w-8 text-pink-500" />,
      title: "Instagram Growth",
      description: "Organic follower growth, engagement strategies, and content optimization for maximum reach.",
      features: ["Hashtag Strategy", "Content Planning", "Story Optimization", "Reels Creation"],
      gradient: "from-pink-100 to-purple-100",
      border: "border-pink-200"
    },
    {
      icon: <Camera className="h-8 w-8 text-rose-500" />,
      title: "Content Creation",
      description: "Professional content that resonates with your audience and drives engagement.",
      features: ["Visual Design", "Copywriting", "Video Content", "Brand Consistency"],
      gradient: "from-rose-100 to-pink-100",
      border: "border-rose-200"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-pink-600" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your social media performance and ROI.",
      features: ["Performance Tracking", "Audience Analysis", "Competitor Research", "Growth Reports"],
      gradient: "from-pink-100 to-purple-100",
      border: "border-pink-200"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Management",
      description: "Build and nurture an engaged community around your brand.",
      features: ["Daily Engagement", "Comment Management", "DM Responses", "Community Events"],
      gradient: "from-purple-100 to-rose-100",
      border: "border-purple-200"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-rose-600" />,
      title: "Growth Strategy",
      description: "Comprehensive growth strategies tailored to your business goals.",
      features: ["Market Analysis", "Competitor Study", "Growth Planning", "ROI Optimization"],
      gradient: "from-rose-100 to-pink-100",
      border: "border-rose-200"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            We offer comprehensive social media solutions to help your brand thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`bg-gradient-to-br ${service.gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.border} border-2`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-800 font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-xs sm:text-sm text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm sm:text-base font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-600 to-rose-500 hover:from-pink-600 hover:via-purple-700 hover:to-rose-600 text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
