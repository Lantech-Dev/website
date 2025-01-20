import { Upload, Book, Shield, Wrench, Scale, Gamepad2 } from 'lucide-react';
import { NavItem } from './types';

export const navItems: NavItem[] = [
  {
    href: "https://docs.google.com/forms/d/14Sy6l_4l7MUQ2QdTSVzdEBdrnv45AH8LQCtAPVxL5V4/",
    icon: Upload,
    label: "Upload Game",
    isExternal: true
  },
  {
    href: "/slepstudios",
    icon: Gamepad2,
    label: "SLEP Studios"
  },
  {
    href: "/docs",
    icon: Book,
    label: "Documentation"
  },
  {
    href: "/privacy-policy",
    icon: Shield,
    label: "Privacy Policy"
  },
  {
    href: "/developer-tools",
    icon: Wrench,
    label: "Developer Tools"
  },
  {
    href: "/license",
    icon: Scale,
    label: "License"
  }
];