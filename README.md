# :notebook: `sketchbook`

[Sketchbook](http://flatpickles.com/sketchbook/) is a web app that presents a growing collection of programmatic art pieces, aka "sketches", each with a set of configurable parameters. For the time being, sketches may only be built via the magnificent [canvas-sketch](https://github.com/mattdesl/canvas-sketch) framework.

For notes on each of the sketches within Sketchbook, visit the [`Projects`](./src/Sketches/Projects/) directory. For notes on the web app itself, read on! Caveat lector: this readme is a rough brain-dump space at the moment.

## Known Issues
* Color parameter inputs have a weird internal margin after hiding/showing right panel
* If a sketch times out with a particular set of parameters, it can become unresponsive, and those params are saved in local storage so that the same issue persists past reload
* Mobile:
    * Swipes on sliders can scroll page
    * Color preview block has strange corners
* Resizing the window can leave the canvas element at the wrong size. It seems this is literal canvas size and not padding, and happens only when the window is getting smaller in one dimension, every other time it seems.
* Behavior is undefined with an empty sketch index, or one with only WIP sketches (though perhaps this will never be a problem).
* When sharing a link to a WIP sketch with WIP disabled, it works as expected until another sketch is selected, then the WIP sketch disappears in the left panel. Ideally this would only happen on page reload, for consistency.
* Two finger mousepad swipe doesn't work for page navigation when Sketchbook is open. Probably this is disabled by my scrolling settings?

## To do
* Presets (pre-merge):
    * Create presets for sketches
    * Align right pane icons
    * Increase tap target size
* Reimplement older projects within Sketchbook
* Presets
    * Double click param to return to preset/default value
    * URL option to pre-select a preset
* Double click: capture state (e.g. just one panel open) and resume that state
* Link styling
* UX improvements:
    * Hide panel tabs when both collapsed w/ no mouse movement
    * Crossfade when switching sketches
* Global options:
    * Additional link out to per-sketch readmes from right panel
    * Export frame option (also exports param JSON; bottom right panel)
    * Import JSON parameter settings (bottom right panel)
    * Option to set canvas size, inc. fit to window size (bottom right panel)
    * FPS meter (probably in left panel settings)
    * Command-Z to undo parameter changes
* Float bounds search test for quadtree: something funky this way comes?
* Copyright somewhere on the page

## To consider
* CSS triage: clean everything up
* Cleanup: documentation, naming, etc.
* Key commands
    * Hide/show panels (both or each)
* Sketch details display
    * Link out to sketch-specific readmes on github
* Sketch list display:
    * Date metadata & display for sketches in sidebar
    * Folders for sketch index display organization
    * Sketch sorting options: alphabetical or most recent
* Parameters / param display:
    * Allow editing parameters via number readouts
    * Foldable parameter groups
    * Calculate parameter defaults based on initial size
    * Min/max range slider (new param type)
    * Radio button parameter type (2-5 options?)
* Inputs:
    * Mouse position & clicks
    * Key presses
    * Microphone
    * Webcam
    * MIDI (+ output?)
    * Image (browse & load)
* Assorted:
    * Export a sub-section of the canvas (smaller renders)

## Workflow / project wishlist
* Probably get rid of global.css
* Avoid bundling `public` dir in main branch
* A sketch type that doesn't use canvas-sketch - just vanilla svelte
* Parameter improvements: `this.params.paramName.value` is awkward, but providing a generated `this.paramName` property has proved difficult.
* An easy way to capture current parameter values for use as defaults
* Make it easier for others to create their own sketchbooks. Potential approach:
    * Master branch is just the sketchbook tool, gh-pages branch includes sketches
    * Allow forking of master branch, updates to & rebases on master branch

## Utility function wishlist
* HSV
* Kernel applicator
* Blur(s)
