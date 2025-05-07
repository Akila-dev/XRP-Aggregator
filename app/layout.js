import "./globals.css";
import "./app.css";

export const metadata = {
  title: "XRP/USDT Aggregator",
  // description: "Shop from our official merch store",
};

import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="noise" />
        <div className="min-h-screen body">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
