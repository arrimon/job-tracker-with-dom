console.log('Index.js Connected');

// connected main.js
import { getElement, jobData } from "./main";

// card id get
const topCardAllJob = getElement('all-job');
const topCardAllInterview = getElement('all-interview');
const topCardAllRejected = getElement('all-rejected');

// filter btn id get
const allFilterBtn = getElement('all-filter-btn');
const interviewFilterBtn = getElement('interview-filter-btn');
const rejectedFilterBtn = getElement('rejected-filter-btn');

// all cards section ig get
const allCards = getElement('all-cards');