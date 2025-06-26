
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your social media goals. 
            Get in touch for a free consultation and custom growth strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-medium text-stone-800">Email Us</div>
                  <div className="text-stone-600">hello@socialgrowth.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-medium text-stone-800">Call Us</div>
                  <div className="text-stone-600">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-medium text-stone-800">Visit Us</div>
                  <div className="text-stone-600">123 Growth Street, Digital City, DC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="font-medium text-stone-800">Business Hours</div>
                  <div className="text-stone-600">Mon - Fri: 9AM - 6PM EST</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-stone-800 mb-3">What to Expect:</h4>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  Free 30-minute consultation call
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  Custom growth strategy proposal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  Detailed timeline and pricing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                  No obligation or hidden fees
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Start Your Growth Journey</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Business/Brand Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Current Follower Count
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors">
                    <option value="">Select range</option>
                    <option value="0-1k">0 - 1,000</option>
                    <option value="1k-10k">1,000 - 10,000</option>
                    <option value="10k-50k">10,000 - 50,000</option>
                    <option value="50k+">50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    What are your goals? *
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Tell us about your social media goals and what you'd like to achieve..."
                  ></textarea>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                  Get My Free Consultation
                </Button>

                <p className="text-sm text-stone-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
