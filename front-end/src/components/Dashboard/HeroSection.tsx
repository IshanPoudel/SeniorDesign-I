import Image from "next/image";
import herosection_background from "../../images/herosection_background.png";

const HeroSection = () => {
  return (
    <div className="h-screen bg-black relative">
      <Image
        src={herosection_background}
        alt="background_image"
        className="h-full"
      ></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-6xl font-bold font-montserrat">TradeMinds</h1>
        <br></br>
        <p className="text-lg font-montserrat">
          Empowering Traders and Researchers<br></br>Introducing TradeMinds Your
          Gateway to Intelligent Trading
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
