import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date();
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
  ];
  return pages.map((url) => ({
    url,
    lastModified: date,
  }));
}
