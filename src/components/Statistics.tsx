
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Heart, MessageCircle, Eye } from "lucide-react";

const Statistics = () => {
  const followerGrowthData = [
    { month: 'Jan', views: 15000, engagement: 2.1 },
    { month: 'Feb', views: 22500, engagement: 2.8 },
    { month: 'Mar', views: 36000, engagement: 3.5 },
    { month: 'Apr', views: 54000, engagement: 4.2 },
    { month: 'May', views: 75000, engagement: 4.8 },
    { month: 'Jun', views: 105000, engagement: 5.5 },
  ];

  const contentPerformance = [
    { type: 'Posts', reach: 45000, engagement: 3200 },
    { type: 'Stories', reach: 28000, engagement: 2100 },
    { type: 'Reels', reach: 75000, engagement: 5800 },
    { type: 'IGTV', reach: 15000, engagement: 1200 },
  ];

  const performanceImages = [
    { src: "/placeholder.svg", alt: "Instagram analytics showing profile views growth", title: "Profile Views Analytics" },
    { src: "/placeholder.svg", alt: "Instagram engagement metrics and likes performance", title: "Engagement Metrics" },
    { src: "/placeholder.svg", alt: "Instagram reach and impressions data", title: "Reach & Impressions" },
    { src: "/placeholder.svg", alt: "Instagram stories performance analytics", title: "Stories Performance" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4" data-aos="fade-up" data-aos-duration="1500">
            Real Results, Real Growth
          </h2>
          <p className="text-lg sm:text-xl text-black/70 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-duration="1500">
            Our data-driven approach delivers measurable results. Here's how we've helped our clients grow their social media presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-right">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-[#1a3a8f]" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#1a3a8f]">8.2%</div>
              <p className="text-xs text-[#1a3a8f] flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-right" data-aos-delay="300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Monthly Reach</CardTitle>
              <Eye className="h-4 w-4 text-[#1a3a8f]" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#1a3a8f]">180K</div>
              <p className="text-xs text-[#1a3a8f] flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-right" data-aos-delay="600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Comments</CardTitle>
              <MessageCircle className="h-4 w-4 text-[#1a3a8f]" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#1a3a8f]">4.5K</div>
              <p className="text-xs text-[#1a3a8f] flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +31% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Examples Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-6">
            Examples of Engagement Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-left">
              <CardContent className="p-6">
                <div className="bg-[#1a3a8f]/5 rounded-lg p-4 mb-4">
                  <Eye className="h-8 w-8 text-[#1a3a8f] mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1a3a8f]">25K</div>
                    <div className="text-sm text-black">Profile Views</div>
                  </div>
                </div>
                <p className="text-sm text-black/70 text-center">Monthly profile views increased by 300% after optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-left" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-[#1a3a8f]/5 rounded-lg p-4 mb-4">
                  <Heart className="h-8 w-8 text-[#1a3a8f] mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1a3a8f]">1.2K</div>
                    <div className="text-sm text-black">Likes per Post</div>
                  </div>
                </div>
                <p className="text-sm text-black/70 text-center">Average likes per post doubled with better content strategy</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-left" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-[#1a3a8f]/5 rounded-lg p-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-[#1a3a8f] mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1a3a8f]">180</div>
                    <div className="text-sm text-black">Comments per Post</div>
                  </div>
                </div>
                <p className="text-sm text-black/70 text-center">Community engagement improved with consistent posting</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="ig_screenshots" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-black">Profile Views Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <AreaChart data={followerGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a3a8f20" />
                  <XAxis dataKey="month" stroke="#1a3a8f" fontSize={12} />
                  <YAxis stroke="#1a3a8f" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #1a3a8f',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#1a3a8f" 
                    fill="url(#colorGradient)" 
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1a3a8f" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1a3a8f" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-black">Content Performance</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <BarChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a3a8f20" />
                  <XAxis dataKey="type" stroke="#1a3a8f" fontSize={12} />
                  <YAxis stroke="#1a3a8f" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #1a3a8f',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar dataKey="reach" fill="#1a3a8f" />
                  <Bar dataKey="engagement" fill="#1a3a8f80" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Screenshots Carousel */}
        <Card className="p-4 sm:p-6 bg-white border-2 border-[#1a3a8f]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-duration="500">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-lg sm:text-xl text-black text-center">Instagram Performance Screenshots</CardTitle>
            <p className="text-sm text-black/70 text-center mt-2">Direct screenshots from Instagram analytics showing actual results</p>
          </CardHeader>
          <CardContent className="px-0">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {performanceImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="border-2 border-[#1a3a8f]/20 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-lg bg-[#1a3a8f]/5 flex items-center justify-center mb-3">
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <h4 className="text-sm font-semibold text-black text-center">{image.title}</h4>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white border-[#1a3a8f] text-[#1a3a8f] hover:bg-[#1a3a8f]/10" />
              <CarouselNext className="bg-white border-[#1a3a8f] text-[#1a3a8f] hover:bg-[#1a3a8f]/10" />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Statistics;
