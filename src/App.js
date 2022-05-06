import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Student from "./Components/Student";
import Dashboard from "./Components/DashboadAI/Dashboard";
import ModuleDashboard from "./Components/DashboadAI/ModuleDashbord";
import Popup from "./Components/DashboadAI/Popup";
import Corporate from "./Components/Corporate/Corporate";
import Dprojects from "./Components/Corporate/Dprojects";
import Projectsdetails from "./Components/Corporate/Projectsdetails";
import Addprojects from "./Components/Corporate/Addproject";
import Profile from "./Components/Corporate/Profile";
import Setting from "./Components/Corporate/Setting";
import ProjectDedit from "./Components/Corporate/ProjectDedit";
import ProjectD from "./Components/Corporate/ProjectD";
import CommonSubmission from "./Components/Corporate/CommonSubmission";
import Submissionbookmark from "./Components/Corporate/SubmissionBookmark";
import SubmissionCheck from "./Components/Corporate/SubmissionCheck";
import Report from "./Components/Corporate/Report";
import Schedule from "./Components/Corporate/Schedule";
import Deletepopup from "./Components/Corporate/Deletepopup";

import Explore from "./Components/DashboadAI/Explore/Explore";
import Achievements from "./Components/DashboadAI/LeaderBoard/Achievements";
import CommonProgress from "./Components/DashboadAI/LeaderBoard/CommonProgress";
import ProgressBars from "./Components/DashboadAI/LeaderBoard/ProgressBars";
import ProgressBefore from "./Components/DashboadAI/LeaderBoard/ProgressBefore";
import Sidenav from "./Components/Sidenav";
import Community from "./Components/DashboadAI/Community/Community";
import IndustryProject from "./Components/DashboadAI/Community/IndustryProject";
import Disscussion from "./Components/DashboadAI/Community/Discussion";
import Dash from "./Components/DashboadAI/DashBoard/Dash";
import UnlockexpDash from "./Components/DashboadAI/DashBoard/UnlockexpDash";
import OrderConfirmation from "./Components/DashboadAI/DashBoard/OrderConfirmation";
import MyPayment from "./Components/DashboadAI/MyPayment";
import Invoice from "./Components/DashboadAI/Invoice";
import LinkPopup from "./Components/DashboadAI/LinkPopup";
import Package from "./Components/DashboadAI/DashBoard/Package";
import Feedback from "./Components/DashboadAI/Feedback";

function App() {
  return (
    <>
      {/* <Deletepopup /> */}
      {/* <Schedule /> */}
      {/* <Report /> */}
      {/* <SubmissionCheck /> */}
      {/* <Submissionbookmark /> */}
      {/* <CommonSubmission /> */}
      {/* <Setting /> */}
      {/* <Profile /> */}
      {/* <Addprojects /> */}
      {/* <ProjectD /> */}
      {/* <ProjectDedit /> */}
      {/* <Projectsdetails /> */}
      {/* <Dprojects /> */}
      {/* <Corporate /> */}

      {/* <Sidenav /> */}

      {/* <Dashboard />/ */}
      {/* <Popup /> */}
      {/* <Explore /> */}
      {/* <Achievements /> */}
      {/* <CommonProgress /> */}
      {/* <ProgressBars /> */}
      {/* <ProgressBefore /> */}
      {/* <Community /> */}
      {/* <IndustryProject /> */}
      {/* <Disscussion /> */}
      {/* <Dash /> */}
      {/* <UnlockexpDash /> */}
      {/* <OrderConfirmation /> */}
      {/* <MyPayment /> */}
      {/* <Invoice /> */}
      {/* <LinkPopup /> */}
      {/* <Package /> */}
      {/* <Feedback /> */}

      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/Cororate" component={Corporate} />
        <Route path="/Projectsdetails" component={Projectsdetails} />
        <Route path="/Addprojects" component={Addprojects} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Setting" component={Setting} />
        <Route path="/ProjectDedit" component={ProjectDedit} />
        <Route path="/ProjectD" component={ProjectD} />
        <Route path="/SubmissionCheck" component={SubmissionCheck} />
        <Route path="/Submissionbookmark" component={Submissionbookmark} />
        <Route path="/Report" component={Report} />
        <Route path="/Schedule" component={Schedule} />

        <Route path="/Student" component={Student} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/ModuleDashboard" component={ModuleDashboard} />
        <Route path="/Explore" component={Explore} />
        <Route path="/Achievements" component={Achievements} />
        <Route path="/ProgressBars" component={ProgressBars} />
        <Route path="/Community" component={Community} />
        <Route path="/IndustryProject" component={IndustryProject} />
      </Switch>
    </>
  );
}

export default App;
