function validateForm() {
  const form = document.forms['pet-info-form'];
  // TODO: Add checks here.
  let petAge = document.getElementById('pet-age').value;
  let email = document.getElementById('owner-email-address').value;
  let phoneNumber = document.getElementById('phone-number').value;
  let explanation = document.getElementById('other-info-text-area').value;
//check name input
  if (petName === '') {
      alert('Please enter the pet\'s name.');
      return false;
  }
//check valid age
  if (petAge === '' || isNaN(petAge) || petAge < 1 || petAge > 15) {
      alert('Please enter a valid pet\'s age (1-15).');
      return false;
  }

  //check email
  let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkEmail.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  // check valid number
  let phone = /^\d{3}-\d{3}-\d{4}$/;
    if (!checkPhone.test(phoneNumber)) {
      alert('Please enter a valid phone number (XXX-XXX-XXXX).');
      return false;
  }

//check boxes 
  if (!document.getElementById('bordetella').checked || !document.getElementById('dhlpp').checked || !document.getElementById('rabies').checked) {
      if (explanation === '') {
          alert('Please provide an explanation below for not selecting all vaccines');
          return false;
      }
  }

  //submit true if everything passes
  return true;
}