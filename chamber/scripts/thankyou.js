//   thank you page

const params = new URLSearchParams(window.location.search);
document.getElementById('first-name').textContent = params.get('first_name');
document.getElementById('last-name').textContent = params.get('last_name');
document.getElementById('email').textContent = params.get('email');
document.getElementById('phone').textContent = params.get('phone');
document.getElementById('organization').textContent = params.get('organization');
document.getElementById('org-title').textContent = params.get('org_title');
document.getElementById('membership-level').textContent = params.get('membership_level');
document.getElementById('timestamp').textContent = params.get('timestamp');