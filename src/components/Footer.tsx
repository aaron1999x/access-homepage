import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SocialLink, ContactInfo } from '../../utils/types';

export const socialLinks: SocialLink[] = [
  { href: '/', ariaLabel: 'LinkedIn', icon: Linkedin },
  { href: '/', ariaLabel: 'Blog', icon: Twitter },
  { href: '/', ariaLabel: 'Facebook', icon: Facebook },
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, title: 'EMAIL US', content: 'info@volcanic.com', isLink: true },
  { icon: Phone, title: 'GET IN TOUCH', content: 'UK: 0161 217 1517' },
  {
    icon: MapPin,
    title: 'FIND US',
    content: 'Dale House Floor 8, Tiviot Dale, Stockport, SK1 1TB',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#3b3f4a] text-white py-8">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 md:space-y-0 lg:gap-2 gap-8 ">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Get Social</span>
            <div className="flex space-x-2">
              {socialLinks.map(({ href, ariaLabel, icon: Icon }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  aria-label={ariaLabel}
                  className="text-white hover:bg-primary bg-gray-500 rounded-full p-2"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 lg:border-l-[1px] border-gray-50">
            {contactInfo.map(({ icon: Icon, title, content, isLink }) => (
              <div
                key={title}
                className="flex flex-col items-center space-y-2 md:w-[250px] "
              >
                <Icon size={32} />
                <span className="text-sm">{title}</span>
                {isLink ? (
                  <a href={`mailto:${content}`} className="text-sm">
                    {content}
                  </a>
                ) : (
                  <span className="text-sm">{content}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
