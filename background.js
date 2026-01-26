// background.js

// =========================================================
// GOLFTRAX MANUAL DATABASE (2025 Season Data)
// HOW TO UPDATE:
// 1. Edit the numbers below.
// 2. Save this file.
// 3. Go to Chrome Extensions -> Click "Refresh" icon on GOLFTRAX.
// 4. REFRESH THE FANTRAX PAGE.
// =========================================================

const PLAYER_DB = {
    // --- YOUR ROSTER (Real 2025 Data) ---
    "Ryan Gerard":               { rank: 15, avg: 67.3, bir: 5.9, bog: 1.2, eag: 0.6 }, // #2 on Tour right now!
    "Blades Brown":              { rank: 45, avg: 69.5, bir: 4.5, bog: 2.1, eag: 0.2 }, 
    "Adrien Dumont de Chassart": { avg: 70.5, bir: 3.8, eag: 0.1 },
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

    // --- TOP FREE AGENTS / NOTABLES ---
    "Chris Gotterup":    { avg: 66.8, bir: 5.5, eag: 0.8 }, // #1 Scoring Avg
    "Davis Riley":       { avg: 68.0, bir: 6.0, eag: 0.5 }, // #1 Birdie Avg
    "Luke Clanton":      { avg: 69.4, bir: 4.7, eag: 0.3 }, 
    "Aldrich Potgieter": { avg: 69.5, bir: 4.8, eag: 0.9 }, 
    "Andrew Novak":      { avg: 69.1, bir: 4.2, eag: 0.2 },
    "Sami Valimaki":     { avg: 70.2, bir: 3.7, eag: 0.3 },
    "Chris Kirk":        { avg: 70.2, bir: 3.9, eag: 0.1 },
    "Rasmus Hojgaard":   { avg: 69.5, bir: 4.4, eag: 0.4 },
    "Emiliano Grillo":   { avg: 70.1, bir: 3.6, eag: 0.1 },
    "Kevin Yu":          { avg: 69.5, bir: 4.5, eag: 0.3 },
    "Davis Thompson":    { avg: 69.8, bir: 4.1, eag: 0.2 },
    "Alex Noren":        { avg: 69.3, bir: 4.0, eag: 0.1 },
    "Max McGreevy":      { avg: 69.2, bir: 4.3, eag: 0.1 },
    "Alex Smalley":      { avg: 69.7, bir: 4.2, eag: 0.2 },
    "Vincent Whaley":    { avg: 70.3, bir: 3.5, eag: 0.1 },
    "Stephan Jaeger":    { avg: 69.9, bir: 3.9, eag: 0.2 },
    "Lucas Glover":      { avg: 70.2, bir: 3.4, eag: 0.0 },
    "Jesper Svensson":   { avg: 70.1, bir: 3.7, eag: 0.2 },
    "Daniel Brown":      { avg: 69.8, bir: 4.0, eag: 0.1 },
    "Takumi Kanaya":     { avg: 69.5, bir: 3.8, eag: 0.1 },
    "Zachary Bauchou":   { avg: 70.4, bir: 3.5, eag: 0.1 },
    "Doug Ghim":         { avg: 69.9, bir: 4.1, eag: 0.2 },
    "Hao-Tong Li":       { avg: 70.8, bir: 3.9, eag: 0.4 },

    // --- BIG GUNS ---
    "Scottie Scheffler": { avg: 68.3, bir: 5.2, eag: 0.3 },
    "Rory McIlroy":      { avg: 68.9, bir: 4.9, eag: 0.4 },
    "Xander Schauffele": { avg: 69.1, bir: 4.8, eag: 0.2 }
};

// Function to save this data to the browser
function loadManualData() {
    chrome.storage.local.set({ 
        golfData: PLAYER_DB, 
        source: "MANUAL", 
        lastUpdated: new Date().toLocaleTimeString() 
    });
}

// Load data immediately
chrome.runtime.onInstalled.addListener(loadManualData);
chrome.runtime.onStartup.addListener(loadManualData);