
Make three commits in your repo with different commit message styles:
A vague commit message (e.g., "fixed stuff").
Fixed stuff

An overly detailed commit message.
"Went through the open-source projects and wrote a new commit message for this repo"

A well-structured commit message.
"Updated with a well-structured commit message (#45)" (in the screenshot it says 1 instead of 45)

<img width="1628" height="417" alt="image" src="https://github.com/user-attachments/assets/0b9767bd-e035-4f59-9e35-02e6094b07a9" />

<img width="1918" height="317" alt="image" src="https://github.com/user-attachments/assets/805ace73-6301-4205-850a-145398a4740e" />



Write reflections in git_understanding.md:

What makes a good commit message
Clear and concise subject line. For example: "Fix: Updated newsletter button to redirect to email" instead of "fixed newsletter"
Making reference to issue ID.
Having a detailed body.


How does a clear commit message help in team collaboration?
A clear commit message helps collaborators to refer to the issues, understand the context of the problem solved, refer back to the commit history of further changes are to be made.

How can poor commit messages cause issues later?
It may make it harder to understand why the change was made thus making it difficult to debug.
Poorly written messages also cause delays in development procedure as time is wasted to look for context.

Commit and push your changes to GitHub.
Completed.

#51

Research git bisect and how it helps in debugging.

Create a test scenario:
Make a series of commits in your test repo.
<img width="1682" height="458" alt="image" src="https://github.com/user-attachments/assets/498bb9e9-14e6-4965-92d8-ef5f478da182" />

Introduce a bug in one of the commits.
Use git bisect to track down the commit that introduced the issue.
Experiment using your Git desktop client (or CLI if preferred).
<img width="622" height="267" alt="image" src="https://github.com/user-attachments/assets/a26ca259-1b91-410b-8dca-0f294f563ebf" />


Write reflections in git_understanding.md:

What does git bisect do?
Git bisect is a way to save time in debugging by identifying the last commit where the bug has been present since. This is done by running "git bisect good" or "git bisect bad". It carries out a binary search to figure out good or bad commits. The process continues until git singles out the commit responsible for the bug.

When would you use it in a real-world debugging situation?
When given a task to fix a issue in a branch, I would use git bisect bad to find out the exact commit where the bug showed up and then investigate the files changed in that commit.

How does it compare to manually reviewing commits?
The command "git bisect run" runs a binary search algorithm, thus drastically reducing the need to review all the commit history. Instead, it will narrow down to few commits that the git flags as "bad".

Commit and push your changes to GitHub.

#50



Research the following Git commands and test them in your repo:

git checkout main -- <file> – Restore a specific file from main without affecting other changes.
git cherry-pick <commit> – Apply a specific commit from another branch without merging the whole branch.
git log – View commit history and understand how changes evolved.
git blame <file> – See who last modified each line in a file and when.

Experiment with each command in your test repo:

Modify a file, then restore it using checkout.
<img width="940" height="608" alt="image" src="https://github.com/user-attachments/assets/08195f68-f3de-494a-b19e-2e0b1efac2d0" />

Commit changes on a branch, then cherry-pick one commit onto main.
<img width="940" height="684" alt="image" src="https://github.com/user-attachments/assets/5aec9ec9-d484-4751-a7d1-37d80dfa2c9c" />

Use git log to explore the commit history.
<img width="940" height="698" alt="image" src="https://github.com/user-attachments/assets/544e3773-d7b9-44e8-bafb-c911faf19184" />

Use git blame to see past changes in a file.
<img width="940" height="482" alt="image" src="https://github.com/user-attachments/assets/e2c405ee-373c-4cde-b705-ab125f431555" />


Write reflections in git_understanding.md:

What does each command do?
git checkout main -- <file> restores the file back to how it looks on the main branch without changing any other files. 
git cherry pick -- <commit> applies single commit from a branch to another branch copying the changes from the commit without merging any other changes.
git log shows the project history allowing to see what changes were made, who made those changes.
git blame shows who modified each line in a file, when it was changed and the commit that introduced it.

When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?
git checkout main -- <file> to restore a file from another branch in case I accidentally broke one file
git cherry-pick if I urgently need to merge a single file from another branch but not involve any other files of that branch.
git log to track history of changes made which would help me keep up to date with the progress of the project.
git blame to follow up with the author who made changes to the specific file and resolve issues.

What surprised you while testing these commands?
cherry-pick surprised me as I was amazed to see git allows you to merge a specific file from a different branch.

Commit and push your changes to GitHub.




