document.addEventListener('DOMContentLoaded', function() {
    const employeeSelect = document.getElementById('employee-select');
    const startFeedbackBtn = document.getElementById('start-feedback');
    const feedbackForm = document.getElementById('feedback-form');
    const selectedEmployeeSpan = document.getElementById('selected-employee');
    const resultsDiv = document.getElementById('results');
    const resultEmployeeSpan = document.getElementById('result-employee');
    const averageRatingSpan = document.getElementById('average-rating');
    const resetBtn = document.getElementById('reset');

    // Start feedback after selecting employee
    startFeedbackBtn.addEventListener('click', function() {
        const selectedEmployee = employeeSelect.value;
        if (!selectedEmployee) {
            alert('Please select an employee.');
            return;
        }
        selectedEmployeeSpan.textContent = selectedEmployee;
        document.getElementById('employee-selection').style.display = 'none';
        feedbackForm.style.display = 'block';
    });

    // Handle form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const ratings = Array.from(document.querySelectorAll('.rating')).map(select => parseInt(select.value));
        const average = (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1);
        
        resultEmployeeSpan.textContent = selectedEmployeeSpan.textContent;
        averageRatingSpan.textContent = average;
        
        feedbackForm.style.display = 'none';
        resultsDiv.style.display = 'block';
    });

    // Reset to start over
    resetBtn.addEventListener('click', function() {
        resultsDiv.style.display = 'none';
        document.getElementById('employee-selection').style.display = 'block';
        employeeSelect.value = '';
        feedbackForm.reset();
    });
});