import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Cwb from "./components/Cwb";
import HeroCards from "@/components/hero-cards";
import PageNotFound from "./components/PageNotFound";
import ComingSoonPage from "./components/coming-soon-page";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ComingSoonPage />} />
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/cwb" element={<Cwb />} />
            <Route path="/hc" element={<HeroCards />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
      <SpeedInsights />
    </div>
  );
}

export default App;
