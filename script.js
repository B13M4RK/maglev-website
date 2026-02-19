const menuButton = document.getElementById("menu-button");
        const menuList = document.getElementById("menu-list");

        menuButton.addEventListener("click", () => {
            menuList.classList.toggle("open");
        });

        const submenuButton1 = document.getElementById("submenu-button-1");
        const submenuList1 = document.getElementById("submenu-list-1");

        submenuButton1.addEventListener("click", () => {
            submenuList1.classList.toggle("open");
        });

        const submenuButton2 = document.getElementById("submenu-button-2");
        const submenuList2 = document.getElementById("submenu-list-2");

        submenuButton2.addEventListener("click", () => {
            submenuList2.classList.toggle("open");
        });

        const submenuButton3 = document.getElementById("submenu-button-3");
        const submenuList3 = document.getElementById("submenu-list-3");

        submenuButton3.addEventListener("click", () => {
            submenuList3.classList.toggle("open");
        });