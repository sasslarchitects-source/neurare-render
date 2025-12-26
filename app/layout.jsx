import "./globals.css";

export const metadata = {
  title: "Neurare",
  description: "Architecture & Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
