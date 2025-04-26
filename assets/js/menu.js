// document.addEventListener("DOMContentLoaded", function () {
//     const menuPrincipal = document.querySelector(".menu-principal");
//     const menuSecundario = document.querySelector(".menu-secundario");
//     const submenuContainer = document.getElementById("submenu-container");
//     const submenuContent = document.getElementById("submenu-content");
//     const submenuCategories = document.getElementById("submenu-categories");
//     const categoryListsContainer = submenuCategories.querySelector(".category-lists");
//     const overlay = document.getElementById("overlay-bg");

//     let vindoDeTodasAsCategorias = false;

//     function expandirOverlay() {
//         overlay.style.height = "100vh";
//     }

//     function retrairOverlay() {
//         overlay.style.height = "10vh";
//     }

//     function openSubmenuLateral() {
//         submenuContainer.style.display = "block";
//         submenuCategories.classList.remove("hidden");

//         const rectPrincipalItem = menuPrincipal.querySelector(".todas-categorias").getBoundingClientRect();
//         submenuContainer.style.top = `${rectPrincipalItem.bottom + window.scrollY + 90}px`;
//         submenuContainer.style.left = `${rectPrincipalItem.left + 10}px`;

//         const primeiroDepartamento = submenuContent.querySelector(".submenu-item:first-child");
//         if (primeiroDepartamento) {
//             primeiroDepartamento.classList.add("active-blue");
//         } else {
//             submenuContent.querySelectorAll(".submenu-item").forEach(item => item.classList.remove("active-blue"));
//         }
//     }

//     function openSubmenuCategories(departamentoId, departamentoNome = "", exibirTitulo = true) {
//         submenuCategories.style.display = "flex";
//         submenuCategories.classList.remove("hidden");

//         const rectSubmenuContainer = submenuContainer.getBoundingClientRect();
//         submenuCategories.style.left = `${rectSubmenuContainer.right + window.scrollX + 15}px`;
//         submenuCategories.style.top = `${rectSubmenuContainer.top + window.scrollY}px`;

//         const h1 = submenuCategories.querySelector("h1") || document.createElement("h1");
//         if (!submenuCategories.querySelector("h1")) {
//             submenuCategories.insertBefore(h1, submenuCategories.firstChild);
//         }

//         if (exibirTitulo) {
//             h1.style.display = "block";
//             h1.textContent = departamentoNome;
//         } else {
//             h1.style.display = "none";
//         }

//         // Oculta todas as listas
//         categoryListsContainer.querySelectorAll("ul").forEach(ul => {
//             ul.style.display = "none";
//         });

//         // Mostra listas correspondentes ao departamento
//         const matchingLists = categoryListsContainer.querySelectorAll(`ul[data-departamento-id="${departamentoId}"]`);
//         if (matchingLists.length > 0) {
//             matchingLists.forEach((ul) => {
//                 ul.style.display = "block";
//             });
//         } else {
//             // Mostra todas as listas caso o departamento não tenha ID correspondente
//             categoryListsContainer.querySelectorAll("ul").forEach(ul => {
//                 ul.style.display = "block";
//             });
//         }
//     }

//     menuPrincipal.addEventListener("click", function (event) {
//         document.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));

//         if (event.target.classList.contains("todas-categorias")) {
//             const jaAberto = !menuSecundario.classList.contains("hidden");

//             if (jaAberto) {
//                 menuSecundario.classList.add("hidden");
//                 submenuContainer.style.display = "none";
//                 submenuCategories.style.display = "none";
//                 retrairOverlay();
//                 return;
//             }

//             vindoDeTodasAsCategorias = true;
//             expandirOverlay();

//             menuSecundario.innerHTML = '';
//             menuPrincipal.querySelectorAll("li").forEach(item => {
//                 menuSecundario.appendChild(item.cloneNode(true));
//             });
//             menuSecundario.classList.remove("hidden");

//             const todasCategoriasSegundoMenu = menuSecundario.querySelector(".todas-categorias");
//             if (todasCategoriasSegundoMenu) {
//                 todasCategoriasSegundoMenu.classList.add("active-blue");
//             }

//             openSubmenuLateral();

//             const primeiroSubmenuItem = submenuContent.querySelector(".submenu-item:first-child");
//             if (primeiroSubmenuItem) {
//                 primeiroSubmenuItem.classList.add("active-blue");
//                 openSubmenuCategories(primeiroSubmenuItem.dataset.categoria, primeiroSubmenuItem.textContent.trim(), false);
//             } else {
//                 submenuCategories.style.display = "none";
//             }

//         } else if (event.target.classList.classList.contains("menu-item")) {
//             vindoDeTodasAsCategorias = false;

//             expandirOverlay();

//             menuSecundario.innerHTML = '';
//             menuPrincipal.querySelectorAll("li").forEach(item => {
//                 menuSecundario.appendChild(item.cloneNode(true));
//             });
//             menuSecundario.classList.remove("hidden");
//             event.target.classList.add("active-blue");

//             submenuContainer.style.display = "none";

//             const departamentoId = event.target.dataset.departamento;
//             if (departamentoId) {
//                 const departamentoNome = event.target.textContent.trim();
//                 openSubmenuCategories(departamentoId, departamentoNome);
//             } else {
//                 submenuCategories.style.display = "none";
//             }
//         } else {
//             menuSecundario.classList.add("hidden");
//             submenuContainer.style.display = "none";
//             submenuCategories.style.display = "none";
//             retrairOverlay();
//         }
//     });

//     menuSecundario.addEventListener("click", function (event) {
//         menuSecundario.querySelectorAll(".menu-item, .todas-categorias").forEach(item => item.classList.remove("active-blue"));

//         if (event.target.classList.contains("menu-item")) {
//             vindoDeTodasAsCategorias = false;

//             event.target.classList.add("active-blue");

//             const departamentoId = event.target.dataset.departamento;
//             const departamentoNome = event.target.textContent.trim();

//             if (departamentoId) {
//                 openSubmenuCategories(departamentoId, departamentoNome);
//             } else {
//                 submenuCategories.style.display = "none";
//             }

//             submenuContainer.style.display = "none";
//         } else if (event.target.classList.contains("todas-categorias")) {
//             vindoDeTodasAsCategorias = true;

//             event.target.classList.add("active-blue");
//             openSubmenuLateral();

//             const primeiroSubmenuItem = submenuContent.querySelector(".submenu-item:first-child");
//             if (primeiroSubmenuItem) {
//                 primeiroSubmenuItem.classList.add("active-blue");
//                 openSubmenuCategories(primeiroSubmenuItem.dataset.categoria, primeiroSubmenuItem.textContent.trim(), false);
//             } else {
//                 submenuCategories.style.display = "none";
//             }
//         }
//     });

//     submenuContent.addEventListener("click", function (event) {
//         submenuContent.querySelectorAll(".submenu-item").forEach(item => item.classList.remove("active-blue"));
//         if (event.target.tagName === "LI") {
//             event.target.classList.add("active-blue");
//             openSubmenuCategories(
//                 event.target.dataset.categoria,
//                 event.target.textContent.trim(),
//                 !vindoDeTodasAsCategorias
//             );
//         }
//     });

//     document.addEventListener("click", function (event) {
//         if (!menuPrincipal.contains(event.target) &&
//             !menuSecundario.contains(event.target) &&
//             !submenuContainer.contains(event.target) &&
//             !submenuCategories.contains(event.target)) {

//             menuSecundario.classList.add("hidden");
//             submenuContainer.style.display = "none";
//             submenuCategories.style.display = "none";
//             retrairOverlay();

//             submenuContent.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));
//             submenuCategories.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));
//             menuSecundario.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));
//         }
//     });

//     menuSecundario.classList.add("hidden");
//     submenuContainer.style.display = "none";
//     submenuCategories.classList.add("hidden");
//     retrairOverlay();
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuPrincipal = document.querySelector(".menu-principal");
    const submenuContainer = document.getElementById("submenu-container");
    const submenuContent = document.getElementById("submenu-content");
    const submenuCategories = document.getElementById("submenu-categories");
    const categoryListsContainer = submenuCategories.querySelector(".category-lists");
    const overlay = document.getElementById("overlay-bg");

    let vindoDeTodasAsCategorias = false;

    function expandirOverlay() {
        overlay.style.height = "100vh";
    }

    function retrairOverlay() {
        overlay.style.height = "10vh";
    }

    function openSubmenuLateral() {
        submenuContainer.style.display = "block";
        submenuCategories.classList.remove("hidden");

        const rectPrincipalItem = menuPrincipal.querySelector(".todas-categorias").getBoundingClientRect();
        submenuContainer.style.top = `${rectPrincipalItem.bottom + window.scrollY + 90}px`;
        submenuContainer.style.left = `${rectPrincipalItem.left + 10}px`;

        const primeiroDepartamento = submenuContent.querySelector(".submenu-item:first-child");
        if (primeiroDepartamento) {
            primeiroDepartamento.classList.add("active-blue");
        } else {
            submenuContent.querySelectorAll(".submenu-item").forEach(item => item.classList.remove("active-blue"));
        }
    }

    function openSubmenuCategories(departamentoId, departamentoNome = "", exibirTitulo = true, elementoReferencia = null) {
        submenuCategories.style.display = "flex";
        submenuCategories.classList.remove("hidden");

        if (elementoReferencia) {
            // Alinha à direita do item clicado ("Todas as categorias")
            const rect = elementoReferencia.getBoundingClientRect();
            const topRef = rect.top + window.scrollY;
            const leftRef = rect.right + window.scrollX;


              submenuCategories.style.left = `${leftRef + 10}px`; 
              submenuCategories.style.top = `${topRef + 134}px`;
              submenuCategories.style.transform = "translateY(0)";

        } else {

            submenuCategories.style.left = "50%";
            submenuCategories.style.top = "280px";
            submenuCategories.style.transform = "translate(-50%, 0)";

        }

        const h1 = submenuCategories.querySelector("h1") || document.createElement("h1");
        if (!submenuCategories.querySelector("h1")) {
            submenuCategories.insertBefore(h1, submenuCategories.firstChild);
        }

        if (exibirTitulo) {
            h1.style.display = "block";
            h1.textContent = departamentoNome;
        } else {
            h1.style.display = "none";
        }

        categoryListsContainer.querySelectorAll("ul").forEach(ul => ul.style.display = "none");

        const matchingLists = categoryListsContainer.querySelectorAll(`ul[data-departamento-id="${departamentoId}"]`);
        if (matchingLists.length > 0) {
            matchingLists.forEach((ul) => ul.style.display = "block");
        } else {
            categoryListsContainer.querySelectorAll("ul").forEach(ul => ul.style.display = "block");
        }
    }

    menuPrincipal.addEventListener("click", function (event) {
        const isTodasCategorias = event.target.classList.contains("todas-categorias");
        const isMenuItem = event.target.classList.contains("menu-item");

        document.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));

        if (isTodasCategorias) {
            const submenuAberto = submenuContainer.style.display === "block";

            if (submenuAberto) {
                submenuContainer.style.display = "none";
                submenuCategories.style.display = "none";
                retrairOverlay();
                return;
            }

            vindoDeTodasAsCategorias = true;
            expandirOverlay();

            event.target.classList.add("active-blue");

            openSubmenuLateral();

            const primeiroSubmenuItem = submenuContent.querySelector(".submenu-item:first-child");
            if (primeiroSubmenuItem) {
                primeiroSubmenuItem.classList.add("active-blue");
                openSubmenuCategories(primeiroSubmenuItem.dataset.categoria, primeiroSubmenuItem.textContent.trim(), false, event.target);
            } else {
                submenuCategories.style.display = "none";
            }

        } else if (isMenuItem) {
            vindoDeTodasAsCategorias = false;
            expandirOverlay();

            event.target.classList.add("active-blue");
            submenuContainer.style.display = "none";

            const departamentoId = event.target.dataset.departamento;
            if (departamentoId) {
                const departamentoNome = event.target.textContent.trim();
                openSubmenuCategories(departamentoId, departamentoNome, true, null);
            } else {
                submenuCategories.style.display = "none";
            }
        } else {
            submenuContainer.style.display = "none";
            submenuCategories.style.display = "none";
            retrairOverlay();
        }
    });

    submenuContent.addEventListener("click", function (event) {
        submenuContent.querySelectorAll(".submenu-item").forEach(item => item.classList.remove("active-blue"));
        if (event.target.tagName === "LI") {
            event.target.classList.add("active-blue");
            openSubmenuCategories(
                event.target.dataset.categoria,
                event.target.textContent.trim(),
                !vindoDeTodasAsCategorias,
                vindoDeTodasAsCategorias ? menuPrincipal.querySelector(".todas-categorias") : null
            );
        }
    });

    document.addEventListener("click", function (event) {
        if (
            !menuPrincipal.contains(event.target) &&
            !submenuContainer.contains(event.target) &&
            !submenuCategories.contains(event.target)
        ) {
            submenuContainer.style.display = "none";
            submenuCategories.style.display = "none";
            retrairOverlay();

            submenuContent.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));
            submenuCategories.querySelectorAll(".active-blue").forEach(el => el.classList.remove("active-blue"));
        }
    });

    submenuContainer.style.display = "none";
    submenuCategories.classList.add("hidden");
    retrairOverlay();
});

