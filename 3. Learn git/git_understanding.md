
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

#75


Create a new branch in your Git desktop client (e.g., GitHub Desktop, VS Code, SourceTree).
Make a small change in your repo and commit it to the new branch.
Switch back to main and check that your changes are not there.

<img width="1287" height="936" alt="image" src="https://github.com/user-attachments/assets/e1507b98-c15b-4414-bc57-fb5b09e0f0f2" />
<img width="857" height="743" alt="image" src="https://github.com/user-attachments/assets/1fef1c24-b954-47e7-bc49-39f1bbf515f3" />



Reflect on why teams use branches instead of pushing directly to main in git_understanding.md:
Why is pushing directly to main problematic?
Pushing directly to main is problematic as it may break the entire project for everyone. It could be either by bugs, missing dependencies. This happens when no code review takes place before implementing it on main.

How do branches help with reviewing code?
Branches allow developers to work separately on specific tasks. This prevents the clash between files. By raising pull-requests, teammates can review the code and verify the features work properly before integrating into main.

What happens if two people edit the same file on different branches?
If two people work on different parts of the same file git can merge them automatically. However, if both work on the same line it creates a merge conflict. The two developers then have to decide which version to keep.

Commit and push your changes to GitHub.

#43



Research the difference between staging and committing.

Experiment with adding and committing files in your repo using either:
The terminal (git add / git commit)
A Git desktop client (e.g., GitHub Desktop, VS Code Git integration).

Modify a file and try the following:
Stage it but don’t commit (git add <file> or equivalent in your client).
Check the status (git status).
Unstage the file (git reset HEAD <file> or equivalent).
Commit the file and observe the difference.

<img width="940" height="400" alt="image" src="https://github.com/user-attachments/assets/9a04296c-68f5-4901-9ada-3a9c54587014" />
<img width="940" height="437" alt="image" src="https://github.com/user-attachments/assets/330d814f-9dcb-4599-ad94-f5f9839cdc7e" />


Write a summary in git_understanding.md:
What is the difference between staging and committing?
Staging is preparing the snapshot for the changes a developer wants to make for the next commit.
Commiting is saving the snapshot to permanently save the changes in the repository history.

Why does Git separate these two steps?
To allow for reviewing before saving them permanently to avoid accidentally committing bugs. It also builds a clear commit history which makes it easy to understand for the developers.

When would you want to stage changes without committing?
When I am preparing the changes but still want to review the files or when I am making multiple changes but want to commit the one that I am ready to publish.

Commit and push your changes to GitHub.



