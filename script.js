// Simple token-based progression using localStorage

function setProgress(key) {
    try {
        localStorage.setItem(key, "1");
    } catch (e) {
        console.warn("Could not write progress token:", e);
    }
}

function hasProgress(key) {
    try {
        return localStorage.getItem(key) === "1";
    } catch (e) {
        console.warn("Could not read progress token:", e);
        return false;
    }
}

// Require a token; if missing, redirect to blocked page
function requireProgress(key) {
    if (!hasProgress(key)) {
        window.location.href = "blocked.html";
    }
}

// Optional helper to clear all progress (for instructor / testing)
function clearProgress() {
    try {
        localStorage.clear();
        alert("Progress cleared.");
    } catch (e) {
        console.warn("Could not clear progress:", e);
    }
}

// Group helpers
function setGroupId(gid) {
    try {
        localStorage.setItem("group_id", gid);
    } catch (e) {
        console.warn("Could not store group_id:", e);
    }
}

function getGroupId() {
    try {
        return localStorage.getItem("group_id") || "0101";
    } catch (e) {
        console.warn("Could not read group_id:", e);
        return "01";
    }
}
