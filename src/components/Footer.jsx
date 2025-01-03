import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center space-y-4">
        {/* Address */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold underline">Contact</h2>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2 text-xl" />
            <p>
              111/2 Kawlar Jame Mosjid Road, Ashkona,
              <br />
              (Near Hajj Camp) Dakshinkhan, Dhaka-1230
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-xl" />
            <p>+880-1234-567890</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-xl" />
            <p>info@study-lab.com</p>
          </div>
        </div>

        {/* Footer Credits */}
        <div>
          <p className="text-sm">&copy; 2025 Study Lab - Northern University Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
