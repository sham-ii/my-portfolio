# Images

## Profile photo

1. Save your photo in this folder as **`profile.jpg`**
   (`profile.jpeg`, `profile.png` and `profile.webp` also work).
2. That's it — the site picks it up automatically and stops using
   `profile-placeholder.svg`. Restart `npm run dev` if it doesn't refresh.

Tips: a square image of at least 800×800 px, with your face centred,
looks best inside the circular frame.

(The logic lives in `src/data/profileImage.js`.)

## Project screenshots

Put screenshots in `projects/` and import them in `src/data/projects.js`.
A 16:10 ratio (e.g. 1280×800) fits the cards best.
