// Components 
import './components/Navbar';
import './components/Header';
import './components/About';

// CSS 
import '../styles/style.css';

// Image 
import hero from "../img/hero.png";
import profile from "../img/profile.jpg";

import JobLists from "./models/JobLists";
import * as jobsView from "./views/JobListsView";
import { elements, renderFindLoader, clearFindLoader } from "./views/base";

// Animate On Scroll
import AOS from 'aos';

// Global state
const state = {};

/**
 * For Controller
 */
const JobsListsController = async () => {
  // Get description and location values from input
  const queryDescription = jobsView.inputDescription();
  const queryLocation = jobsView.inputLocation();
  
  if (queryDescription || queryLocation) {
    state.search = new JobLists(queryDescription, queryLocation);
    
    // Clear input and content for prepare
    jobsView.clearInput();
    jobsView.clearContent();
    renderFindLoader(elements.siteContent);

    try {
      // Search for jobs
      await state.search.getJobs();

      elements.filterCard.textContent = '# ' + queryDescription;
      // Render results on View
      clearFindLoader();
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

// Set to DOM
document.querySelector('.hero-image').src = hero;
document.querySelector('.profile-image').src = profile;

// Animate On Scroll
AOS.init();

