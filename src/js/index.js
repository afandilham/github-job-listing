// Components import
import './components/Navbar';
import './components/Header';
import './components/About';

// CSS import
import '../styles/style.css';

// Image import
import hero from "../img/hero.png";
import profile from "../img/profile.jpg";

// MVC import
import JobLists from "./models/JobLists";
import * as jobsView from "./views/JobListsView";
import { elements } from "./views/base";

/**
 * JobLists controller
 * */ 

// Global state
const state = {};

const JobsListsController = async () => {
  // Get description and location values from input
  const queryDescription = jobsView.inputDescription();
  const queryLocation = jobsView.inputLocation();
  
  if (queryDescription && queryLocation) {
    state.search = new JobLists(queryDescription, queryLocation);
    
    // Clear input and content for prepare
    jobsView.clearInput();
    jobsView.clearContent();
    try {
      // Search for jobs
      await state.search.getJobs();

      // Render results on View
      jobsView.renderJobs(state.search.result);
    } catch (error) {
      console.error(error);
    }
  }
} 

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  JobsListsController();
});

// ==================================

