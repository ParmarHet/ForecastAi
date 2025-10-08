import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Users, BarChart as ChartBar, Target, Sparkles, Brain, Rocket } from 'lucide-react';

function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Algorithms',
      description: 'Machine learning models trained on millions of data points for maximum accuracy',
      delay: '0s'
    },
    {
      icon: Rocket,
      title: 'Instant Results',
      description: 'Get comprehensive forecasts within seconds of uploading your data',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and data protection for your sensitive business information',
      delay: '0.4s'
    },
    {
      icon: Sparkles,
      title: 'Interactive Analytics',
      description: 'Beautiful dashboards with drill-down capabilities and customizable reports',
      delay: '0.6s'
    }
  ];

  const stats = [
    { value: '99.2%', label: 'Forecast Accuracy', delay: '0s' },
    { value: '2.3s', label: 'Average Processing Time', delay: '0.1s' },
    { value: '50K+', label: 'Businesses Served', delay: '0.2s' },
    { value: '$2.8M', label: 'Cost Savings Generated', delay: '0.3s' }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                AI-Powered Demand Forecasting
              </h1>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                Upload your sales data and get accurate forecasts for better planning. 
                Transform your business decisions with enterprise-grade AI insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link
                to="/upload"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/upload"
                className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-300"
              >
                Forecast Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 floating-animation"></div>
      <div className="fixed top-1/3 right-8 w-3 h-3 bg-slate-400 rounded-full opacity-40 floating-animation" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-1/4 left-8 w-1 h-1 bg-blue-300 rounded-full opacity-80 floating-animation" style={{animationDelay: '3s'}}></div>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: stat.delay}}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose ForecastAI?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intuitive design to deliver 
              the most accurate demand forecasts in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-500 animate-fade-in-up hover-lift"
                style={{animationDelay: feature.delay}}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600 rounded-xl group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl floating-animation"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using AI to optimize their demand planning.
            </p>
            <Link
              to="/upload"
              className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Start Forecasting Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;