# What does GIT do?
+ Creating a point where we can roll the code back to
+ Which files have been changed that caused a particular problem in the code?
+ 
## Git is DVCS - **Decentralised Version Control System**

DVCS - Having the full capability of the repository with whoever has the code
The person can keep on working on the code without worrying about the syncronization

Difference between **.** and **..**
+ `.` --> Current Directory
+ `..` --> Parent Directory

# Notes
+ To initialize the git repo - `git init`
+ **.git** folder gets made as a hidden folder
+ `git status` --> displays the current status of the repository
+ _tracked_ is file that Git knows about. Git knows about the file's versions and all.
+ _not tracked_ is a file that Git does not know about and is not tracking it's versions.
+ `git add [filename]` --> git will now start tracking the file
+ __git graph__ extension for VSCODE shows graphs and trees of the commits
+ __commit__ is a point in time, a point in the history of your code that you can go back too..
+ each commit in git is identified by a 40 character code.
+ `git commit -m ["message"]` -m means message. the message should be meaningful
+ __Staging Area__ --> currently the code which is being worked on 
+ __Working Copy__ has two types of files :- 
    - Tracked Files
    - Untracked Files
+ __refs__ are also known as __branches__.
+ For git, a branch is nothing but a pointer to a commit.
+ Git stores it's information in a tree structure
+ `git checkout -b [branch-name]` making a new branch from the latest commit
+ `git checkout [branch-name]` change branches
+ `git remote add origin [repo URL]` - add an external repository
+ `git push --all` - push all the local code to the repository
+ `git fetch` will fetch remote object and make pointers in the hidden folder but it wont merge the changes to local repo
+ `git pull` internally executes two commands - `git fetch` and `git merge` which fetches objects from remote branch __and__ merge them with the local code

## Git Structure 
<img src="https://i.imgur.com/qHzslyt.png">

