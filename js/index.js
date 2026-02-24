// index.js
// connected main.js
import { jobData } from './main.js';

 const getElement = (id) => {
    const textIdValue = document.getElementById(id);
    return textIdValue;
}

// Top card Elements
const topCardAllJob = getElement('all-job');
const topCardAllInterview = getElement('all-interview');
const topCardAllRejected = getElement('all-rejected');
const allJobCountLabel = getElement('all-job-count');

// toggle filter button
const allFilterBtn = getElement('all-filter-btn');
const interviewFilterBtn = getElement('interview-filter-btn');
const rejectedFilterBtn = getElement('rejected-filter-btn');

// All job cards
const allCards = getElement('all-cards');

// total count updated
function totalJobCount() {
    topCardAllJob.innerText = jobData.length;
    topCardAllInterview.innerText = jobData.filter(j => j.status === 'interview').length;
    topCardAllRejected.innerText = jobData.filter(j => j.status === 'rejected').length;
    allJobCountLabel.innerText = allCards.children.length; 
}

// dinamic data render function
function renderJobs(filterStatus = 'all') {
    allCards.innerHTML = '';

    // filter logic implement
    const filteredData = jobData.filter(job => {
        if (filterStatus === 'all') return true;
        return job.status === filterStatus;
    });

    // if empty showing this empty page
    if (filteredData.length === 0) {
        allCards.innerHTML = `
            <div class="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-dashed border-gray-200 min-h-[350px] w-full">
                <img src="image/jobs.png" alt="No jobs" class="w-32 mb-4">
                <h2 class="text-2xl font-bold text-gray-800">No jobs available</h2>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
    }
    else{

        filteredData.forEach(job => {
            const card = document.createElement('div');
            card.className = 'card border border-base-300 bg-base-100 shadow-sm mb-4';
            
            // status wise dinamic class
            let badgeClass = 'badge-ghost';
            if(job.status === 'interview') badgeClass = 'badge-success';
            if(job.status === 'rejected') badgeClass = 'badge-error';

            card.innerHTML = `
                <div class="card-body p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="card-title text-primary companyName">${job.company}</h2>
                            <p class="text-sm opacity-70 jobPosition">${job.position}</p>
                        </div>
                        <button class="btn btn-sm btn-circle btn-outline opacity-50 btnDelete" data-id="${job.id}">
                            <i class="w-4 h-4" data-lucide="trash-2"></i>
                        </button>
                    </div>
                    <div class="text-xs opacity-50 flex gap-2">
                        <span>${job.location} • ${job.type} •</span> 
                        <span>${job.salary}</span>
                    </div>
                    <div class="badge ${badgeClass} mt-2 jobStatus">
                        ${job.status.toUpperCase()}
                    </div>
                    <p class="text-sm mt-3 jobDescription">${job.description}</p>
                    <div class="card-actions mt-4">
                        <button class="btn btn-outline btn-success btn-sm applyInterviewBtn" data-id="${job.id}">Interview</button>
                        <button class="btn btn-outline btn-error btn-sm getRejectedBtn" data-id="${job.id}">Rejected</button>
                    </div>
                </div>
            `;
            allCards.appendChild(card);
        });
    }

    lucide.createIcons(); 
    totalJobCount();
}

// toggle filter
function toggleStyle(activeBtn) {
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove('bg-[#3B82F6]', 'text-white');
        btn.classList.add('bg-base-200', 'text-black');
    });
    activeBtn.classList.remove('bg-base-200', 'text-black');
    activeBtn.classList.add('bg-[#3B82F6]', 'text-white');
}

// filter event
allFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
    renderJobs('all');
});

interviewFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
    renderJobs('interview');
});

rejectedFilterBtn.addEventListener('click', function () {
    toggleStyle(this);
    renderJobs('rejected');
});

// Event Delegation (Delete, Interview, Reject)
allCards.addEventListener('click', function (event) {
    const target = event.target;
    const jobId = parseInt(target.closest('button')?.dataset.id);

    if (!jobId) return;

    // Delet logic
    if (target.closest('.btnDelete')) {
        const index = jobData.findIndex(j => j.id === jobId);
        jobData.splice(index, 1);
        renderJobs(); 
    }

    // interview logic
    if (target.closest('.applyInterviewBtn')) {
        const job = jobData.find(j => j.id === jobId);
        job.status = 'interview';
        // after change status update it
        renderJobs();
    }

    // rejected logic
    if (target.closest('.getRejectedBtn')) {
        const job = jobData.find(j => j.id === jobId);
        job.status = 'rejected';
        renderJobs();
    }
});

// Initial Render
renderJobs();