import Image from "next/image";
import localFont from "next/font/local";
import herosection_background from "../../images/herosection_background.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="h-screen bg-black relative">
      <Image
        src={herosection_background}
        alt="background_image"
        className="h-full"
      ></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className={montserrat.className}>
          <h1 className="text-6xl font-bold">TradeMinds</h1>
          <br></br>
        </div>
        <div className={montserrat.className}>
          <p className="text-lg">
            Empowering Traders and Researchers<br></br>Introducing TradeMinds
            Your Gateway to Intelligent Trading
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
