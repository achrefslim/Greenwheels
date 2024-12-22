// Function to toggle sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Close the sidebar
    } else {
        sidebar.style.left = "0px"; // Open the sidebar
    }
}
