import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hiren Domadiya Portfolio",
    short_name: "Hiren Portfolio",
    description: "Hiren Domadiya is a Software Engineer specializing in modern web development, scalable applications, and full stack technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
