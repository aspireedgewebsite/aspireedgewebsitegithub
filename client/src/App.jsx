import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext.jsx";
import Layout from "./components/Layout.jsx";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Solution from "./pages/Solution.jsx";
import Software from "./pages/Software.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Marketing from "./pages/Marketing.jsx";
import Integration from "./pages/Integration.jsx";
import Consulting from "./pages/Consulting.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import SpecializedPrograms from "./pages/SpecializedPrograms.jsx";
import BI from "./pages/BI.jsx";
import AAI from "./pages/AAI.jsx";
import Demand from "./pages/Demand.jsx";
import Testing from "./pages/Testing.jsx";
import Privacy from "./pages/Privacy.jsx";
import Business from "./pages/Business.jsx";
import Cyber from "./pages/Cyber.jsx";
import Full from "./pages/Full.jsx";
import Data from "./pages/Data.jsx";
import Internet from "./pages/Internet.jsx";
import Cloud from "./pages/Cloud.jsx";
import ML from "./pages/ML.jsx";
import AI from "./pages/AI.jsx";
import UI from "./pages/UI.jsx";
import Embedded from "./pages/Embedded.jsx";
import Auto from "./pages/Auto.jsx";
import Digital from "./pages/Digital.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import Financial from "./pages/Financial.jsx";
import HR from "./pages/HR.jsx";
import Termcondition from "./pages/Termcondition.jsx";
import Privacypolicy from "./pages/Privacypolicy.jsx";
import Careers from "./pages/Careers.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/software" element={<Software />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/specialized-programs" element={<SpecializedPrograms />} />
          <Route path="/bi" element={<BI />} />
          <Route path="/aai" element={<AAI />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/business" element={<Business />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/full" element={<Full />} />
          <Route path="/data" element={<Data />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/ml" element={<ML />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/ui" element={<UI />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/terms-conditions" element={<Termcondition />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
