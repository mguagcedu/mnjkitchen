MNJ's Kitchen - Text Slant HARD FIX (Patch)

1) In every page (or at least index.html), add this inside <head> after your main CSS:
   <link rel="stylesheet" href="fix-slant.css">

2) Before the closing </body>, add:
   <script src="fix-slant.js"></script>

3) Commit and push to GitHub / redeploy.

This patch forces list/card text to be horizontal, removes any rotate / vertical writing, and disables italics.