
/* NORTHSTAR COLOR STUDIO — AESTHETIC SWITCHER */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".aesthetic-button");
    const preview = document.getElementById("brand-preview");
    const secondarySelect = document.getElementById("secondary-aesthetic");

    let customBrandColor = null;
    let appliedPaletteName = null;

    let recentColors = JSON.parse(
        localStorage.getItem("northstarRecentColors") || "[]"
    );



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


    /* NORTHSTAR — PALETTE LIBRARY */

    const paletteLibrary = {
        editorial: [
            {
                name: "Timeless Editorial",
                description: "Sophisticated, neutral and refined.",
                colors: {
                    primary: "#252525",
                    secondary: "#74665A",
                    accent: "#B89B65",
                    background: "#F9F7F3",
                    text: "#252525"
                }
            },
            {
                name: "Soft Editorial",
                description: "Warm, inviting and understated.",
                colors: {
                    primary: "#79645D",
                    secondary: "#B8A99A",
                    accent: "#D4B69B",
                    background: "#FAF5EF",
                    text: "#382F2B"
                }
            },
            {
                name: "Bold Editorial",
                description: "Expressive, dramatic and confident.",
                colors: {
                    primary: "#243348",
                    secondary: "#8D4545",
                    accent: "#C5A46D",
                    background: "#F5F2ED",
                    text: "#20242B"
                }
            },
            {
                name: "Cool Editorial",
                description: "Sophisticated, understated, and contemporary.",
                colors: {
                    primary: "#35465B",
                    secondary: "#64748B",
                    accent: "#B9C9D8",
                    background: "#F3F6F9",
                    text: "#253244"
                }
            },
            {
                name: "Pastel Editorial",
                description: "Delicate, romantic, and refined.",
                colors: {
                    primary: "#805D70",
                    secondary: "#77658C",
                    accent: "#E8CBD9",
                    background: "#FCF6F8",
                    text: "#45333F"
                }
            },
            {
                name: "Vibrant Editorial",
                description: "Expressive, artistic, and confident.",
                colors: {
                    primary: "#A12D45",
                    secondary: "#285A75",
                    accent: "#E9B949",
                    background: "#FFF8EE",
                    text: "#30252B"
                }
            }
        ],
        modern: [

            {
                name: "Clean Modern",
                description: "Professional, structured and contemporary.",
                colors: {
                    primary: "#2257A3",
                    secondary: "#64748B",
                    accent: "#38A3A5",
                    background: "#F0F5FA",
                    text: "#20324D"
                }
            },
            {
                name: "Soft Modern",
                description: "Approachable, calm and refined.",
                colors: {
                    primary: "#526D82",
                    secondary: "#9BAEBF",
                    accent: "#C8A9A0",
                    background: "#F5F7FA",
                    text: "#293847"
                }
            },
            {
                name: "Bold Modern",
                description: "Dynamic, innovative and confident.",
                colors: {
                    primary: "#4338CA",
                    secondary: "#172554",
                    accent: "#F59E0B",
                    background: "#F8FAFC",
                    text: "#172033"
                }
            },
            {
                name: "Warm Modern",
                description: "Contemporary, inviting, and sophisticated.",
                colors: {
                    primary: "#80513B",
                    secondary: "#6B6257",
                    accent: "#D9AD78",
                    background: "#FAF5EF",
                    text: "#332B26"
                }
            },
            {
                name: "Neutral Modern",
                description: "Balanced, architectural, and understated.",
                colors: {
                    primary: "#414141",
                    secondary: "#666666",
                    accent: "#C4C0B8",
                    background: "#F5F5F3",
                    text: "#262626"
                }
            },
            {
                name: "Pastel Modern",
                description: "Fresh, approachable, and playful.",
                colors: {
                    primary: "#62558C",
                    secondary: "#426C75",
                    accent: "#D9C9EF",
                    background: "#F5F7FC",
                    text: "#30364A"
                }
            }
        ],
        organic: [

            {
                name: "Earthy Organic",
                description: "Natural, grounded and balanced.",
                colors: {
                    primary: "#416B4D",
                    secondary: "#839478",
                    accent: "#C49A6C",
                    background: "#EEF2E8",
                    text: "#26392C"
                }
            },
            {
                name: "Soft Organic",
                description: "Gentle, airy and restful.",
                colors: {
                    primary: "#74836B",
                    secondary: "#C4CDB8",
                    accent: "#D8BBA5",
                    background: "#F7F5EF",
                    text: "#354035"
                }
            },
            {
                name: "Rich Organic",
                description: "Botanical, warm and expressive.",
                colors: {
                    primary: "#294D3B",
                    secondary: "#98634D",
                    accent: "#C9A45C",
                    background: "#F3EFE5",
                    text: "#28352D"
                }
            },
            {
                name: "Coastal Organic",
                description: "Calming, fluid, and inspired by the ocean.",
                colors: {
                    primary: "#365F68",
                    secondary: "#526B76",
                    accent: "#A8C9CC",
                    background: "#F0F6F5",
                    text: "#263E43"
                }
            },
            {
                name: "Botanical Pastel",
                description: "Delicate, fresh, and inspired by spring gardens.",
                colors: {
                    primary: "#526B4C",
                    secondary: "#806478",
                    accent: "#E5C9D7",
                    background: "#F7F8F0",
                    text: "#303D2F"
                }
            },
            {
                name: "Vibrant Organic",
                description: "Expressive, energetic, and inspired by tropical landscapes.",
                colors: {
                    primary: "#286347",
                    secondary: "#A14B30",
                    accent: "#E6BD56",
                    background: "#FFF8E9",
                    text: "#293B2D"
                }
            }
        ],
        chic: [

            {
                name: "Classic Chic",
                description: "Elegant, polished and timeless.",
                colors: {
                    primary: "#765C57",
                    secondary: "#A58D82",
                    accent: "#C4A77D",
                    background: "#F5F0EB",
                    text: "#342B2B"
                }
            },
            {
                name: "Soft Chic",
                description: "Delicate, romantic and refined.",
                colors: {
                    primary: "#916B78",
                    secondary: "#C9A8B2",
                    accent: "#D8C3A5",
                    background: "#FCF6F5",
                    text: "#49343D"
                }
            },
            {
                name: "Luxe Chic",
                description: "Luxurious, dramatic and sophisticated.",
                colors: {
                    primary: "#3C2938",
                    secondary: "#75606B",
                    accent: "#C5A46D",
                    background: "#F5F0EC",
                    text: "#30262D"
                }
            },
            {
                name: "Cool Chic",
                description: "Polished, graceful, and quietly luxurious.",
                colors: {
                    primary: "#55536F",
                    secondary: "#596B7C",
                    accent: "#C9C6DF",
                    background: "#F5F4F9",
                    text: "#343344"
                }
            },
            {
                name: "Neutral Chic",
                description: "Timeless, refined, and effortlessly elegant.",
                colors: {
                    primary: "#49443F",
                    secondary: "#6D665F",
                    accent: "#D2C9BD",
                    background: "#F8F6F2",
                    text: "#302D2A"
                }
            },
            {
                name: "Vibrant Chic",
                description: "Fashion-forward, expressive, and luxurious.",
                colors: {
                    primary: "#942D60",
                    secondary: "#594478",
                    accent: "#E6B85C",
                    background: "#FFF5F8",
                    text: "#392536"
                }
            }
        ],
        minimalist: [

            {
                name: "Pure Minimalist",
                description: "Clean, timeless and monochromatic.",
                colors: {
                    primary: "#202020",
                    secondary: "#737373",
                    accent: "#BDBDBD",
                    background: "#FAFAF8",
                    text: "#202020"
                }
            },
            {
                name: "Warm Minimalist",
                description: "Natural, quiet and understated.",
                colors: {
                    primary: "#62594F",
                    secondary: "#A69D90",
                    accent: "#D4C8B8",
                    background: "#F7F5F0",
                    text: "#332F2B"
                }
            },
            {
                name: "Cool Minimalist",
                description: "Crisp, calm and contemporary.",
                colors: {
                    primary: "#344454",
                    secondary: "#8796A5",
                    accent: "#B9C9D4",
                    background: "#F5F8FA",
                    text: "#25313C"
                }

            },
            {
                name: "Pastel Minimalist",
                description: "Airy, gentle, and quietly expressive.",
                colors: {
                    primary: "#62617D",
                    secondary: "#536D75",
                    accent: "#DED6ED",
                    background: "#FAF9FC",
                    text: "#33333F"
                }
            },
            {
                name: "Vibrant Minimalist",
                description: "Clean, confident, with purposeful pops of color.",
                colors: {
                    primary: "#294BC4",
                    secondary: "#404040",
                    accent: "#F4C84B",
                    background: "#FAFAFA",
                    text: "#202020"
                }
            },
            {
                name: "Earthy Minimalist",
                description: "Natural, grounded, and intentionally simple.",
                colors: {
                    primary: "#5D6249",
                    secondary: "#78614E",
                    accent: "#D6C5A7",
                    background: "#F7F5EE",
                    text: "#35382D"
                }
            }
        ]
    };


    /* NORTHSTAR — WCAG CONTRAST CALCULATOR */

    function getRelativeLuminance(hex) {

        const rgb = hex.replace("#", "")
            .match(/.{2}/g)
            .map(value => parseInt(value, 16) / 255);

        const linearRGB = rgb.map(value => {
            return value <= 0.04045
                ? value / 12.92
                : Math.pow((value + 0.055) / 1.055, 2.4);
        });

        return (
            linearRGB[0] * 0.2126 +
            linearRGB[1] * 0.7152 +
            linearRGB[2] * 0.0722
        );
    }

    function getContrastRatio(color1, color2) {

        const luminance1 = getRelativeLuminance(color1);
        const luminance2 = getRelativeLuminance(color2);

        const lighter = Math.max(luminance1, luminance2);
        const darker = Math.min(luminance1, luminance2);

        return (lighter + 0.05) / (darker + 0.05);
    }

    /* NORTHSTAR — PALETTE ACCESSIBILITY EVALUATION */

    function evaluatePalette(palette) {

        const colors = palette.colors;

        const combinations = [
            {
                name: "Body text",
                foreground: colors.text,
                background: colors.background
            },
            {
                name: "Primary button",
                foreground: "#FFFFFF",
                background: colors.primary
            },
            {
                name: "Secondary button",
                foreground: "#FFFFFF",
                background: colors.secondary
            },
            {
                name: "Accent label",
                foreground: "#252525",
                background: colors.accent
            }
        ];

        const results = combinations.map(combination => {

            const ratio = getContrastRatio(
                combination.foreground,
                combination.background
            );

            return {
                ...combination,
                ratio: ratio,
                passesAA: ratio >= 4.5,
                passesAAA: ratio >= 7
            };
        });

        return results;
    }

    /* NORTHSTAR — PALETTE TEMPERATURE CLASSIFICATION */

    const paletteTemperatures = {

        // Editorial
        "Timeless Editorial": "neutral",
        "Soft Editorial": "warm",
        "Bold Editorial": "warm",

        "Cool Editorial": "cool",
        "Pastel Editorial": "warm",
        "Vibrant Editorial": "warm",

        // Modern
        "Clean Modern": "cool",
        "Soft Modern": "cool",
        "Bold Modern": "cool",

        "Warm Modern": "warm",
        "Neutral Modern": "neutral",
        "Pastel Modern": "cool",

        // Organic
        "Earthy Organic": "warm",
        "Soft Organic": "neutral",
        "Rich Organic": "warm",

        "Coastal Organic": "cool",
        "Botanical Pastel": "neutral",
        "Vibrant Organic": "warm",

        // Chic
        "Classic Chic": "warm",
        "Soft Chic": "warm",
        "Luxe Chic": "warm",

        "Cool Chic": "cool",
        "Neutral Chic": "neutral",
        "Vibrant Chic": "warm",

        // Minimalist
        "Pure Minimalist": "neutral",
        "Warm Minimalist": "warm",
        "Cool Minimalist": "cool",

        "Pastel Minimalist": "cool",
        "Vibrant Minimalist": "cool",
        "Earthy Minimalist": "warm"


    };

    let selectedTemperature = "any";

    /* NORTHSTAR — PALETTE MOOD CLASSIFICATION */

    const paletteMoods = {

        // Editorial
        "Timeless Editorial": ["muted", "bold"],
        "Soft Editorial": ["soft", "muted", "earthy"],
        "Bold Editorial": ["bold", "muted"],

        "Cool Editorial": ["muted", "soft"],
        "Pastel Editorial": ["pastel", "soft"],
        "Vibrant Editorial": ["vibrant", "bold"],

        // Modern
        "Clean Modern": ["vibrant", "bold"],
        "Soft Modern": ["soft", "muted"],
        "Bold Modern": ["vibrant", "bold"],

        "Warm Modern": ["earthy", "muted"],
        "Neutral Modern": ["muted", "bold"],
        "Pastel Modern": ["pastel", "soft"],

        // Organic
        "Earthy Organic": ["earthy", "muted"],
        "Soft Organic": ["soft", "muted", "earthy"],
        "Rich Organic": ["earthy", "bold"],

        "Coastal Organic": ["soft", "muted"],
        "Botanical Pastel": ["pastel", "soft", "earthy"],
        "Vibrant Organic": ["vibrant", "bold", "earthy"],

        // Chic
        "Classic Chic": ["soft", "muted"],
        "Soft Chic": ["soft", "muted", "pastel"],
        "Luxe Chic": ["bold", "muted"],

        "Cool Chic": ["soft", "muted"],
        "Neutral Chic": ["muted", "earthy"],
        "Vibrant Chic": ["vibrant", "bold"],

        // Minimalist
        "Pure Minimalist": ["muted"],
        "Warm Minimalist": ["soft", "muted", "earthy"],
        "Cool Minimalist": ["soft", "muted"],

        "Pastel Minimalist": ["pastel", "soft"],
        "Vibrant Minimalist": ["vibrant", "bold"],
        "Earthy Minimalist": ["earthy", "muted"]
    };

    let selectedMood = "any";

    /* NORTHSTAR — COLOR BLENDING ENGINE */

    function blendColors(primaryColor, secondaryColor, weight = 0.75) {

        const channels = [1, 3, 5].map(index => {

            const primary = parseInt(
                primaryColor.slice(index, index + 2),
                16
            );

            const secondary = parseInt(
                secondaryColor.slice(index, index + 2),
                16
            );

            const blended = Math.round(
                primary * weight +
                secondary * (1 - weight)
            );

            return blended.toString(16).padStart(2, "0");

        });

        return "#" + channels.join("").toUpperCase();

    }

    /* NORTHSTAR — HYBRID PALETTE GENERATOR */

    function generateHybridPalette(
        primaryPalette,
        secondaryPalette,
        weight = 0.75
    ) {

        const colors = {};

        const colorRoles = [
            "primary",
            "secondary",
            "accent",
            "background",
            "text"
        ];

        colorRoles.forEach(role => {

            colors[role] = blendColors(
                primaryPalette.colors[role],
                secondaryPalette.colors[role],
                weight
            );

        });

        return {

            name: `${primaryPalette.name} + ${secondaryPalette.name}`,

            description: `A custom blend of ${primaryPalette.name} and ${secondaryPalette.name}.`,

            colors: colors,

            isHybrid: true,

            primarySource: primaryPalette.name,

            secondarySource: secondaryPalette.name,

            blendWeight: weight

        };

    }

    /* NORTHSTAR — HYBRID PALETTE RECOMMENDATIONS */

    function generateHybridRecommendations(
        primaryAesthetic,
        secondaryAesthetic,
        weight = 0.75
    ) {

        if (
            !secondaryAesthetic ||
            secondaryAesthetic === "none" ||
            primaryAesthetic === secondaryAesthetic
        ) {
            return [];
        }

        const primaryPalettes =
            paletteLibrary[primaryAesthetic] || [];

        const secondaryPalettes =
            paletteLibrary[secondaryAesthetic] || [];

        const hybridPalettes = [];

        const totalPairs = Math.min(
            primaryPalettes.length,
            secondaryPalettes.length
        );

        for (let i = 0; i < totalPairs; i++) {

            const hybrid = generateHybridPalette(
                primaryPalettes[i],
                secondaryPalettes[i],
                weight
            );

            hybridPalettes.push(hybrid);

        }

        return hybridPalettes;

    }

    /* NORTHSTAR — DISPLAY SUGGESTED PALETTES */

    function renderPalettes(aesthetic) {
        const container = document.getElementById("palette-suggestions");

        if (!container) return;



        /* NORTHSTAR — COMBINED AESTHETIC RECOMMENDATIONS */

        const secondaryAesthetic = secondarySelect?.value || "none";

        const primaryPalettes = paletteLibrary[aesthetic] || [];

        const secondaryPalettes =
            secondaryAesthetic !== "none" &&
                secondaryAesthetic !== aesthetic
                ? paletteLibrary[secondaryAesthetic] || []
                : [];

        const allPalettes = [
            ...primaryPalettes,
            ...secondaryPalettes
        ];


        const filterValue =
            document.getElementById("palette-filter")?.value || "all";

        const palettes = allPalettes.filter(palette => {

            /* FILTER BY COLOR TEMPERATURE */

            const matchesTemperature =
                selectedTemperature === "any" ||
                paletteTemperatures[palette.name] === selectedTemperature;

            if (!matchesTemperature) {
                return false;
            }

            /* FILTER BY COLOR MOOD */

            const matchesMood =
                selectedMood === "any" ||
                (paletteMoods[palette.name] || []).includes(selectedMood);

            if (!matchesMood) {
                return false;
            }

            const results = evaluatePalette(palette);

            const allPassing = results.every(
                item => item.passesAA
            );

            if (filterValue === "passing") {
                return allPassing;
            }

            if (filterValue === "needs-improvement") {
                return !allPassing;
            }

            return true;
        });


        container.innerHTML = "";

        /* PALETTE FILTER EMPTY STATE */

        if (palettes.length === 0) {

            const emptyState = document.createElement("div");

            emptyState.className = "palette-empty-state";



            emptyState.innerHTML = `
    <h5>No matching palettes</h5>

    <p>
        No suggested palettes match your current
        design and accessibility preferences.
    </p>

    <p>
        Try a different color temperature,
        color mood, or accessibility filter.
        You can also explore all palettes
        for this aesthetic.
    </p>
`;



            const showAllButton = document.createElement("button");

            showAllButton.type = "button";
            showAllButton.className = "show-all-palettes-button";
            showAllButton.textContent = "Show all palettes";

            showAllButton.addEventListener("click", () => {

                const filter = document.getElementById("palette-filter");


                if (filter) {
                    filter.value = "all";
                }

                /* RESET COLOR TEMPERATURE */

                selectedTemperature = "any";

                document.querySelectorAll(".temperature-button").forEach(button => {

                    const isSelected =
                        button.dataset.temperature === "any";

                    button.classList.toggle("active", isSelected);

                    button.setAttribute(
                        "aria-pressed",
                        String(isSelected)
                    );

                });

                /* RESET COLOR MOOD */

                selectedMood = "any";

                document.querySelectorAll(".mood-button").forEach(button => {

                    const isSelected =
                        button.dataset.mood === "any";

                    button.classList.toggle("active", isSelected);

                    button.setAttribute(
                        "aria-pressed",
                        String(isSelected)
                    );

                });

                renderPalettes(aesthetic);

                filter?.focus();


            });

            emptyState.appendChild(showAllButton);

            container.appendChild(emptyState);

            return;
        }

        palettes.forEach(palette => {
            const card = document.createElement("div");

            card.className = "palette-card";

            card.innerHTML = `
            <h5 class="palette-name">${palette.name}</h5>

            <p>${palette.description}</p>

            <div class="palette-swatches">
                ${Object.entries(palette.colors).map(([role, color]) => `
                    <div class="palette-color">

                        <div class="palette-swatch"
                            style="background-color: ${color}">
                        </div>

                        <span class="palette-role">
                            ${role.charAt(0).toUpperCase() + role.slice(1)}
                        </span>

                        <span class="palette-hex">
                            ${color}
                        </span>

                    </div>
                `).join("")}
            </div>
        `;

            /* NORTHSTAR — PALETTE CLASSIFICATION LABELS */

            const temperature = paletteTemperatures[palette.name] || "neutral";

            const moods = paletteMoods[palette.name] || [];

            const classification = document.createElement("div");

            classification.className = "palette-classification";

            classification.innerHTML = `
    <div class="palette-classification-group">

        <h6>Temperature</h6>

        <div class="palette-tags">

            <span class="palette-tag temperature-tag"
                data-temperature="${temperature}">

                ${temperature.charAt(0).toUpperCase() + temperature.slice(1)}

            </span>

        </div>

    </div>

    <div class="palette-classification-group">

        <h6>Color moods</h6>

        <div class="palette-tags">

            ${moods.map(mood => `
                <span class="palette-tag mood-tag">

                    ${mood.charAt(0).toUpperCase() + mood.slice(1)}

                </span>
            `).join("")}

        </div>

    </div>
`;

            card.appendChild(classification);

            /* PALETTE ACCESSIBILITY SUMMARY */

            const paletteResults = evaluatePalette(palette);

            const passingCount = paletteResults.filter(
                item => item.passesAA
            ).length;

            const accessibilitySummary = document.createElement("div");

            accessibilitySummary.className = "palette-accessibility";

            accessibilitySummary.innerHTML = `
    <div class="palette-accessibility-header">

        <h6>WCAG AA contrast</h6>

        <span class="palette-accessibility-score">
            ${passingCount} of ${paletteResults.length} pass
        </span>

    </div>

    <div class="palette-accessibility-results">

        ${paletteResults.map(item => `
            <div class="palette-accessibility-row">

                <span>${item.name}</span>

                <span>${item.ratio.toFixed(2)}:1</span>

                <span class="${item.passesAA
                    ? "palette-pass"
                    : "palette-fail"}">

                    ${item.passesAA ? "✓ Pass" : "✕ Fail"}

                </span>

            </div>
        `).join("")}

    </div>
`;

            card.appendChild(accessibilitySummary);

            const applyButton = document.createElement("button");

            applyButton.type = "button";
            applyButton.className = "apply-palette-button";
            applyButton.textContent = "Apply palette";
            applyButton.setAttribute("aria-pressed", "false");
            applyButton.addEventListener("click", () => {

                document.querySelectorAll(".palette-card").forEach(item => {
                    item.classList.remove("active");
                });

                document.querySelectorAll(".apply-palette-button").forEach(button => {
                    button.textContent = "Apply palette";
                    button.setAttribute("aria-pressed", "false");
                });



                customBrandColor = palette.colors.primary;

                brandColorInput.value = palette.colors.primary;

                brandColorInput.dispatchEvent(new Event("input"));

                preview.style.backgroundColor = palette.colors.background;

                preview.style.color = palette.colors.text;


                const secondaryButton = preview.querySelector(
                    ".preview-secondary-button"
                );

                const accentLabel = preview.querySelector(
                    ".preview-accent-label"
                );

                /* RESTORE ORIGINAL PALETTE TEXT COLORS */

                const primaryButton = preview.querySelector(".preview-button");
                const bodyText = preview.querySelector("p");

                if (primaryButton) {
                    primaryButton.style.color = "#FFFFFF";
                }

                if (secondaryButton) {
                    secondaryButton.style.color = "#FFFFFF";
                }

                if (accentLabel) {
                    accentLabel.style.color = "#252525";
                }

                if (bodyText) {
                    bodyText.style.color = palette.colors.text;
                }

                if (secondaryButton) {
                    secondaryButton.style.backgroundColor =
                        palette.colors.secondary;
                }

                if (accentLabel) {
                    accentLabel.style.backgroundColor =
                        palette.colors.accent;
                }


                addRecentColor(palette.colors.primary);
                appliedPaletteName = palette.name;
                card.classList.add("active");

                applyButton.textContent = "Applied";
                applyButton.setAttribute("aria-pressed", "true");
            });

            /* RESTORE APPLIED PALETTE SELECTION */

            if (appliedPaletteName === palette.name) {

                card.classList.add("active");

                applyButton.textContent = "Applied";

                applyButton.setAttribute("aria-pressed", "true");

            }

            card.appendChild(applyButton);

            container.appendChild(card);
        });
    }

    function applyTheme(name) {
        const theme = themes[name];
        if (!theme) return;
        appliedPaletteName = null;
        renderPalettes(name);

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
            let activeColor = theme.button;

            if (isBlended) {
                const channels = [1, 3, 5].map(index => {
                    const primary = parseInt(
                        theme.button.slice(index, index + 2), 16
                    );

                    const secondaryColor = parseInt(
                        secondary.button.slice(index, index + 2), 16
                    );

                    return Math.round(
                        primary * 0.75 + secondaryColor * 0.25
                    ).toString(16).padStart(2, "0");
                });

                activeColor = "#" + channels.join("");
            }

            if (customBrandColor) {
                activeColor = customBrandColor;
            }

            previewButton.style.backgroundColor = activeColor;
            previewButton.style.color = theme.buttonText;
            previewButton.style.borderRadius = theme.radius;

            if (brandColorInput) {
                brandColorInput.value = activeColor;
            }

            if (brandColorHex) {
                brandColorHex.textContent = activeColor.toUpperCase();
            }
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

    /* RECENT COLOR HISTORY */

    function addRecentColor(color) {
        color = color.toUpperCase();

        recentColors = recentColors.filter(item => item !== color);

        recentColors.unshift(color);

        recentColors = recentColors.slice(0, 8);

        localStorage.setItem(
            "northstarRecentColors",
            JSON.stringify(recentColors)
        );

        const historyContainer = document.getElementById("color-history-swatches");

        if (!historyContainer) return;

        historyContainer.innerHTML = "";

        recentColors.forEach(color => {
            const swatch = document.createElement("button");

            swatch.type = "button";
            swatch.className = "color-history-swatch";
            swatch.style.backgroundColor = color;
            swatch.title = color;
            swatch.setAttribute("aria-label", `Reuse color ${color}`);

            swatch.addEventListener("click", () => {
                brandColorInput.value = color;

                brandColorInput.dispatchEvent(new Event("input"));

                addRecentColor(color);
            });

            historyContainer.appendChild(swatch);
        });
    }

    /* CUSTOM BRAND COLOR PICKER */

    const brandColorInput = document.getElementById("brand-color");

    const brandColorHex = document.getElementById("brand-color-hex");


    if (brandColorInput) {
        brandColorInput.addEventListener("change", () => {
            addRecentColor(brandColorInput.value);
        });
    }


    if (brandColorInput) {
        brandColorInput.addEventListener("input", () => {
            appliedPaletteName = null;
            document.querySelectorAll(".palette-card").forEach(card => {
                card.classList.remove("active");
            });

            document.querySelectorAll(".apply-palette-button").forEach(button => {
                button.textContent = "Apply palette";
                button.setAttribute("aria-pressed", "false");
            });

            customBrandColor = brandColorInput.value;

            const previewButton = preview.querySelector(".preview-button");

            if (previewButton) {
                previewButton.style.backgroundColor = brandColorInput.value;
            }


            if (brandColorHex) {
                brandColorHex.textContent = brandColorInput.value.toUpperCase();
            }

        });
    }

    /* RESET BRAND COLOR */

    const resetBrandColor = document.getElementById("reset-brand-color");

    if (resetBrandColor) {
        resetBrandColor.addEventListener("click", () => {
            customBrandColor = null;

            const activeButton = document.querySelector(".aesthetic-button.active");

            const primaryStyle = activeButton?.dataset.style || "editorial";

            applyTheme(primaryStyle);
        });
    }

    /* NORTHSTAR — LIVE WCAG CONTRAST TESTING */

    function cssColorToHex(color) {
        const canvas = document.createElement("canvas");

        canvas.width = 1;
        canvas.height = 1;

        const context = canvas.getContext("2d");

        context.fillStyle = color;
        context.fillRect(0, 0, 1, 1);

        const rgb = context.getImageData(0, 0, 1, 1).data;

        return "#" + Array.from(rgb)
            .slice(0, 3)
            .map(value => value.toString(16).padStart(2, "0"))
            .join("")
            .toUpperCase();
    }

    function updateWCAGResults() {

        const results = document.getElementById("wcag-results");

        if (!results) return;

        const components = [
            {
                name: "Body text",
                element: preview.querySelector("p"),
                background: preview
            },
            {
                name: "Primary button",
                element: preview.querySelector(".preview-button")
            },
            {
                name: "Secondary button",
                element: preview.querySelector(".preview-secondary-button")
            },
            {
                name: "Accent label",
                element: preview.querySelector(".preview-accent-label")
            }
        ];

        results.innerHTML = "";

        components.forEach(component => {

            if (!component.element) return;

            const foreground = cssColorToHex(
                getComputedStyle(component.element).color
            );

            const background = cssColorToHex(
                getComputedStyle(
                    component.background || component.element
                ).backgroundColor
            );

            const ratio = getContrastRatio(foreground, background);

            const passesAA = ratio >= 4.5;
            const passesAAA = ratio >= 7;

            const blackRatio = getContrastRatio(
                "#000000", background
            );

            const whiteRatio = getContrastRatio(
                "#FFFFFF", background
            );


            /* AESTHETIC-BASED ACCESSIBLE COLORS */

            const aestheticColors = {
                editorial: [
                    "#382F2B", "#252525", "#FAF5EF"
                ],
                modern: [
                    "#20324D", "#172033", "#F0F5FA"
                ],
                organic: [
                    "#26392C", "#354035", "#F7F5EF"
                ],
                chic: [
                    "#342B2B", "#49343D", "#FCF6F5"
                ],
                minimalist: [
                    "#202020", "#332F2B", "#FAFAF8"
                ]
            };

            const activeAesthetic = document.querySelector(
                ".aesthetic-button.active"
            )?.dataset.style || "editorial";



            const secondaryAesthetic = secondarySelect?.value || "none";

            const primaryCandidates =
                aestheticColors[activeAesthetic] || [];

            const secondaryCandidates =
                aestheticColors[secondaryAesthetic] || [];

            const candidates = [...new Set([
                ...primaryCandidates,
                ...secondaryCandidates
            ])];

            const accessibleMatch = candidates.find(color =>
                getContrastRatio(color, background) >= 4.5
            );

            const recommendedColor = accessibleMatch ||
                (blackRatio >= whiteRatio ? "#000000" : "#FFFFFF");

            const recommendedRatio = getContrastRatio(
                recommendedColor, background
            );


            const result = document.createElement("div");

            result.className = "wcag-result";

            result.innerHTML = `
            <h4>${component.name}</h4>

            <p>${foreground} on ${background}</p>

            <strong>${ratio.toFixed(2)}:1</strong>

            <p class="${passesAA ? "wcag-pass" : "wcag-fail"}">
                AA: ${passesAA ? "Pass" : "Fail"}
            </p>

            <p class="${passesAAA ? "wcag-pass" : "wcag-fail"}">
                AAA: ${passesAAA ? "Pass" : "Fail"}
            </p>
        `;

            if (!passesAA) {

                const recommendation = document.createElement("div");

                recommendation.className = "wcag-recommendation";

                recommendation.innerHTML = `
        <h5>Recommended improvement</h5>

        <p>
         Try ${recommendedColor} as your text color.
        </p>

        <p>
            Improved contrast:
            ${recommendedRatio.toFixed(2)}:1
        </p>
    `;
                const comparison = document.createElement("div");

                comparison.className = "wcag-comparison";

                comparison.innerHTML = `
    <div class="wcag-comparison-item">

        <span>Before</span>

        <div class="wcag-comparison-sample"
             style="background-color: ${background};
                    color: ${foreground};">
            Sample text
        </div>

        <p>${ratio.toFixed(2)}:1</p>

        <p class="wcag-fail">AA: Fail</p>

    </div>

    <div class="wcag-comparison-item">

        <span>After</span>

        <div class="wcag-comparison-sample"
             style="background-color: ${background};
                    color: ${recommendedColor};">
            Sample text
        </div>

        <p>${recommendedRatio.toFixed(2)}:1</p>

        <p class="wcag-pass">AA: Pass</p>

    </div>
`;

                recommendation.appendChild(comparison);


                const fixButton = document.createElement("button");

                fixButton.type = "button";

                fixButton.className = "wcag-fix-button";

                fixButton.textContent = "Apply recommended color";


                fixButton.addEventListener("click", () => {

                    component.element.style.color = recommendedColor;

                    appliedPaletteName = null;

                    document.querySelectorAll(".palette-card").forEach(card => {
                        card.classList.remove("active");
                    });

                    document.querySelectorAll(".apply-palette-button").forEach(button => {

                        button.textContent = "Apply palette";

                        button.setAttribute("aria-pressed", "false");

                    });

                });


                recommendation.appendChild(fixButton);

                result.appendChild(recommendation);
            }

            results.appendChild(result);

        });
    }

    /* AUTOMATIC CONTRAST UPDATES */

    const wcagObserver = new MutationObserver(updateWCAGResults);

    wcagObserver.observe(preview, {
        attributes: true,
        subtree: true,
        attributeFilter: ["style"]
    });

    updateWCAGResults();

    /* NORTHSTAR — PALETTE FILTER INTERACTION */

    const paletteFilter = document.getElementById("palette-filter");

    if (paletteFilter) {

        paletteFilter.addEventListener("change", () => {

            const activeButton = document.querySelector(
                ".aesthetic-button.active"
            );

            const activeAesthetic =
                activeButton?.dataset.style || "editorial";

            renderPalettes(activeAesthetic);

        });

    }

    /* NORTHSTAR — TEMPERATURE INTERACTION */

    const temperatureButtons = document.querySelectorAll(
        ".temperature-button"
    );

    temperatureButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedTemperature = button.dataset.temperature;

            temperatureButtons.forEach(item => {

                const isSelected =
                    item.dataset.temperature === selectedTemperature;

                item.classList.toggle("active", isSelected);

                item.setAttribute(
                    "aria-pressed",
                    String(isSelected)
                );

            });

            const activeAesthetic = document.querySelector(
                ".aesthetic-button.active"
            )?.dataset.style || "editorial";

            renderPalettes(activeAesthetic);

        });

    });

    /* NORTHSTAR — MOOD INTERACTION */

    const moodButtons = document.querySelectorAll(".mood-button");

    moodButtons.forEach(button => {

        button.addEventListener("click", () => {

            selectedMood = button.dataset.mood;

            moodButtons.forEach(item => {

                const isSelected =
                    item.dataset.mood === selectedMood;

                item.classList.toggle("active", isSelected);

                item.setAttribute(
                    "aria-pressed",
                    String(isSelected)
                );

            });

            const activeAesthetic = document.querySelector(
                ".aesthetic-button.active"
            )?.dataset.style || "editorial";

            renderPalettes(activeAesthetic);

        });

    });

    applyTheme("editorial");

    if (recentColors.length > 0) {
        addRecentColor(recentColors[0]);
    }

});
