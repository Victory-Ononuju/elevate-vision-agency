import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Play, Video, Film, Mail, 
  Phone, MapPin, Camera, Share2, UserCircle, Heart,
  CheckCircle, Zap, Award, Users, ChevronRight,
  MessageCircle, Send, Globe
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Elevate Vision</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-purple-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full text-center font-medium"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Elevate Vision</span>
            </div>
            <p className="text-gray-400 text-sm">
              Elevating brands through creative digital experiences. We create stunning websites, 
              AI-powered advert videos, and professional video edits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <UserCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Website Creation</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">AI Video Adverts</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Video Editing</Link></li>
              <li><Link to="/services" className="hover:text-purple-400 transition-colors">Brand Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>helloelevatevision@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+2347056951052</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>F.CT. Abuja Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Elevate Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Home Page Component
function HomePage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Creation',
      description: 'Custom websites that captivate your audience and drive results. From landing pages to e-commerce.',
      link: '/services'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'AI Video Adverts',
      description: 'Cutting-edge AI-generated promotional videos that tell your brand story effectively.',
      link: '/services'
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing for commercials, social media, YouTube, and brand promotions.',
      link: '/services'
    }
  ];

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Website',
      title: 'Tech Startup Landing Page',
      description: 'Modern landing page with conversion optimization'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'AI Video',
      title: 'Product Launch Campaign',
      description: 'AI-generated promotional video series'
    },
    {
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
      category: 'Video Edit',
      title: 'Fashion Brand Commercial',
      description: 'High-end commercial video editing'
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop',
      category: 'Website',
      title: 'E-commerce Platform',
      description: 'Full-featured online store design'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Fully Visible */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          ></div>
          {/* Very light overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-purple-500/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-14 shadow-2xl border border-white/40"
          >
            <span className="inline-block px-4 py-2 bg-purple-100/80 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-6">
              🚀 Digital & Creative Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Elevating Brands Through
              <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 bg-clip-text text-transparent">
                Creative Digital Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-10 font-medium">
              We create stunning websites, AI-powered advert videos, and professional video edits 
              that help businesses grow and stand out in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="group bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all flex items-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start a Project</span>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {[
              { label: 'Projects' },
              { label: "Customer's Satisfaction" },
              { label: 'Happy Clients' },
              { label: 'Brand Elevated' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/40">
                <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 text-sm font-medium">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              What We Do Best
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your brand thrive in the modern world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-600/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 text-sm font-medium">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped brands achieve their goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-purple-300 text-sm font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all"
            >
              See More Projects <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-600 text-sm font-medium">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                We Deliver Excellence
              </h2>
              <p className="text-gray-600 mb-8">
                Our team combines creativity with technical expertise to deliver results that exceed expectations.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="w-6 h-6" />, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
                  { icon: <Award className="w-6 h-6" />, title: 'Premium Quality', desc: 'Industry-leading standards in every project' },
                  { icon: <Users className="w-6 h-6" />, title: 'Dedicated Support', desc: 'Personal attention throughout the process' },
                  { icon: <CheckCircle className="w-6 h-6" />, title: 'Results-Driven', desc: 'Strategies focused on your business goals' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '150+', label: 'Projects' },
                    { number: '98%', label: 'Satisfaction' },
                    { number: '50+', label: 'Clients' },
                    { number: '24/7', label: 'Support' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                      <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-200/50 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's work together to create something amazing. Get in touch and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all flex items-center space-x-2"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/2347056951052"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:border-purple-600 transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-purple-600 text-sm font-medium">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              We Are Elevate Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A creative digital agency passionate about helping businesses grow through 
              innovative websites, AI-powered videos, and compelling visual storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to transform how businesses connect with their audiences, 
                  Elevate Vision has grown from a small creative studio to a full-service digital agency.
                </p>
                <p>
                  We combine cutting-edge technology with artistic creativity to deliver solutions 
                  that not only look stunning but also drive real business results.
                </p>
                <p>
                  Our team of designers, developers, and video specialists work collaboratively 
                  to bring your brand's vision to life across all digital platforms.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-200/50 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that elevate their brand, 
                engage their audience, and accelerate their growth in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-100 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted creative digital agency, known for delivering 
                exceptional results that transform businesses and set new industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Innovation', desc: 'Embracing new technologies and creative approaches' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Excellence', desc: 'Delivering premium quality in every project' },
              { icon: <Users className="w-6 h-6" />, title: 'Collaboration', desc: 'Working closely with clients as partners' },
              { icon: <Award className="w-6 h-6" />, title: 'Integrity', desc: 'Honest, transparent, and ethical practices' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Services Page Component
function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website Creation',
      description: 'Custom websites designed to captivate your audience and drive conversions.',
      features: [
        'Business websites',
        'Portfolio websites',
        'Landing pages',
        'E-commerce websites',
        'Responsive design',
        'SEO optimization'
      ],
      color: 'from-purple-600 to-purple-800',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'AI Video Advert Creation',
      description: 'Cutting-edge AI-generated promotional videos that tell your brand story.',
      features: [
        'AI-generated videos',
        'Product advert videos',
        'Social media ads',
        'Brand storytelling',
        'Quick turnaround',
        'Cost-effective'
      ],
      color: 'from-purple-700 to-purple-900',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop'
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: 'Video Editing',
      description: 'Professional video editing services for all your content needs.',
      features: [
        'Commercial editing',
        'Social media reels',
        'YouTube editing',
        'Brand promotions',
        'Color grading',
        'Sound design'
      ],
      color: 'from-purple-600 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-purple-600 text-sm font-medium">Our Services</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              What We Offer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to help your business thrive online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-white to-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-8">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all shadow-lg`}
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss your project and find the perfect solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all"
            >
              Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Portfolio Page Component
function PortfolioPage() {
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'website',
      title: 'Tech Startup Landing Page',
      description: 'Modern landing page with conversion optimization',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'video',
      title: 'Product Launch Campaign',
      description: 'AI-generated promotional video series',
      technologies: ['AI Video', 'After Effects', 'Premiere Pro']
    },
    {
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
      category: 'editing',
      title: 'Fashion Brand Commercial',
      description: 'High-end commercial video editing',
      technologies: ['Premiere Pro', 'DaVinci Resolve', 'After Effects']
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop',
      category: 'website',
      title: 'E-commerce Platform',
      description: 'Full-featured online store design',
      technologies: ['Shopify', 'Liquid', 'JavaScript']
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      category: 'video',
      title: 'Social Media Ad Series',
      description: 'Engaging short-form video content',
      technologies: ['AI Video', 'CapCut', 'Premiere Pro']
    },
    {
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
      category: 'editing',
      title: 'YouTube Channel Package',
      description: 'Complete video editing for content creator',
      technologies: ['Premiere Pro', 'After Effects', 'Photoshop']
    },
    {
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      category: 'website',
      title: 'Restaurant Website',
      description: 'Beautiful website with online ordering',
      technologies: ['WordPress', 'WooCommerce', 'PHP']
    },
    {
      image: 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=600&h=400&fit=crop',
      category: 'video',
      title: 'Corporate Brand Video',
      description: 'Professional corporate storytelling',
      technologies: ['AI Video', 'Premiere Pro', 'Motion Graphics']
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'video', label: 'AI Videos' },
    { id: 'editing', label: 'Video Editing' }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-purple-600 text-sm font-medium">Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped brands achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-purple-300 text-sm font-medium capitalize">{item.category}</span>
                      <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-purple-500/80 text-white px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Want to See More?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              We have many more projects to showcase. Let's discuss your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all"
            >
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-purple-600 text-sm font-medium">Contact Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your brand? Get in touch and let's discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition-colors"
                        placeholder="+234 700 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Creation</option>
                        <option value="ai-video">AI Video Adverts</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Whether you have a question about our services, 
                  pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-600">helloelevatevision@gmail.com</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-600">+2347056951052</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm WAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-600">F.CT. Abuja Nigeria</p>
                    <p className="text-gray-500 text-sm">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="text-gray-900 font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-100 transition-all">
                    <Camera className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-100 transition-all">
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-100 transition-all">
                    <UserCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-100 transition-all">
                    <Heart className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/2347056951052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:bg-green-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
