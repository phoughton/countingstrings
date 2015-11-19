var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-gen.html"

var text_gen = require("sdk/panel").Panel({
  contentURL: data.url("countingstrings.html"),
  width: 600,
  height:400,
  contextMenu: true
});

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  text_gen.show();
}

// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
text_gen.on("show", function() {
  text_gen.port.emit("show");
});
