
function toggleResponsiveNav() {
    var x = document.getElementById("navBar");
        if (x.className === "banner") {
            x.className += " responsive";
        } else {
            x.className = "banner";
        }
    }
