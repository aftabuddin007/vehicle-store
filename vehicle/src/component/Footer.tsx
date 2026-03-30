// components/Footer.tsx
'use client'
import { IUser } from '@/model/user.model';
import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaYoutube,
  FaStore,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdCopyright, MdDashboard } from "react-icons/md";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// User Footer Component - Defined outside
const UserFooter = ({ currentYear, socialLinks, quickLinks, supportLinks }: any) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company Info Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          VehicleStore
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Delivering excellence with innovative solutions and exceptional service. 
          We are committed to providing the best experience for our customers.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <MdLocationOn className="text-blue-400" />
            <span>123 Business Ave, Suite 100<br />San Francisco, CA 94105</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <MdPhone className="text-blue-400" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <MdEmail className="text-blue-400" />
            <span>info@vehiclestore.com</span>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 relative">
          Quick Links
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></span>
        </h3>
        <ul className="space-y-2">
          {quickLinks.map((link: any) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Support Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 relative">
          Support
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></span>
        </h3>
        <ul className="space-y-2">
          {supportLinks.map((link: any) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 relative">
          Newsletter
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-2"></span>
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          Subscribe to get special offers, free giveaways, and exclusive deals.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm transition-all"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium text-sm transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Social Links Section */}
    <div className="border-t border-gray-800 mt-8 pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex space-x-4">
          {socialLinks.map((social: any) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 p-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="text-gray-400 text-sm">
          © {currentYear} VehicleStore. All rights reserved.
        </div>
      </div>
    </div>
  </div>
);

// Vendor Footer Component - Defined outside
const VendorFooter = ({ currentYear, vendorQuickLinks, vendorSupportLinks }: any) => (
  <div className="border-t border-gray-700/50 bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Vendor Store Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaStore className="text-purple-400" />
            <h3 className="text-sm font-semibold">Your Store</h3>
          </div>
          <p className="text-gray-400 text-xs">
            Manage your products, track orders, and grow your business with VehicleStore.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {vendorQuickLinks.map((link: any) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Seller Support</h3>
          <ul className="space-y-1">
            {vendorSupportLinks.map((link: any) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 mt-6 pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-gray-500">
            <MdCopyright size={12} />
            <span>{currentYear} VehicleStore Vendor Panel</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>Vendor Dashboard v2.0.1</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>Made with</span>
            <FaHeart size={10} className="text-red-500 animate-pulse" />
            <span>for our sellers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Admin Footer Component - Defined outside
const AdminFooter = ({ currentYear, adminQuickLinks, adminSupportLinks }: any) => (
  <div className="border-t border-gray-700/50 bg-gray-900/30 backdrop-blur-sm">
    <div className="px-6 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
        
        {/* Left Side - Copyright */}
        <div className="flex items-center gap-1 text-gray-400">
          <MdCopyright size={12} />
          <span>{currentYear} Admin Panel. All rights reserved.</span>
        </div>

        {/* Center - Admin Stats */}
        <div className="flex gap-3 text-gray-500">
          <span className="flex items-center gap-1">
            <MdDashboard size={12} />
            System Online
          </span>
          <span>|</span>
          <span>v3.0.1</span>
        </div>

        {/* Right Side - Made with Love */}
        <div className="flex items-center gap-1 text-gray-400">
          <span>Made with</span>
          <FaHeart size={10} className="text-red-500 animate-pulse" />
          <span>by VehicleStore Admin</span>
        </div>
      </div>

      {/* Admin Quick Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-3 pt-2 border-t border-gray-700/30">
        {adminQuickLinks.map((link: any) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
          >
            {link.name}
          </Link>
        ))}
        {adminSupportLinks.map((link: any) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-500 hover:text-blue-400 transition-colors text-xs"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// Main Footer Component
const Footer = ({ user }: { user: IUser }) => {
  const currentYear = new Date().getFullYear();
  const role = user?.role;
  const isUser = role === "user";
  const isVendor = role === "vendor";
  const isAdmin = role === "admin";

  // Links definitions
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const vendorQuickLinks = [
    { name: "Dashboard", href: "/vendor/dashboard" },
    { name: "Products", href: "/vendor/products" },
    { name: "Orders", href: "/vendor/orders" },
    { name: "Analytics", href: "/vendor/analytics" },
    { name: "Store Settings", href: "/vendor/settings" },
  ];

  const vendorSupportLinks = [
    { name: "Seller Guide", href: "/vendor/guide" },
    { name: "Payout Info", href: "/vendor/payouts" },
    { name: "Shipping Policy", href: "/vendor/shipping" },
    { name: "Terms for Sellers", href: "/vendor/terms" },
  ];

  const adminQuickLinks = [
    { name: "Dashboard", href: "/admin" },
    { name: "Users", href: "/admin/users" },
    { name: "Vendors", href: "/admin/vendors" },
    { name: "Products", href: "/admin/products" },
    { name: "Orders", href: "/admin/orders" },
  ];

  const adminSupportLinks = [
    { name: "System Settings", href: "/admin/settings" },
    { name: "Analytics", href: "/admin/analytics" },
    { name: "Reports", href: "/admin/reports" },
    { name: "Backup", href: "/admin/backup" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <FaYoutube size={20} />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {isUser && <UserFooter 
        currentYear={currentYear}
        socialLinks={socialLinks}
        quickLinks={quickLinks}
        supportLinks={supportLinks}
      />}
      {isVendor && <VendorFooter 
        currentYear={currentYear}
        vendorQuickLinks={vendorQuickLinks}
        vendorSupportLinks={vendorSupportLinks}
      />}
      {isAdmin && <AdminFooter 
        currentYear={currentYear}
        adminQuickLinks={adminQuickLinks}
        adminSupportLinks={adminSupportLinks}
      />}
    </footer>
  );
};

export default Footer;