import { Sidebar } from "./components/templates/Sidebar";
import "./globals.css";

import { Roboto } from "next/font/google";
import { Header } from "./components/molecules/Header";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} flex min-h-screen`}>
        <>
          <Sidebar />
          <section className="w-full p-6">
            <Header />
            {children}
          </section>
        </>
      </body>
    </html>
  );
}
