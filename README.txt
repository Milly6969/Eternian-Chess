ETERNIAN CHESS — GitHub Pages PWA (public-source-safe)

CONTENTS
  index.html          Complete game including its embedded artwork
  manifest.webmanifest and assets/icons    PWA installation assets
  sw.js               Cache for offline play

HOSTING
1. Upload the CONTENTS of this folder to the ROOT of a GitHub repository.
2. In GitHub Settings > Pages, select Deploy from a branch, main, / (root).
3. Open your GitHub Pages URL (HTTPS) on Android Chrome; use 'Install app' / 'Add to Home screen'.
4. A service worker caches the app for later offline play; visit once online first.

PRIVATE SETTINGS
* Open Settings > Player profile to type the player name. It will appear on the game board.
* Open Settings > Chess accounts to type a Chess.com username and/or a Lichess username.
* Only Chess.com rapid/blitz/bullet/daily rating syncing is currently implemented.
* Lichess username is saved locally for future use; it doesn't affect bot unlocks yet.
* NO player username, score history, or personal starting Elo rating is embedded in these public files.
* Username and progress are saved in the browser's local storage, per app origin/device.
* Chess.com username is sent to Chess.com only to obtain the public rating when you request sync/refresh.

PROGRESS MIGRATION
Moving from an old local HTML file or a different domain to the new GitHub Pages PWA
DOES NOT automatically carry over browser storage.
On the old app, open Records > Save progress backup (if supported) or
Settings > Download progress backup, then on the new app open
Settings > Import progress backup and select the JSON file.
The app supports old version-1 progress backups and new version-2 backups.
Only new backups include an unfinished game position. Existing uploaded sound files are not included.
Keep backups private: they can contain player-entered names, ratings and records.

UNLOCK RULES
750 Chess.com Elo: first secret warrior. 775 and 800: next secret warriors.
These thresholds and existing saved achievements have not been changed.
A fresh install begins with a neutral 700 Elo baseline and no Chess.com account linked.
If you import existing progress, all earned Elo milestones are preserved.

UPDATES
Replacing files in GitHub Pages will deliver an updated version on refresh
(network-first for main page). If offline, the last cached version still runs.
