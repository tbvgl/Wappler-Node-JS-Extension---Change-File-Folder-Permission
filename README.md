# Wappler-Node-JS-Extension---Change-File-Folder-Permission

Change the permissions of files and folders server side.

## Installation

    1. Go to your Wappler project root directory
    2. Clone the content of the modules folder to `/extensions/server_connect/modules`
    3. Restart Wappler

## Usage

Create a Server connect flow and search for `Change File/Folder Permissions`.

### Root Path & File/Folder Name

The path of the file or folder you want to change.
`./my.txt` will update the permissions for the file `my.txt`in your root directory.
`./myfolder/` will update the permissions for the folder `myfolder`in your root directory.

### File/ Folder Permission

Define the permissions for the file or folder with octal permissions notation:
Examples:

| Value | Permissions                                        |
| ----- | -------------------------------------------------- |
| 400   | Read by owner                                      |
| 040   | Read by group                                      |
| 004   | Read by world                                      |
| 200   | Write by owner                                     |
| 020   | Write by group                                     |
| 002   | Write by world                                     |
| 100   | Execute by owner                                   |
| 010   | Execute by group                                   |
| 001   | Execute by world                                   |
| 444   | Allow read permission to owner and group and world |
| 777   | Allow everyone to read, write, and execute file    |

You can find an octal permission generator here: https://ss64.com/bash/chmod.html.
