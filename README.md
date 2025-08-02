herro

notes on what we will do so we dont forget

- gonna add a guest account, but guest accounts can only play in solo games so gotta add a check for that (way later on)

- somehow add a "premium" feature, need to think abt what that will be

- add google analytics

jumble is a party game web app. goal is to let people play casual games in real time with friends (like jackbox or game pigeon). starting with one game called word hunter (based on word hunt from iMessage). it’ll support up to 8 players per room, maybe ai opponent too, and track wins with a leaderboard.

frontend is react (vite + tailwind + typescript + shadcn/ui). already built: landing page, about, login/register (no auth yet), error page, navbar + footer. layout is set up. folders for components, pages, utils, services, store etc all scaffolded. features and hooks folders empty for now.

backend will be rails (fresh start, delete old ruby project shell). db will be postgres, hosted on aws rds. may use aws s3 for uploads. possibly ec2 for hosting. considering redis + actioncable for real-time stuff. auth not decided yet, either devise/jwt or maybe external like auth0.

multiplayer will work with room codes (user creates a room, gets a code, others join). maybe improve that later but simple for now. leaderboard tracks all-time wins. ai mode probably just algorithm-based, no real machine learning unless needed later.

goal is to make a solid base for more games to be added later. want to keep everything modular and scalable.

dev env: windows 11, will prob use wsl2 for rails stuff. docker optional but helpful. aws cli setup needed for s3/rds.

## git notes

main is protected — need to use PRs for all changes  
linear history is required, so when merging:
- ✅ use "squash & merge" or "rebase & merge"
- ❌ don't use "merge commit" (will get blocked)
