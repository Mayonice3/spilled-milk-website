import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react";

const Statistics = () => {
  const followerGrowthData = [
    { month: 'Jan', followers: 5000, engagement: 2.1 },
    { month: 'Feb', followers: 7500, engagement: 2.8 },
    { month: 'Mar', followers: 12000, engagement: 3.5 },
    { month: 'Apr', followers: 18000, engagement: 4.2 },
    { month: 'May', followers: 25000, engagement: 4.8 },
    { month: 'Jun', followers: 35000, engagement: 5.5 },
  ];

  const engagementData = [
    { platform: 'Instagram', value: 85, color: '#E91E63' },
    { platform: 'Twitter', value: 70, color: '#1DA1F2' },
    { platform: 'TikTok', value: 92, color: '#000000' },
    { platform: 'LinkedIn', value: 68, color: '#0077B5' },
  ];

  const contentPerformance = [
    { type: 'Posts', reach: 45000, engagement: 3200 },
    { type: 'Stories', reach: 28000, engagement: 2100 },
    { type: 'Reels', reach: 75000, engagement: 5800 },
    { type: 'IGTV', reach: 15000, engagement: 1200 },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            Real Results, Real Growth
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
            Our data-driven approach delivers measurable results. Here's how we've helped our clients grow their social media presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-stone-800">+2.4M</div>
              <p className="text-xs text-amber-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +47% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-stone-50 to-stone-100 border-stone-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-stone-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-stone-800">8.2%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">Monthly Reach</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-stone-800">1.8M</div>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-stone-600">Comments</CardTitle>
              <MessageCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-stone-800">45.2K</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +31% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-stone-800">Follower Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <AreaChart data={followerGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="followers" 
                    stroke="#d97706" 
                    fill="#fed7aa" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg sm:text-xl text-stone-800">Content Performance</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                <BarChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="type" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar dataKey="reach" fill="#d97706" />
                  <Bar dataKey="engagement" fill="#78716c" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-lg sm:text-xl text-stone-800 text-center">Platform Engagement Rates</CardTitle>
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
                      className="text-xs sm:text-sm"
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
                  <div key={index} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-stone-700 text-sm sm:text-base">{item.platform}</span>
                    </div>
                    <span className="text-stone-600 font-semibold text-sm sm:text-base">{item.value}%</span>
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
