
/* NORTHSTAR COLOR STUDIO — AESTHETIC SWITCHER */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".aesthetic-button");
    const preview = document.getElementById("brand-preview");
    const secondarySelect = document.getElementById("secondary-aesthetic");
    if (!preview || !buttons.length) return;

    const themes = {
        editorial: {
            background: "#F9F7F3",
            text: "#252525",
            button: "#252525",
            buttonText: "#FFFFFF",
            font: '"Playfair Display", serif',
            radius: "3px"
        },

        modern: {
            background: "#F0F5FA",
            text: "#20324D",
            button: "#2257A3",
            buttonText: "#FFFFFF",
            font: '"DM Sans", sans-serif',
            radius: "12px"
        },

        organic: {
            background: "#EEF2E8",
            text: "#26392C",
            button: "#416B4D",
            buttonText: "#FFFFFF",
            font: '"Playfair Display", serif',
            radius: "24px"
        },

        chic: {
            background: "#F5F0EB",
            text: "#342B2B",
            button: "#765C57",
            buttonText: "#FFFFFF",
            font: '"Playfair Display", serif',
            radius: "6px"
        },

        minimalist: {
            background: "#FAFAF8",
            text: "#202020",
            button: "#202020",
            buttonText: "#FFFFFF",
            font: '"DM Sans", sans-serif',
            radius: "0px"
        }

    };


    function applyTheme(name) {
        const theme = themes[name];
        if (!theme) return;

        const secondaryName = secondarySelect?.value || "none";
        const secondary = themes[secondaryName];

        const isBlended = secondary && secondaryName !== name;

        // Keep the primary style dominant.
        // Blend in 25% of the secondary color palette.
        preview.style.backgroundColor = isBlended
            ? `color-mix(in srgb, ${theme.background} 75%, ${secondary.background})`
            : theme.background;

        preview.style.color = theme.text;

        const heading = preview.querySelector("h3");
        const previewButton = preview.querySelector(".preview-button");

        if (heading) {
            heading.style.fontFamily = isBlended
                ? secondary.font
                : theme.font;
        }

        if (previewButton) {
            previewButton.style.backgroundColor = isBlended
                ? `color-mix(in srgb, ${theme.button} 75%, ${secondary.button})`
                : theme.button;

            previewButton.style.color = theme.buttonText;
            previewButton.style.borderRadius = theme.radius;
        }


        buttons.forEach(button => {
            const selected = button.dataset.style === name;

            button.classList.toggle("active", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            applyTheme(button.dataset.style);
        });
    });

    if (secondarySelect) {
        secondarySelect.addEventListener("change", () => {
            const activeButton = document.querySelector(
                ".aesthetic-button.active"
            );

            const primaryStyle = activeButton?.dataset.style || "editorial";

            applyTheme(primaryStyle);
        });
    }

    /* CUSTOM BRAND COLOR PICKER */

    const brandColorInput = document.getElementById("brand-color");

    if (brandColorInput) {
        brandColorInput.addEventListener("input", () => {
            const previewButton = preview.querySelector(".preview-button");

            if (previewButton) {
                previewButton.style.backgroundColor = brandColorInput.value;
            }
        });
    }

    applyTheme("editorial");

});
