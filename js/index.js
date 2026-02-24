// connected main.js
const getElement = (id) => {
    const textIdValue = document.getElementById(id);
    return textIdValue;
}

// array for topCardAllInterview
let topCardAllInterviewList = []
// array for topCardAllRejected
let topCardAllRejectedList = []

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

// console.log(allCards.children.length)

// Calculate total card/job count
function totalJobCount(){
    // total card job count
    topCardAllJob.innerText = allCards.children.length;
    // Interview list count
    topCardAllInterview.innerText = topCardAllInterviewList.length;
    // Rejected list count
    topCardAllRejected.innerText = topCardAllRejectedList.length;

}
totalJobCount()


// Toggle activBtn function 
function toggleStyle(activeBtn) {
    // all button active style remove
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove('bg-[#3B82F6]', 'text-white');
        btn.classList.add('bg-base-200', 'text-black');
    });

    // slelected btn get active style
    activeBtn.classList.remove('bg-base-200', 'text-black');
    activeBtn.classList.add('bg-[#3B82F6]', 'text-white');
}


allFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
});

interviewFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
});

rejectedFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
});