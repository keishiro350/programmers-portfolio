import "./globals.css";

export const metadata = {
  title: "Krizhelle Anne N. Ramos | Programmer Portfolio",
  description: "Programmer portfolio of Krizhelle Anne N. Ramos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}