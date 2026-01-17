import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { lazy, Suspense } from "react";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FeeStructure from "./pages/admissions/FeeStructure";
import FaqPage from "./pages/admissions/FaqPage";

// Lazy loaded pages - About
const OurSchool = lazy(() => import("./pages/about/OurSchool"));
const MissionVision = lazy(() => import("./pages/about/MissionVision"));
const PrincipalMessage = lazy(() => import("./pages/about/PrincipalMessage"));
const ChairmanMessage = lazy(() => import("./pages/about/ChairmanMessage"));
const DirectorMessage = lazy(() => import("./pages/about/DirectorMessage"));
const ManagementCommittee = lazy(() => import("./pages/about/ManagementCommittee"));

// Academics
const PrePrimary = lazy(() => import("./pages/academics/PrePrimary"));
const MiddleSecondary = lazy(() => import("./pages/academics/MiddleSecondary"));
const SeniorSecondary = lazy(() => import("./pages/academics/SeniorSecondary"));
const Faculty = lazy(() => import("./pages/academics/Faculty"));

// Infrastructure
const OurCampus = lazy(() => import("./pages/infrastructure/OurCampus"));
const InnovationLabs = lazy(() => import("./pages/infrastructure/InnovationLabs"));
const SportsFacilities = lazy(() => import("./pages/infrastructure/SportsFacilities"));
const Library = lazy(() => import("./pages/infrastructure/Library"));

// Admissions
const AdmissionProcess = lazy(() => import("./pages/admissions/AdmissionProcess"));

// Media pages
const Gallery = lazy(() => import("./pages/media/Gallery"));
const VideoGallery = lazy(() => import("./pages/media/VideoGallery"));
const MediaAwards = lazy(() => import("./pages/media/MediaAwards"));
const Testimonials = lazy(() => import("./pages/media/Testimonials"));

// Legal
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/legal/Terms"));

const ContactUs = lazy(() => import("./pages/ContactUs"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* About Us */}
              <Route path="/our-school" element={<OurSchool />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/principal-message" element={<PrincipalMessage />} />
              <Route path="/chairman-message" element={<ChairmanMessage />} />
              <Route path="/director-message" element={<DirectorMessage />} />
              <Route path="/management-committee" element={<ManagementCommittee />} />

              {/* Academics */}
              <Route path="/curriculum/pre-primary" element={<PrePrimary />} />
              <Route path="/curriculum/middle-secondary" element={<MiddleSecondary />} />
              <Route path="/curriculum/senior-secondary" element={<SeniorSecondary />} />
              <Route path="/faculty" element={<Faculty />} />

              {/* Infrastructure */}
              <Route path="/infrastructure/our-campus" element={<OurCampus />} />
              <Route path="/infrastructure/innovation-labs" element={<InnovationLabs />} />
              <Route path="/infrastructure/sports-facilities" element={<SportsFacilities />} />
              <Route path="/infrastructure/library" element={<Library />} />

              {/* Admissions */}
              <Route path="/admission-process" element={<AdmissionProcess />} />
              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/faq" element={<FaqPage />} />

              {/* Media */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/media-awards" element={<MediaAwards />} />
              <Route path="/testimonials" element={<Testimonials />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Contact */}
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
