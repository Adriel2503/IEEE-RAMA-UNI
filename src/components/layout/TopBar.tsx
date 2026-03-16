import { Instagram, Linkedin, Facebook } from "lucide-react";
import navigationData from "@/data/navigation.json";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Linkedin,
  Facebook,
};

export default function TopBar() {
  return (
    <div className="hidden bg-[#1a1a1a] text-gray-400 md:block relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
        {/* IEEE global links */}
        <div className="flex items-center gap-4">
          {navigationData.topBar.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {navigationData.social.map((social) => {
            const Icon = socialIcons[social.icon];
            return Icon ? (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={social.platform}
              >
                <Icon className="h-4 w-4" />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
