
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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

  const engagementData = [
    { platform: 'Instagram', value: 85, color: '#E1306C' },
    { platform: 'LinkedIn', value: 68, color: '#8B5CF6' },
    { platform: 'YouTube', value: 72, color: '#F43F5E' },
  ];

  const contentPerformance = [
    { type: 'Posts', reach: 45000, engagement: 3200 },
    { type: 'Stories', reach: 28000, engagement: 2100 },
    { type: 'Reels', reach: 75000, engagement: 5800 },
    { type: 'IGTV', reach: 15000, engagement: 1200 },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Real Results, Real Growth
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our data-driven approach delivers measurable results. Here's how we've helped our clients grow their social media presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">8.2%</div>
              <p className="text-xs text-pink-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-rose-100 border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Monthly Reach</CardTitle>
              <Eye className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">180K</div>
              <p className="text-xs text-purple-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-100 to-pink-100 border-rose-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Comments</CardTitle>
              <MessageCircle className="h-4 w-4 text-rose-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">4.5K</div>
              <p className="text-xs text-rose-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +31% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Examples Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
            Examples of Engagement Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 mb-4">
                  <Eye className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">25K</div>
                    <div className="text-sm text-gray-600">Profile Views</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Monthly profile views increased by 300% after optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-lg p-4 mb-4">
                  <Heart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1.2K</div>
                    <div className="text-sm text-gray-600">Likes per Post</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Average likes per post doubled with better content strategy</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600">180</div>
                    <div className="text-sm text-gray-600">Comments per Post</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">Community engagement improved with consistent posting</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-gray-800">Profile Views Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <AreaChart data={followerGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3e8ff" />
                  <XAxis dataKey="month" stroke="#9333ea" fontSize={12} />
                  <YAxis stroke="#9333ea" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fdf2f8', 
                      border: '1px solid #f3e8ff',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#e1306c" 
                    fill="url(#colorGradient)" 
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e1306c" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-gray-800">Content Performance</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <BarChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3e8ff" />
                  <XAxis dataKey="type" stroke="#9333ea" fontSize={12} />
                  <YAxis stroke="#9333ea" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fdf2f8', 
                      border: '1px solid #f3e8ff',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar dataKey="reach" fill="url(#barGradient1)" />
                  <Bar dataKey="engagement" fill="url(#barGradient2)" />
                  <defs>
                    <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e1306c" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.7}/>
                    </linearGradient>
                    <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0.7}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-lg sm:text-xl text-gray-800 text-center">Platform Engagement Rates</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 md:order-1">
                <ResponsiveContainer width="100%" height={200} className="sm:h-[250px]">
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ platform, value }) => `${platform}: ${value}%`}
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
                {engagementData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">{item.platform}</span>
                    </div>
                    <span className="text-gray-700 font-bold text-sm sm:text-base">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Statistics;
