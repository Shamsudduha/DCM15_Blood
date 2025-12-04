// DOM Elements
const bloodButtons = document.querySelectorAll('.blood-btn');
const donorList = document.getElementById('donorList');
const selectedBloodText = document.getElementById('selectedBlood');
const donorCount = document.getElementById('donorCount');

// Function to create donor item
function createDonorItem(student) {
    const item = document.createElement('div');
    item.className = 'donor-item';
    
    // Get gender icon
    const genderIcon = student.sex === 'Male' ? 'mars' : 'venus';
    
    item.innerHTML = `
        <div class="donor-info">
            <div class="donor-name">${student.name}</div>
            <div class="donor-details">
                <span class="donor-roll">Roll: ${student.rollNumber}</span>
                <span class="donor-sex">
                    <i class="fas fa-${genderIcon}"></i> ${student.sex}
                </span>
            </div>
        </div>
        <div class="donor-blood">${student.bloodGroup || 'N/A'}</div>
    `;
    
    return item;
}

// Function to filter and display donors
function showDonorsByBloodType(bloodType) {
    // Clear previous list
    donorList.innerHTML = '';
    
    // Filter students by blood type
    const filteredStudents = students.filter(student => 
        student.bloodGroup === bloodType
    );
    
    // Update selected blood text
    selectedBloodText.textContent = `Blood Group: ${bloodType}`;
    
    // Update donor count
    donorCount.textContent = `${filteredStudents.length} donors`;
    
    // Show donor list
    if (filteredStudents.length > 0) {
        // Add each donor to the list
        filteredStudents.forEach(student => {
            donorList.appendChild(createDonorItem(student));
        });
    } else {
        // Show message if no donors found
        donorList.innerHTML = `
            <div class="donor-item" style="justify-content: center; text-align: center;">
                <div class="donor-info">
                    <div class="donor-name">No donors found</div>
                    <div class="donor-roll">Try another blood type</div>
                </div>
            </div>
        `;
    }
}

// Event listeners for blood group buttons
bloodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        bloodButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get blood type from button
        const bloodType = button.getAttribute('data-type');
        
        // Show donors for this blood type
        showDonorsByBloodType(bloodType);
        
        // Scroll to donor list
        donorList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Hide donor list initially
    donorList.style.display = 'none';
    
    // Add click handler to show list when any button is clicked
    bloodButtons.forEach(button => {
        button.addEventListener('click', () => {
            donorList.style.display = 'block';
        });
    });
});