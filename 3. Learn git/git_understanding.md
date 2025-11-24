
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




