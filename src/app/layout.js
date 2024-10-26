import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Hamsi | Trendy Fashion for Every Occasion",
  description:
    "Welcome to Hamsi, your go-to destination for trendy, unique fashion and accessories! Discover a carefully curated selection of styles that cater to every occasion, from casual outings to elegant events. Our boutique features exclusive pieces designed to help you express your individuality. Shop with us for the latest trends, high-quality materials, and exceptional customer service. Join our community of fashion lovers and elevate your wardrobe with Hamsi today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
