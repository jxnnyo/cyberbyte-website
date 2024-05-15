import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date();
  const baseUrl = "https://cyberbyte.software"
  const pages = [
    "/",
    "/about",
    "/contact",
    "/projects",
    "/projects/clean-room-sensors",
    "/projects/compare-and-recycle",
    "/projects/cyberworks",
    "/projects/handtec",
    "/projects/living-pillars",
    "/projects/merchant-recycling",
    "/projects/price-tracking",
    "/projects/plant-monitoring",
  ];
  return pages.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: date,
  }));
}
