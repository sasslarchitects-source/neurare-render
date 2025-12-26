import "./globals.css";

export const metadata = {
  title: "Neurare",
  description: "Next.js App Router working correctly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
