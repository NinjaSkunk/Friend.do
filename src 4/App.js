import Header from './components/Header'
import Calendar from './components/Calendar'
import Test from './components/Test'
import Landing from './components/Landing'
import PlanMeetup from './components/PlanMeetup'
import PlanMeetup2 from './components/PlanMeetup2'
import DaySchedule from './components/DaySchedule'
import { Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
	  <Route exact path="/test" component={Test} />
	  <Route exact path="/plan" component={PlanMeetup2} />
	  <Route exact path="/day" component={DaySchedule} />
    </div>
  );
}

export default App;
