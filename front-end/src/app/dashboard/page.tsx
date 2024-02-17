import React from "react";
import HeroSection from "../../components/Dashboard/HeroSection";
import StockCharts from "../../components/Dashboard/StockCharts";
import Contact from "../../components/Dashboard/Contact";
import MLRanking from "../../components/Dashboard/MLranking";

const Dashboard = () => {
  // Implement your component logic here

  return (
    <main>
      <HeroSection />
      <MLRanking />
      <StockCharts />
      <Contact />
    </main>
  );
};

export default Dashboard;
