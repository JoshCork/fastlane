# How to Use Git and GitHub

## git show
will show you just the diff between a file and it's parent (this helps after a merge has occured).

## reachability
Certain positions in a branch make it impossible to get to another position in a branch. 
Remember that being unreachable means a commit that cannot be reached from a commit with a branch label.
"git checkout -b myNewBranch" both creates the branch and then checks ot that branch
making new commits brings the branch with us.

## git diff
using git diff without any ID's will compare the working directory to the staging area. 
git diff --staged --> this will show you the chaanges that have been made between what is staged and the most recent commit for that file. 
git reset --hard --> be careful with this one.  it gets rid of any changes 

## Instructor Notes - *git reset*
If you accidentally add a file to the staging area, you can remove it using git reset. For example, if you accidentally add lesson_2_reflections.txt, but don’t want it to be committed yet, run git reset lesson_2_reflections.txt and the file will be removed from the staging area, but it will still be in your working directory.

Temp Notes
this.delayBeforeBullet = 10; /* This was removed in version 3e42136a76cf78c6c421cd720427bf6337c2d623


