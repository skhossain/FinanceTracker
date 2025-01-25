const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FinanceTracker. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  