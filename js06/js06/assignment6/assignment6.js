// Get the form and the submit button.
const form = document.getElementById('create-account');
const submitButton = document.querySelector('.btn.btn-primary');

// Add an event listener to the submit button to validate the form.
submitButton.addEventListener('click', function () {
  // Validate the state.
  if (document.querySelector('select[name="state"]').value === 'Choose...') {
    document.querySelector('select[name="state"]').setCustomValidity('Choose a state');
  } else {
    document.querySelector('select[name="state"]').setCustomValidity('');
  }

  // Validate the agreement.
  if (!document.querySelector('input[name="agree"]').checked) {
    document.querySelector('input[name="agree"]').setCustomValidity('Please agree to the terms/conditions');
  } else {
    document.querySelector('input[name="agree"]').setCustomValidity('');
  }

  // Validate the membership.
  if (!Array.from(form.querySelectorAll('input[name="membership"]')).some((membership) => membership.checked)) {
    form.querySelectorAll('input[name="membership"]')[0].setCustomValidity('Select a membership');
  } else {
    form.querySelectorAll('input[name="membership"]')[0].setCustomValidity('');
  }
});