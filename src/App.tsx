import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import Certifications from '@/pages/Certifications'
import CertHub from '@/pages/CertHub'
import Training from '@/pages/Training'
import Exam from '@/pages/Exam'
import Review from '@/pages/Review'
import Flashcards from '@/pages/Flashcards'
import Stats from '@/pages/Stats'
import Definitions from '@/pages/Definitions'
import Roadmap from '@/pages/Roadmap'
import Onboarding from '@/pages/Onboarding'
import CourseSheet from '@/pages/CourseSheet'
import { useTheme } from '@/hooks/useTheme'

export default function App() {
  useTheme()
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/cert/:certId" element={<CertHub />} />
        <Route path="/cert/:certId/train" element={<Training />} />
        <Route path="/cert/:certId/exam" element={<Exam />} />
        <Route path="/cert/:certId/review" element={<Review />} />
        <Route path="/cert/:certId/sheet/:sheetId" element={<CourseSheet />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/definitions" element={<Definitions />} />
        <Route path="/glossary" element={<Definitions />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<div className="card">Page non trouvée.</div>} />
      </Route>
    </Routes>
  )
}
