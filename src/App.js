
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import FacultyList from './components/AboutUs/Faculty/FacultyList';
import FacultyProfile from './components/AboutUs/Faculty/FacultyProfile';
import CollegeHistory from './components/AboutUs/CollegeHistory';
import Facilities from './components/AboutUs/Facilities';
import MissionVision from './components/AboutUs/MissionVision';
import Department from './components/Academics/Departments/Department';
import DepartmentList from './components/Academics/Departments/DepartmentList';
import Projects from './components/Academics/Research/Projects';
import Publication from './components/Academics/Research/Publication';
import ResearchAreas from './components/Academics/Research/ResearchAreas';
import AdmissionsOverview from './components/Admissions/AdmissionsOverview';
import ApplicationForm from './components/Admissions/ApplicationForm';
import Programs from './components/Admissions/Programs';
import ContactInfo from './components/Contact/ContactInfo';
import InquiryForm from './components/Contact/InquiryForm';
import EventsCalendar from './components/NewsEvents/EventsCalendar';
import LatestNews from './components/NewsEvents/LatestNews';
import CampusActivities from './components/StudentLife/CampusActivities';
import StudentOrganizations from './components/StudentLife/StudentOrganizations';
import SportsRecreation from './components/StudentLife/SportsRecreation';


function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions-overview" element={<AdmissionsOverview />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/inquiry-form" element={<InquiryForm />} />
          <Route path="/events-calendar" element={<EventsCalendar />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/campus-activities" element={<CampusActivities />} />
          <Route path="/student-organizations" element={<StudentOrganizations />} />
          <Route path="/sports" element={<SportsRecreation />} />
          <Route path="/faculty-list" element={<FacultyList />} />
          <Route path="/faculty-profile" element={<FacultyProfile />} />
          <Route path="/college-history" element={<CollegeHistory />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department-list" element={<DepartmentList />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/research-areas" element={<ResearchAreas />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
