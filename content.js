// content.js

// 1. THE DATABASE (Updated with ALL Screenshot Players)
// DATA FIELDS:
// rank: Recency Ranking (Last 3 Tournaments)
// avg:  Scoring Average
// bir:  Birdie Average
// bog:  Bogey Rate
// eag:  Eagle Rate
const PLAYER_DB = {
    // --- YOUR ROSTER ---
    "Ryan Gerard":               { rank: 15, avg: 67.3, bir: 5.9, bog: 1.2, eag: 0.6 },
    "Blades Brown":              { rank: 45, avg: 69.5, bir: 4.5, bog: 2.1, eag: 0.2 },
    "Adrien Dumont de Chassart": { rank: 110, avg: 70.5, bir: 3.8, bog: 2.8, eag: 0.1 },
    "Chandler Phillips":         { avg: 69.8, bir: 3.9, eag: 0.2 },
    "Bud Cauley":                { avg: 70.5, bir: 3.2, eag: 0.0 },
    "Mac Meissner":              { avg: 69.9, bir: 3.8, eag: 0.1 },
    "Sudarshan Yellamaraju":     { avg: 68.5, bir: 4.8, eag: 1.0 },
    "Seamus Power":              { avg: 69.3, bir: 3.6, eag: 0.2 },
    "Patton Kizzire":            { avg: 70.2, bir: 3.5, eag: 0.1 },
    "Adam Scott":                { avg: 69.6, bir: 4.1, eag: 0.2 },
    "Johnny Keefer":             { avg: 68.5, bir: 4.9, eag: 0.3 },
    "Kevin Roy":                 { avg: 62.0, bir: 5.5, eag: 0.4 },
    "Matthieu Pavon":            { avg: 69.6, bir: 3.8, eag: 0.1 },
    "John Parry":                { avg: 70.4, bir: 3.5, eag: 0.1 },

    // --- FREE AGENTS (Screenshot 1 & 2) ---
    "Andrew Novak":      { avg: 70.4, bir: 3.7, eag: 0.1 },
    "Sami Valimaki":     { avg: 69.7, bir: 4.2, eag: 0.3 },
    "Chris Kirk":        { avg: 70.1, bir: 3.8, eag: 0.1 },
    "Rasmus Hojgaard":   { avg: 69.5, bir: 4.4, eag: 0.4 },
    "Emiliano Grillo":   { avg: 70.1, bir: 3.6, eag: 0.1 },
    "Kevin Yu":          { avg: 69.5, bir: 4.3, eag: 0.3 },
    "Davis Thompson":    { avg: 69.5, bir: 4.1, eag: 0.2 },
    "Christiaan Bezuidenhout": { avg: 70.1, bir: 3.5, eag: 0.1 },
    "Alex Noren":        { avg: 69.8, bir: 4.0, eag: 0.1 },
    "Max McGreevy":      { avg: 69.5, bir: 4.3, eag: 0.1 },
    "Alex Smalley":      { avg: 70.2, bir: 4.2, eag: 0.2 },
    "Vincent Whaley":    { avg: 70.5, bir: 3.5, eag: 0.1 },
    "Stephan Jaeger":    { avg: 69.9, bir: 3.9, eag: 0.2 },
    "Aldrich Potgieter": { avg: 69.5, bir: 4.8, eag: 0.9 },
    "Luke Clanton":      { avg: 69.4, bir: 4.7, eag: 0.3 },
    "Lucas Glover":      { avg: 70.2, bir: 3.4, eag: 0.0 },
    "Jesper Svensson":   { avg: 70.1, bir: 3.7, eag: 0.2 },
    "Daniel Brown":      { avg: 69.8, bir: 4.0, eag: 0.1 },
    "Takumi Kanaya":     { avg: 69.5, bir: 3.8, eag: 0.1 },
    "Zachary Bauchou":   { avg: 70.4, bir: 3.5, eag: 0.1 },
    "Doug Ghim":         { avg: 69.9, bir: 4.1, eag: 0.2 },
    "Hao-Tong Li":       { avg: 70.8, bir: 3.9, eag: 0.4 },

    // --- NEW PLAYERS (Screenshot 3 & 4) ---
    "Nicolai Hojgaard":  { avg: 69.7, bir: 4.1, eag: 0.3 },
    "Michael Brennan":   { avg: 68.9, bir: 4.5, eag: 0.2 },
    "Austin Eckroat":    { avg: 69.6, bir: 4.0, eag: 0.1 },
    "Nick Dunlap":       { avg: 69.3, bir: 4.3, eag: 0.2 },
    "Ryo Hisatsune":     { avg: 70.1, bir: 3.8, eag: 0.1 },
    "Marco Penge":       { avg: 71.2, bir: 3.2, eag: 0.0 },
    "Ryan Fox":          { avg: 70.3, bir: 3.7, eag: 0.2 },
    "Beau Hossler":      { avg: 70.0, bir: 3.9, eag: 0.1 },
    "Thorbjorn Olesen":  { avg: 69.8, bir: 4.0, eag: 0.2 },
    "Neal Shipley":      { avg: 69.2, bir: 4.4, eag: 0.1 },
    "Sam Ryder":         { avg: 70.5, bir: 3.6, eag: 0.1 },

    // --- BIG GUNS ---
    "Scottie Scheffler": { avg: 68.3, bir: 5.2, eag: 0.3 },
    "Rory McIlroy":      { avg: 68.9, bir: 4.9, eag: 0.4 },
    "Xander Schauffele": { avg: 69.1, bir: 4.8, eag: 0.2 }
};

// 2. VISUAL INJECTOR (Subtitle Mode)
function injectRatings() {
    const allLinks = document.querySelectorAll('a');
    let foundCount = 0;

    allLinks.forEach(link => {
        if (link.getAttribute("data-golftrax")) return;

        const text = link.innerText.trim();
        if (text.length < 3) return; 

        // Match Name
        const matchName = Object.keys(PLAYER_DB).find(k => {
            return text.includes(k) || k.includes(text);
        });

        if (matchName) {
            foundCount++;
            const stats = PLAYER_DB[matchName];
            
            // Create the Badge Container
            // We use 'display: block' to force it onto a NEW LINE below the name
            const container = document.createElement("div");
            container.style.marginTop = "3px"; // Little gap below name
            container.style.display = "flex";  
            container.style.alignItems = "center";
            container.style.gap = "4px";
            
            // RANK Badge (Recency)
            if (stats.rank) {
                createBadge(container, `Rnk ${stats.rank}`, 
                    stats.rank <= 50 ? "#fef9c3" : "#f3f4f6", // Yellow for top 50, Gray for others
                    stats.rank <= 50 ? "#854d0e" : "#374151"
                );
            }

            // AVG Badge
            if (stats.avg) {
                createBadge(container, `Avg ${stats.avg}`, 
                    stats.avg < 70.0 ? "#dcfce7" : "#fee2e2", 
                    stats.avg < 70.0 ? "#166534" : "#991b1b"
                );
            }
            // BIR Badge
            if (stats.bir) {
                createBadge(container, `Bir ${stats.bir}`, "#dbeafe", "#1e40af");
            }
            // BOG Badge (Bogey Rate)
            if (stats.bog) {
                createBadge(container, `Bog ${stats.bog}`, 
                    stats.bog < 2.5 ? "#dcfce7" : "#fee2e2", 
                    stats.bog < 2.5 ? "#166534" : "#991b1b"
                );
            }

            // INSERTION: Place it AFTER the link (Subtitle style)
            link.after(container);
            
            link.setAttribute("data-golftrax", "true");
        }
    });

    updateDebugBox(foundCount);
}

// 3. BADGE STYLING
function createBadge(parent, text, bgColor, textColor) {
    const badge = document.createElement("span");
    badge.innerText = text;
    badge.style.fontSize = "9px";
    badge.style.fontWeight = "800";
    badge.style.padding = "1px 4px";
    badge.style.borderRadius = "3px";
    badge.style.backgroundColor = bgColor;
    badge.style.color = textColor;
    badge.style.border = "1px solid " + textColor;
    badge.style.whiteSpace = "nowrap"; 
    badge.style.lineHeight = "1.1";
    parent.appendChild(badge);
}

// 4. DEBUG BOX
let debugBox;
function updateDebugBox(count) {
    if (!debugBox) {
        debugBox = document.createElement("div");
        debugBox.style.position = "fixed";
        debugBox.style.bottom = "10px";
        debugBox.style.right = "10px";
        debugBox.style.background = "rgba(0,0,0,0.8)";
        debugBox.style.color = "#fff";
        debugBox.style.padding = "6px 10px";
        debugBox.style.borderRadius = "4px";
        debugBox.style.fontSize = "11px";
        debugBox.style.fontFamily = "sans-serif";
        debugBox.style.zIndex = "999999";
        debugBox.innerText = "GOLFTRAX: Ready";
        document.body.appendChild(debugBox);
    }
    
    if (count > 0) {
        debugBox.innerText = `GOLFTRAX: Active (Found: ${count})`;
        debugBox.style.color = "#4ade80"; 
    }
}

// Run loop
setInterval(injectRatings, 1000);