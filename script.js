// script.js - Unified Interactions for HEMOGLOBIN

// ============================================
// SHARED DATA STORE - 100 REAL STUDENTS
// ============================================

// Student data - 100 students with name, roll, sex, blood group
const students = [
    { id: 1, name: "Deamun Muktaref Shrestho", rollNumber: "1", sex: "Male", bloodGroup: "B+" },
    { id: 2, name: "Syeda Anamika Rahman", rollNumber: "2", sex: "Female", bloodGroup: "A+" },
    { id: 3, name: "Anindita Bhowmick", rollNumber: "3", sex: "Female", bloodGroup: "A+" },
    { id: 4, name: "Shorazoom Muneer Khair", rollNumber: "4", sex: "Male", bloodGroup: "A+" },
    { id: 5, name: "Afia Rahman Siddika", rollNumber: "5", sex: "Female", bloodGroup: "O+" },
    { id: 6, name: "Shrestha Chakroborty", rollNumber: "6", sex: "Female", bloodGroup: "O+" },
    { id: 7, name: "Jurain Mahmud Jureen", rollNumber: "7", sex: "Female", bloodGroup: "A+" },
    { id: 8, name: "Nusrat Mehzabeen Sumara", rollNumber: "8", sex: "Female", bloodGroup: "A+" },
    { id: 9, name: "Paromita Dutta", rollNumber: "9", sex: "Female", bloodGroup: "B+" },
    { id: 10, name: "Md. Tawseef Hasan", rollNumber: "10", sex: "Male", bloodGroup: "A+" },
    { id: 11, name: "Ridita Paul", rollNumber: "11", sex: "Female", bloodGroup: "B+" },
    { id: 12, name: "Jassia Afroz Sumaiya", rollNumber: "12", sex: "Female", bloodGroup: "" },
    { id: 13, name: "Shamima Yeasmin Sumona", rollNumber: "13", sex: "Female", bloodGroup: "A+" },
    { id: 14, name: "Abu Tayab Mumen", rollNumber: "14", sex: "Male", bloodGroup: "O+" },
    { id: 15, name: "Sumiya Binte Reza", rollNumber: "15", sex: "Female", bloodGroup: "O+" },
    { id: 16, name: "Nurush Safi Khan", rollNumber: "16", sex: "Male", bloodGroup: "AB+" },
    { id: 17, name: "Md. Abrar Tazwar Islam", rollNumber: "17", sex: "Male", bloodGroup: "A+" },
    { id: 18, name: "M. Latifur Rahman", rollNumber: "18", sex: "Male", bloodGroup: "AB+" },
    { id: 19, name: "Towheda Mostafa Jawya", rollNumber: "19", sex: "Female", bloodGroup: "A+" },
    { id: 20, name: "Sanjida Khanam Setu", rollNumber: "20", sex: "Female", bloodGroup: "B+" },
    { id: 21, name: "Tangin Akhter Marena", rollNumber: "21", sex: "Female", bloodGroup: "B+" },
    { id: 22, name: "Anika Tahsin Mohima", rollNumber: "22", sex: "Female", bloodGroup: "B+" },
    { id: 23, name: "Gazi Mosammat Humaira", rollNumber: "23", sex: "Female", bloodGroup: "O+" },
    { id: 24, name: "Mashtura Haque Odri", rollNumber: "24", sex: "Female", bloodGroup: "O+" },
    { id: 25, name: "Mymona Siddiqua", rollNumber: "25", sex: "Female", bloodGroup: "O+" },
    { id: 26, name: "Faria Noor", rollNumber: "26", sex: "Female", bloodGroup: "B+" },
    { id: 27, name: "Hride Das", rollNumber: "27", sex: "Female", bloodGroup: "O+" },
    { id: 28, name: "Mst. Maesha Afrin", rollNumber: "28", sex: "Female", bloodGroup: "B+" },
    { id: 29, name: "Sadika Mahmuda", rollNumber: "29", sex: "Female", bloodGroup: "B+" },
    { id: 30, name: "Himel Das Srabon", rollNumber: "30", sex: "Male", bloodGroup: "A+" },
    { id: 31, name: "Shekh Maria Sultana", rollNumber: "31", sex: "Female", bloodGroup: "O+" },
    { id: 32, name: "Kazi Fiaz Hassan", rollNumber: "32", sex: "Male", bloodGroup: "B+" },
    { id: 33, name: "Sanjana Ahmed Promi", rollNumber: "33", sex: "Female", bloodGroup: "O+" },
    { id: 34, name: "Md. Shaifullah Rafid", rollNumber: "34", sex: "Male", bloodGroup: "O+" },
    { id: 35, name: "Afrin Ahmed Munia", rollNumber: "35", sex: "Female", bloodGroup: "" },
    { id: 36, name: "Samia Kabir", rollNumber: "36", sex: "Female", bloodGroup: "B+" },
    { id: 37, name: "Tanbir Alam", rollNumber: "37", sex: "Male", bloodGroup: "A+" },
    { id: 38, name: "Yeasmin Arafat", rollNumber: "38", sex: "Female", bloodGroup: "B+" },
    { id: 39, name: "Adrita Amin", rollNumber: "39", sex: "Female", bloodGroup: "A+" },
    { id: 40, name: "Afsana Akter Akhi", rollNumber: "40", sex: "Female", bloodGroup: "O+" },
    { id: 41, name: "Aisha Zahin Nur", rollNumber: "41", sex: "Female", bloodGroup: "B+" },
    { id: 42, name: "Nurjahan Akter Laboni", rollNumber: "42", sex: "Female", bloodGroup: "B+" },
    { id: 43, name: "Sabrina Sadiya", rollNumber: "43", sex: "Female", bloodGroup: "O+" },
    { id: 44, name: "Tasnim Akter Fayika", rollNumber: "44", sex: "Female", bloodGroup: "AB+" },
    { id: 45, name: "Naimul Islam Salman", rollNumber: "45", sex: "Male", bloodGroup: "B+" },
    { id: 46, name: "Md. Arafat Hossain Sajib", rollNumber: "46", sex: "Male", bloodGroup: "AB+" },
    { id: 47, name: "Most. Humaira Jahan", rollNumber: "47", sex: "Female", bloodGroup: "A+" },
    { id: 48, name: "Md. Masud Anam", rollNumber: "48", sex: "Male", bloodGroup: "A+" },
    { id: 49, name: "Jannatul Ferdous Warsee", rollNumber: "49", sex: "Female", bloodGroup: "AB+" },
    { id: 50, name: "Nazneen Islam", rollNumber: "50", sex: "Female", bloodGroup: "O+" },
    { id: 51, name: "Rumana Akter Borsha", rollNumber: "51", sex: "Female", bloodGroup: "B+" },
    { id: 52, name: "Rubina Azad", rollNumber: "52", sex: "Female", bloodGroup: "A+" },
    { id: 53, name: "Shahriar Zidan Zarif", rollNumber: "53", sex: "Male", bloodGroup: "A+" },
    { id: 54, name: "Sumaya Sultana Tajbin", rollNumber: "54", sex: "Female", bloodGroup: "B+" },
    { id: 55, name: "Mohaimenul Islam Arman", rollNumber: "55", sex: "Male", bloodGroup: "B+" },
    { id: 56, name: "Lamisa Tasnim", rollNumber: "56", sex: "Female", bloodGroup: "O+" },
    { id: 57, name: "Riya Mitra", rollNumber: "57", sex: "Female", bloodGroup: "A+" },
    { id: 58, name: "Bissanath Debnath", rollNumber: "58", sex: "Male", bloodGroup: "B+" },
    { id: 59, name: "Rubaiya Rahman", rollNumber: "59", sex: "Female", bloodGroup: "O+" },
    { id: 60, name: "Md. Amit Hasan Priyo", rollNumber: "60", sex: "Male", bloodGroup: "O+" },
    { id: 61, name: "Sahanima Bhuiyan Simi", rollNumber: "61", sex: "Female", bloodGroup: "O+" },
    { id: 62, name: "Tashnia Kabir Obantee", rollNumber: "62", sex: "Female", bloodGroup: "B+" },
    { id: 63, name: "Hosne Jannat Maisha", rollNumber: "63", sex: "Female", bloodGroup: "AB+" },
    { id: 64, name: "Nyema Binte Alam", rollNumber: "64", sex: "Female", bloodGroup: "O+" },
    { id: 65, name: "Maidah Sultana", rollNumber: "65", sex: "Female", bloodGroup: "B+" },
    { id: 66, name: "Taosif Ahasan Zisan", rollNumber: "66", sex: "Male", bloodGroup: "A+" },
    { id: 67, name: "Mst. Maria Sarker", rollNumber: "67", sex: "Female", bloodGroup: "O+" },
    { id: 68, name: "Abdullah Al Muhim", rollNumber: "68", sex: "Male", bloodGroup: "O+" },
    { id: 69, name: "Md. Mehedi Hasan Munna", rollNumber: "69", sex: "Male", bloodGroup: "A+" },
    { id: 70, name: "Md. Nayeem Bhuiyan", rollNumber: "70", sex: "Male", bloodGroup: "A+" },
    { id: 71, name: "Md. Sadikul Islam Shihab", rollNumber: "71", sex: "Male", bloodGroup: "AB+" },
    { id: 72, name: "Farhan Mostafiz", rollNumber: "72", sex: "Male", bloodGroup: "A+" },
    { id: 73, name: "Md. Rahatul Islam", rollNumber: "73", sex: "Male", bloodGroup: "B+" },
    { id: 74, name: "Iqra Mehjabin", rollNumber: "74", sex: "Female", bloodGroup: "B+" },
    { id: 75, name: "Sumaiya Akter", rollNumber: "75", sex: "Female", bloodGroup: "B+" },
    { id: 76, name: "Abu Souad Shamsudduha", rollNumber: "76", sex: "Male", bloodGroup: "O+" },
    { id: 77, name: "Dil Afrose Supti", rollNumber: "77", sex: "Female", bloodGroup: "O+" },
    { id: 78, name: "Jannatun Naima", rollNumber: "78", sex: "Female", bloodGroup: "A+" },
    { id: 79, name: "Md. Shahidul Islam Fuad", rollNumber: "79", sex: "Male", bloodGroup: "A+" },
    { id: 80, name: "Pranto Roy", rollNumber: "80", sex: "Male", bloodGroup: "B+" },
    { id: 81, name: "Rajaul Karim Sajib", rollNumber: "81", sex: "Male", bloodGroup: "AB+" },
    { id: 82, name: "Shofeullah Raihan", rollNumber: "82", sex: "Male", bloodGroup: "B-" },
    { id: 83, name: "Sabiha Akter Eva", rollNumber: "83", sex: "Female", bloodGroup: "AB+" },
    { id: 84, name: "Shah Muksitol Islam", rollNumber: "84", sex: "Male", bloodGroup: "AB+" },
    { id: 85, name: "Ashma-Ul-Husna", rollNumber: "85", sex: "Female", bloodGroup: "A+" },
    { id: 86, name: "Debi Rani Das", rollNumber: "86", sex: "Female", bloodGroup: "B+" },
    { id: 87, name: "Hafiz Al Asad", rollNumber: "87", sex: "Male", bloodGroup: "O+" },
    { id: 88, name: "Md. Mahmudul Hasan Joy", rollNumber: "88", sex: "Male", bloodGroup: "O+" },
    { id: 89, name: "Md. Rakib Hossain", rollNumber: "89", sex: "Male", bloodGroup: "A+" },
    { id: 90, name: "Fariha Tasneem", rollNumber: "90", sex: "Female", bloodGroup: "A+" },
    { id: 91, name: "Amrin Ahmed", rollNumber: "91", sex: "Female", bloodGroup: "O+" },
    { id: 92, name: "Md. Al Jariat Zisan", rollNumber: "92", sex: "Male", bloodGroup: "B+" },
    { id: 93, name: "Sabrina Mahmud Shahrin", rollNumber: "93", sex: "Female", bloodGroup: "O+" },
    { id: 94, name: "Nurul Fays Manon", rollNumber: "94", sex: "Male", bloodGroup: "O+" },
    { id: 95, name: "Fariza Ruhaniath Momo", rollNumber: "95", sex: "Female", bloodGroup: "A+" },
    { id: 96, name: "Md. Al Amin", rollNumber: "96", sex: "Male", bloodGroup: "O+" },
    { id: 97, name: "Mossa. Ferdowsi Akter", rollNumber: "97", sex: "Female", bloodGroup: "O+" },
    { id: 98, name: "Israt Zarin", rollNumber: "98", sex: "Female", bloodGroup: "O+" },
    { id: 99, name: "Delowar Hosen Rony", rollNumber: "99", sex: "Male", bloodGroup: "AB+" },
    { id: 100, name: "Monzur E Mowla Akash", rollNumber: "100", sex: "Male", bloodGroup: "B-" }
];

// Locations array for student addresses
const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'Seattle', 'Boston', 'Denver', 'Miami', 'Atlanta'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Transform student data to donor format
window.donorsData = students.map(student => ({
    id: student.id,
    name: student.name,
    roll: student.rollNumber,
    bloodType: student.bloodGroup || "Unknown",
    gender: student.sex,
    location: getRandomItem(locations)
}));

// Calculate statistics from donor data
function calculateStats() {
    const total = window.donorsData.length;
    const male = window.donorsData.filter(d => d.gender === 'Male').length;
    const female = window.donorsData.filter(d => d.gender === 'Female').length;
    
    // Calculate blood group distribution (excluding Unknown blood types)
    const validDonors = window.donorsData.filter(d => d.bloodType !== "Unknown");
    const bloodGroupCounts = {};
    validDonors.forEach(donor => {
        const type = donor.bloodType;
        bloodGroupCounts[type] = (bloodGroupCounts[type] || 0) + 1;
    });
    
    // Calculate percentages for pie chart
    const oPositive = bloodGroupCounts['O+'] || 0;
    const aPositive = bloodGroupCounts['A+'] || 0;
    const bPositive = bloodGroupCounts['B+'] || 0;
    const others = validDonors.length - (oPositive + aPositive + bPositive);
    
    return {
        total: total,
        male: male,
        female: female,
        malePercentage: ((male / total) * 100).toFixed(1),
        femalePercentage: ((female / total) * 100).toFixed(1),
        oPositive: oPositive,
        aPositive: aPositive,
        bPositive: bPositive,
        others: others,
        oPositivePercent: validDonors.length > 0 ? ((oPositive / validDonors.length) * 100).toFixed(0) : 0,
        aPositivePercent: validDonors.length > 0 ? ((aPositive / validDonors.length) * 100).toFixed(0) : 0,
        bPositivePercent: validDonors.length > 0 ? ((bPositive / validDonors.length) * 100).toFixed(0) : 0,
        othersPercent: validDonors.length > 0 ? ((others / validDonors.length) * 100).toFixed(0) : 0
    };
}

// Function to update home page stats
function updateHomePageStats() {
    const stats = calculateStats();
    
    const totalDonorsEl = document.querySelector('.total-donors-count');
    if (totalDonorsEl) totalDonorsEl.textContent = stats.total.toLocaleString();
    
    const maleDonorsEl = document.querySelector('.male-donors-count');
    if (maleDonorsEl) maleDonorsEl.textContent = stats.male;
    
    const femaleDonorsEl = document.querySelector('.female-donors-count');
    if (femaleDonorsEl) femaleDonorsEl.textContent = stats.female;
    
    const oPositivePercentEl = document.querySelector('.o-positive-percent');
    if (oPositivePercentEl) oPositivePercentEl.textContent = `${stats.oPositivePercent}%`;
    
    const aPositivePercentEl = document.querySelector('.a-positive-percent');
    if (aPositivePercentEl) aPositivePercentEl.textContent = `${stats.aPositivePercent}%`;
    
    const bPositivePercentEl = document.querySelector('.b-positive-percent');
    if (bPositivePercentEl) bPositivePercentEl.textContent = `${stats.bPositivePercent}%`;
    
    const othersPercentEl = document.querySelector('.others-percent');
    if (othersPercentEl) othersPercentEl.textContent = `${stats.othersPercent}%`;
    
    const pieChart = document.querySelector('.pie-chart');
    if (pieChart) {
        const oPercent = parseFloat(stats.oPositivePercent);
        const aPercent = parseFloat(stats.aPositivePercent);
        const bPercent = parseFloat(stats.bPositivePercent);
        const othersPercent = parseFloat(stats.othersPercent);
        
        const oStop = oPercent;
        const aStop = oPercent + aPercent;
        const bStop = oPercent + aPercent + bPercent;
        
        pieChart.style.background = `conic-gradient(
            #dc2626 0% ${oStop}%, 
            #921517 ${oStop}% ${aStop}%, 
            #ffb4ab ${aStop}% ${bStop}%, 
            #690005 ${bStop}% 100%
        )`;
    }
    
    console.log('Home page stats updated with student data:', stats);
}

// Function to render donors on donors page
function renderDonors(filteredDonors) {
    const donorList = document.getElementById('donorList');
    const donorCountSpan = document.getElementById('donorCount');
    
    if (!donorList) return;
    
    donorCountSpan.textContent = `${filteredDonors.length} Donors`;
    
    if (filteredDonors.length === 0) {
        donorList.innerHTML = `
            <div class="glass-card rounded-2xl p-8 text-center">
                <span class="material-symbols-outlined text-5xl text-on-surface-variant/40">search</span>
                <p class="body-md text-on-surface-variant/60 mt-2">No donors found for this blood type</p>
            </div>
        `;
        return;
    }
    
    donorList.innerHTML = filteredDonors.map(donor => `
        <div class="donor-card glass-card rounded-2xl p-3 flex items-center gap-3 active:scale-[0.98] transition-all duration-200 cursor-pointer" data-blood-type="${donor.bloodType}">
            <div class="w-12 h-12 rounded-full border border-white/10 shrink-0 bg-surface-container-high flex items-center justify-center text-primary/80">
                <span class="material-symbols-outlined text-2xl">${donor.gender === 'Male' ? 'face' : 'face_3'}</span>
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="donor-name label-lg text-on-surface font-bold truncate text-sm">${donor.name}</h3>
                <div class="flex items-center gap-1.5 text-on-surface-variant/70 mt-0.5">
                    <span class="material-symbols-outlined text-[12px]">badge</span>
                    <p class="donor-roll label-sm truncate uppercase tracking-wider text-xs">Roll: ${donor.roll}</p>
                </div>
                <div class="flex items-center gap-1 mt-0.5">
                    <span class="material-symbols-outlined text-[10px] text-primary">location_city</span>
                    <span class="text-[10px] text-on-surface-variant/50">${donor.location}</span>
                </div>
            </div>
            <div class="blood-type-badge blood-badge text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <span class="font-bold text-lg">${donor.bloodType}</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.donor-card').forEach(card => {
        card.addEventListener('click', function() {
            const donorName = this.querySelector('.donor-name')?.textContent;
            const bloodType = this.querySelector('.blood-type-badge span')?.textContent;
            const roll = this.querySelector('.donor-roll')?.textContent;
            alert(`📋 Donor Details:\n\nName: ${donorName}\nBlood Type: ${bloodType}\n${roll}`);
        });
    });
}

// Add new donor function
window.addNewDonor = function(donorData) {
    const newId = window.donorsData.length + 1;
    const newDonor = {
        id: newId,
        name: donorData.name || `New Donor ${newId}`,
        roll: newId.toString().padStart(2, '0'),
        bloodType: donorData.bloodType || "Unknown",
        gender: donorData.gender || "Other",
        location: donorData.location || getRandomItem(locations)
    };
    window.donorsData.push(newDonor);
    
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        updateHomePageStats();
    }
    
    localStorage.setItem('donorsData', JSON.stringify(window.donorsData));
    return newDonor;
};

// Sync data across pages
function syncDataAcrossPages() {
    const savedData = localStorage.getItem('donorsData');
    if (savedData) {
        window.donorsData = JSON.parse(savedData);
    } else {
        localStorage.setItem('donorsData', JSON.stringify(window.donorsData));
    }
    
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        updateHomePageStats();
    }
}

window.addEventListener('storage', (e) => {
    if (e.key === 'donorsData' && e.newValue) {
        window.donorsData = JSON.parse(e.newValue);
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
            updateHomePageStats();
        }
    }
});

// ============================================
// PAGE INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    syncDataAcrossPages();
    
    const isHomePage = window.location.pathname.includes('index.html') || 
                       window.location.pathname === '/' || 
                       window.location.pathname === '';
    
    if (isHomePage) {
        updateHomePageStats();
        
        const statsSection = document.querySelector('.donor-statistics-section');
        if (statsSection && !document.querySelector('.refresh-stats-btn')) {
            const refreshBtn = document.createElement('button');
            refreshBtn.className = 'refresh-stats-btn glass-card px-4 py-2 rounded-xl text-sm flex items-center gap-2 ml-auto';
            refreshBtn.innerHTML = '<span class="material-symbols-outlined text-sm">refresh</span> Refresh Stats';
            refreshBtn.style.cssText = 'position: fixed; bottom: 100px; right: 20px; z-index: 100; background: #dc2626; color: white; border: none;';
            refreshBtn.onclick = () => {
                updateHomePageStats();
                alert('Statistics refreshed!');
            };
            document.body.appendChild(refreshBtn);
        }
    }
    
    const isDonorsPage = window.location.pathname.includes('donors.html');
    if (isDonorsPage && window.donorsData) {
        renderDonors(window.donorsData);
        
        const filterChips = document.querySelectorAll('.filter-chip');
        let activeFilter = 'All';
        
        if (filterChips.length > 0) {
            filterChips.forEach(chip => {
                chip.addEventListener('click', function() {
                    activeFilter = this.textContent;
                    
                    filterChips.forEach(c => {
                        c.classList.remove('bg-primary-container', 'text-on-primary-container', 'shadow-lg');
                        c.classList.add('glass-card', 'text-on-surface-variant');
                    });
                    this.classList.remove('glass-card', 'text-on-surface-variant');
                    this.classList.add('bg-primary-container', 'text-on-primary-container', 'shadow-lg');
                    
                    if (activeFilter === 'All') {
                        renderDonors(window.donorsData);
                    } else {
                        const filtered = window.donorsData.filter(donor => donor.bloodType === activeFilter);
                        renderDonors(filtered);
                    }
                });
            });
        }
        
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            let currentFilter = 'All';
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                
                let donorsToSearch = window.donorsData;
                if (currentFilter !== 'All') {
                    donorsToSearch = window.donorsData.filter(donor => donor.bloodType === currentFilter);
                }
                
                const filtered = donorsToSearch.filter(donor => 
                    donor.name.toLowerCase().includes(searchTerm) || 
                    donor.roll.includes(searchTerm)
                );
                
                renderDonors(filtered);
            });
        }
    }
    
    // Glass card interactions
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        const handleStart = () => {
            card.style.transform = 'scale(0.98)';
            card.style.opacity = '0.9';
        };
        
        const handleEnd = () => {
            card.style.transform = 'scale(1)';
            card.style.opacity = '1';
        };
        
        card.addEventListener('mousedown', handleStart);
        card.addEventListener('mouseup', handleEnd);
        card.addEventListener('mouseleave', handleEnd);
        card.addEventListener('touchstart', handleStart);
        card.addEventListener('touchend', handleEnd);
    });
    
    // Blood type button interactions
    const bloodTypeBtns = document.querySelectorAll('.blood-type-btn');
    bloodTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            const selectedType = this.textContent;
            const count = window.donorsData.filter(d => d.bloodType === selectedType).length;
            alert(`${selectedType} blood type has ${count} registered donors`);
        });
    });
    
    console.log('HEMOGLOBIN app initialized with', window.donorsData.length, 'students');
});