import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, TrendingUp, Users, Camera, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Instagram className="h-8 w-8 text-pink-500" />,
      title: "Instagram Growth",
      description: "Organic follower growth, engagement strategies, and content optimization for maximum reach.",
      features: ["Hashtag Strategy", "Content Planning", "Story Optimization", "Reels Creation"]
    },
    {
      icon: <Twitter className="h-8 w-8 text-blue-500" />,
      title: "Twitter Marketing",
      description: "Build your Twitter presence with targeted campaigns and community engagement.",
      features: ["Tweet Scheduling", "Thread Strategy", "Community Building", "Trend Analysis"]
    },
    {
      icon: <Camera className="h-8 w-8 text-purple-500" />,
      title: "Content Creation",
      description: "Professional content that resonates with your audience and drives engagement.",
      features: ["Visual Design", "Copywriting", "Video Content", "Brand Consistency"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your social media performance and ROI.",
      features: ["Performance Tracking", "Audience Analysis", "Competitor Research", "Growth Reports"]
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Community Management",
      description: "Build and nurture an engaged community around your brand.",
      features: ["Daily Engagement", "Comment Management", "DM Responses", "Community Events"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: "Growth Strategy",
      description: "Comprehensive growth strategies tailored to your business goals.",
      features: ["Market Analysis", "Competitor Study", "Growth Planning", "ROI Optimization"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
            We offer comprehensive social media solutions to help your brand thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-stone-200">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-stone-50 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl text-stone-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <p className="text-stone-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-xs sm:text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors text-sm sm:text-base">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
