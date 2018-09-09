## Basic Unix Commands

*cd < directory name >*

Change directory (e.g. cd pictures brings you to the sub-directory “pictures”)

*cd ..*

Change directory up one level to the parent directory

*cd*

Return to the home directory

*touch*

Create a new file

*chmod*

Modifies the permissions on a file or directory

*cp < current filename > < new file name >*

Copy (e.g. cp cats1.jpg cats2.jpg makes a copy of the picture “cats1.jpg” and calls it “cats2.jpg”)

*cp -i < current filename > < new file name >*

Use cp -i to be prompted before over-writing another file. This is a safer method.

*ls*

Lists a directory of your files

*ls -l*

Lists a directory with more information about the files

*ls -a*

Lists a directory including the hidden files
man
This is the online Unix help documentation (as in “manual”). Type man + the command (e.g. man ls) for a detailed explanation of the command. Type q to leave the manual pages.

*mkdir < directory name >*

Creates a new directory (e.g. mkdir pictures creates a directory called “pictures”)

*pico*

Use pico < filename > to edit a text file

*pwd*

See the current directory and path

*rm < filename >*

Remove (or delete) a file (e.g. rm cats1.jpg deletes the file “cats1.jpg”)

*rmdir < directory name >*

Removes an empty directory (e.g. rmdir pictures removes a directory called “pictures” as long as that directory is empty)
