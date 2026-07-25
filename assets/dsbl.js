

    // Disable Right Click
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Disable Keyboard Shortcuts
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i")) {
            event.preventDefault();
        }
        if (event.key === "F12") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "J" || event.key === "j")) {
            event.preventDefault();
        }
    });

    // Detect Chrome DevTools and Block It
    setInterval(function () {
        const devtools = /./;
        devtools.toString = function () {
            throw new Error("DevTools Blocked!");
        };
        console.log(devtools);
    }, 1000);

    // Close Tab If DevTools Is Open
    (function () {
        let devtoolsOpen = false;
        const threshold = 160;

        setInterval(() => {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;

            if (widthDiff || heightDiff) {
                devtoolsOpen = true;
                document.body.innerHTML = "<h1>Inspecting is not allowed!</h1>";
                setTimeout(() => {
                    window.close(); // Close the browser tab
                }, 2000);
            }
        }, 1000);
    })();

    // Disable Console Debugging
    function blockConsole() {
        console.log = function () {};
        console.warn = function () {};
        console.error = function () {};
        console.info = function () {};
        console.debug = function () {};
    }

    blockConsole();

    setInterval(function () {
        if (window.console && (console.profile || console.clear)) {
            console.clear();
            console.log("Console disabled!");
            blockConsole();
        }
    }, 1000);
})();

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click disabled.");
});

  // Redirect only if the URL ends with .html
  if (window.location.pathname.endsWith(".html")) {
    window.location.href = window.location.pathname.replace(".html", "/");
  }