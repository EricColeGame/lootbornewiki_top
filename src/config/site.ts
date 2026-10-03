export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Lootborne Wiki",
  shortName: "Lootborne",
  logoText: "L",
  tagline: "Builds, Items, Gear & Guides for the Dark Fantasy Idle RPG",
  description: "Lootborne Wiki offers detailed builds, item guides, gear strategies, boss tips, and progression help for the dark fantasy idle RPG Lootborne players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lootbornewiki.top",
  supportEmail: "support@lootbornewiki.top",
  gameUrl: "https://store.steampowered.com/app/4335620/Lootborne",
  heroVideoId: "8pHdWk7zJmE", // Lootborne - Official Reveal Trailer
  social: {
    discord: "https://steamcommunity.com/app/4335620/",
    youtube: "https://www.youtube.com/watch?v=8pHdWk7zJmE",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
