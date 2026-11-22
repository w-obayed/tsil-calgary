import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tsil-calgary.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/landscaping",
    "/irrigation",
    "/commercial-landscaping",
    "/lightscape",
    "/products",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-of-use",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/privacy") || route.startsWith("/terms") ? 0.3 : 0.8,
  }));
}
