let users = [
    { id: 1, name: 'Reena', email: 'Reena@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Hima', email: 'Hima@gmail.com', role: 'User', status: 'Inactive' }
  ];
  
  // Modal controls
  const modal = document.getElementById('user-modal');
  const openModalBtn = document.getElementById('open-add-user-modal');
  const closeModalBtn = document.querySelector('.close-button');
  const userForm = document.getElementById('add-user-form');
  
  openModalBtn.onclick = () => modal.style.display = 'block';
  closeModalBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }
  
  // Load users on page load
  document.addEventListener('DOMContentLoaded', displayUsers);
  
  function displayUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
  
    users.forEach((user, index) => {
      userList.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>${user.status}</td>
          <td>
            <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }
  
  // Add user
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const newUser = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      role: document.getElementById('role').value,
      status: document.getElementById('status').value
    };
  
    users.push(newUser);
    displayUsers();
    modal.style.display = 'none';
    userForm.reset();
  });
  
  // Delete user
  function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
  }
  
  
  // Add user
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const newUser = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      role: document.getElementById('role').value,
      status: document.getElementById('status').value
    };
  
    users.push(newUser);
    displayUsers();
    modal.style.display = 'none';
    userForm.reset();
  });
  
  // Delete user
  function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
  }
  