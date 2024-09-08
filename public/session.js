// Save user session data in localStorage
function setUserSession(data) {
    localStorage.setItem('userSession', JSON.stringify(data));
}

// Get user session data from localStorage
function getUserSession() {
    const data = localStorage.getItem('userSession');
    return data ? JSON.parse(data) : null;
}

// Clear user session data from localStorage
function clearUserSession() {
    localStorage.removeItem('userSession');
}

// Example usage
const userData = { userId: 1, userName: 'sexlover' };
setUserSession(userData);

const session = getUserSession();
console.log(session);

clearUserSession();