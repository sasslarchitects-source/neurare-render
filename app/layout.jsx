export const metadata = {
  title: "Neurare Render",
  description: "3D Render AI Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
