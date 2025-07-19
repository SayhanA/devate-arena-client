import LogoSvg from "@/assets/svgs/LogoSvg";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-background text-text-lite">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-text-dark">
            <LogoSvg /> Community Debate Arena
          </h2>
          <p className="text-sm mt-1">
            Battle of Opinions. Speak, Listen, Grow.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
          <a href="/about" className="hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="/debates" className="hover:text-blue-500 transition-colors">
            Debates
          </a>
          <a href="/create" className="hover:text-blue-500 transition-colors">
            Start Debate
          </a>
          <a href="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-right">
          <p>© {new Date().getFullYear()} Community Debate Arena</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
