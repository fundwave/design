import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { COMPONENT_GUIDES, ROUTES } from "./constants/routes";

import ContentWrapper from "./components/ContentWrapper";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ComponentHome from "./pages/ComponentHome";
import Home from "./pages/Home";
import DesignChecklistPage from "./pages/design/DesignChecklistPage";
import DesignColors from "./pages/design/DesignColors";
import DesignComponents from "./pages/design/DesignComponents";
import DesignIcons from "./pages/design/DesignIcons";
import DesignStates from "./pages/design/DesignStates";
import DesignTokens from "./pages/design/DesignTokens";
import DesignTypography from "./pages/design/DesignTypography";
import ConsistentColors from "./pages/laws/ConsistentColors";
import FittsLaw from "./pages/laws/FittsLaw";
import HicksLaw from "./pages/laws/HicksLaw";
import JakobsLaw from "./pages/laws/JakobsLaw";
import LawOfProximity from "./pages/laws/LawOfProximity";
import PredictableInteractions from "./pages/laws/PredictableInteractions";
import ReusablePatterns from "./pages/laws/ReusablePatterns";
import SymmetryAndAlignment from "./pages/laws/SymmetryAndAlignment";
import TypographyHierarchy from "./pages/laws/TypographyHierarchy";
import Whitespace from "./pages/laws/Whitespace";
import DesignQuiz from "./pages/quiz";

const allComponents: Record<string, React.ComponentType> = {
  [ROUTES.HICKS_LAW]: HicksLaw,
  [ROUTES.LAW_OF_PROXIMITY]: LawOfProximity,
  [ROUTES.FITTS_LAW]: FittsLaw,
  [ROUTES.JAKOBS_LAW]: JakobsLaw,
  [ROUTES.REUSABLE_PATTERNS]: ReusablePatterns,
  [ROUTES.PREDICTABLE_INTERACTIONS]: PredictableInteractions,
  [ROUTES.SYMMETRY_AND_ALIGNMENT]: SymmetryAndAlignment,
  [ROUTES.WHITESPACE]: Whitespace,
  [ROUTES.CONSISTENT_COLORS]: ConsistentColors,
  [ROUTES.TYPOGRAPHY_HIERARCHY]: TypographyHierarchy,
  [ROUTES.DS_TOKENS]: DesignTokens,
  [ROUTES.DS_TYPOGRAPHY]: DesignTypography,
  [ROUTES.DS_COLORS]: DesignColors,
  [ROUTES.DS_COMPONENTS]: DesignComponents,
  [ROUTES.DS_STATES]: DesignStates,
  [ROUTES.DS_ICONS]: DesignIcons,
  [ROUTES.DS_CHECKLIST]: DesignChecklistPage
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.DESIGN_QUIZ} element={<DesignQuiz />} />

          {/* Guide Routes (UX Laws and Design System) */}
          {COMPONENT_GUIDES.map((guide) => (
            <Route key={guide.path} path={guide.path} element={<ComponentHome config={guide} />} />
          ))}

          {/* Dynamic Content Routes */}
          {COMPONENT_GUIDES.map((guide, guideIndex) =>
            guide.items.map((item) => {
              const Component = allComponents[item.path];
              const nextGuide = guideIndex < COMPONENT_GUIDES.length - 1 ? COMPONENT_GUIDES[guideIndex + 1] : undefined;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <ContentWrapper currentPath={item.path} contentList={guide.items} currentGuide={guide} nextGuide={nextGuide}>
                      <Component />
                    </ContentWrapper>
                  }
                />
              );
            })
          )}
          </Routes>
          <Footer />
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
