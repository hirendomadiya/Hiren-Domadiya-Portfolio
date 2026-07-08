import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hiren Domadiya | Software Engineer | Full Stack Developer Portfolio",
  description: "Hiren Domadiya is a Software Engineer specializing in modern web development, scalable applications, full stack technologies, and innovative software solutions. Explore experience, projects, technical expertise, certifications, and professional achievements.",
  keywords: [
    "Hiren Domadiya",
    "Hiren Domadiya Software Engineer",
    "Hiren Domadiya Portfolio",
    "Hiren Domadiya Full Stack Developer",
    "Hiren Domadiya Developer",
    "Software Engineer Portfolio",
    "Full Stack Developer Portfolio",
    "Web Developer Portfolio",
    "Modern Software Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Frontend Developer",
    "Software Development",
    "Web Application Developer"
  ],
  authors: [{ name: "Hiren Domadiya" }],
  creator: "Hiren Domadiya",
  metadataBase: new URL("https://hirendomadiya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hirendomadiya.com",
    title: "Hiren Domadiya | Software Engineer | Full Stack Developer Portfolio",
    description: "Hiren Domadiya is a Software Engineer specializing in modern web development, scalable applications, full stack technologies, and innovative software solutions. Explore experience, projects, technical expertise, certifications, and professional achievements.",
    siteName: "Hiren Domadiya Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hiren Domadiya | Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiren Domadiya | Software Engineer | Full Stack Developer Portfolio",
    description: "Hiren Domadiya is a Software Engineer specializing in modern web development, scalable applications, full stack technologies, and innovative software solutions.",
    images: ["/og-image.jpg"],
    creator: "@hirendomadiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hirendomadiya.com/#person",
        "name": "Hiren Domadiya",
        "jobTitle": "Software Engineer",
        "image": "https://hirendomadiya.com/hiren-portrait.jpg",
        "url": "https://hirendomadiya.com",
        "email": "hirendomadiya@gmail.com",
        "description": "Hiren Domadiya is a Software Engineer specializing in modern web development, scalable applications, full stack technologies, and innovative software solutions.",
        "sameAs": [
          "https://linkedin.com/in/hirendomadiya",
          "https://github.com/hirendomadiya",
          "https://twitter.com/hirendomadiya"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hirendomadiya.com/#website",
        "url": "https://hirendomadiya.com",
        "name": "Hiren Domadiya Portfolio",
        "description": "Explore Hiren Domadiya's professional experience, technical expertise, achievements, and projects.",
        "publisher": {
          "@id": "https://hirendomadiya.com/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
