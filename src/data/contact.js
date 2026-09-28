// ============================================================
// Codoodle — contact channels (icon buttons only)
// ============================================================
import { BRAND } from "./brand.js";

// Only the three channels we actually want front-and-centre as icon buttons.
export const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    sub: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "Message us",
    href: BRAND.whatsapp,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    sub: BRAND.instagramHandle,
    href: BRAND.instagram,
    external: true,
  },
];