{
    const users = document.querySelectorAll('.user-card');
    users.forEach(user => {
        user.addEventListener('click', () => goToProfile(user.querySelector('.username').textContent));
    });

    const goToProfile = (username) => {
        history.pushState({}, "", "/profile?username=" + username);
        urlLocationHandler();
    }
}