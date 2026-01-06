import "./globals.css";
import Header from "@/components/header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-6">
        <Header />
        {children}
      </body>
    </html>
  );
}
