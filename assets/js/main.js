const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navItemE = $$(".navbar__item");

for (const item of navItemE) {
    item.onclick = () => {
        const checkE = $(".navbar__item.active");
        if (checkE) {
            checkE.classList.remove("active");
        }

        item.classList.add("active");
    };
}
