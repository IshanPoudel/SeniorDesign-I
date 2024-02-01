import Image from "next/image";
import localFont from 'next/font/local';
import herosection_background from "../../images/herosection_background.png";

const regularPT = localFont({ src: './fonts/PT_Serif/PTSerif-Regular.ttf' })
const bolditalicPT = localFont({ src: './fonts/PT_Serif/PTSerif-BoldItalic.ttf' })


const HeroSection = () => {
  return (
    <div className="h-screen bg-black relative">
			<Image src={herosection_background} alt="background_image" className="h-full"></Image>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
			{/* <div className={bolditalicPT.className}> */}
					<h1 className="text-6xl font-bold">TradeMinds</h1><br></br>
			{/* </div> */}
			{/* <div className={regularPT.className}> */}
					<p className="text-lg">Empowering Traders and Researchers<br></br>Introducing TradeMinds Your Gateway to Intelligent Trading</p>
			{/* </div> */}
			</div>
		</div>
  );
};


export default HeroSection;