document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.getElementsByClassName("stats-container");
    const easyProgressCircle = document.getElementsByClassName("easy-progress");
    const mediumProgressCircle = document.getElementsByClassName("medium-progress");
    const hardProgressCircle = document.getElementsByClassName("hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.getElementsByClassName("stats-card");

    function validUsername(username){
        if (username.trim == "") {
            alert("Username should not be empty");
            return false;
        } 

        const regex = /^[a-zA-z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid username.");
        }
        return isMatching;
    }

    async function fatchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}}`;
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fatch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch the user details")
            }

            const data = await response.json();
            console.log("Logging data: ", data);
        } catch (error) {
            statsContainer.innerHTML = `<p>No data Found</p>`
        }
    }

    searchButton.addEventListener("click", function(){
        const username = usernameInput.value;
        console.log("Logging Username: ", username);
        if (validUsername(username)) {
            
        }
    })

})