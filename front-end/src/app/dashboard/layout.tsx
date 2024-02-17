import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "../../components/Dashboard/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeMinds",
  description:
    "TradeMinds is an innovative machine learning-based stock trading platform designed to provide traders with cutting-edge tools for predicting stock activity. Our platform harnesses the power of artificial intelligence to help users make informed investment decisions and gain a competitive edge in the market. With TradeMinds, you can upload and compare your own custom predictive models, enabling you to uncover valuable insights and forecast stock trends with greater accuracy. Whether you're an experienced trader or just starting out, TradeMinds equips you with the tools and intelligence to navigate the dynamic world of stock trading. Join TradeMinds today and unlock the potential of AI in your trading strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
