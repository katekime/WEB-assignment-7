const selector = document.getElementById("language-selector");
    const translations = {
        en: {
            heroTitle: "The Witcher",
            heroDesc: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny.",
            watchBtn: "▶ Watch Movie",
            moreInfoBtn: "More Info"
        },
        ru: {
            heroTitle: "Ведьмак",
            heroDesc: "Геральт из Ривии, мутированный охотник на монстров, идет к своей судьбе.",
            watchBtn: "▶ Смотреть фильм",
            moreInfoBtn: "Подробнее"
        },
        kz: {
            heroTitle: "Витчер",
            heroDesc: "Ривияның Геральті, жалдамалы монстр аулаушы, тағдырына қарай жол тартады.",
            watchBtn: "▶ Фильмді көру",
            moreInfoBtn: "Көбірек ақпарат"
        }
    };

    selector.addEventListener("change", (e) => {
        const lang = e.target.value;
        document.querySelector(".highlighted-text").textContent = translations[lang].heroTitle;
        document.querySelector(".hero-content p").textContent = translations[lang].heroDesc;
        document.querySelector(".btn-primary").textContent = translations[lang].watchBtn;
        document.querySelector(".btn-secondary").textContent = translations[lang].moreInfoBtn;
    });