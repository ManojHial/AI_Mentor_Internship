
        function showLogin() {
            const popup = document.getElementById("loginbox");
            popup.style.display = popup.style.display === "flex" ? "none" : "flex";
            popup.style.display === "flex" && (popup.style.display = "flex");
        }