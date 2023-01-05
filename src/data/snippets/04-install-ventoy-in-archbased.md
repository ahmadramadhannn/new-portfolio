---
snippet_name: "Installing ventoy in arch based linux"
description: "How to install ventoy in cmd"
slug: "installing-ventoy"
logo: "arch"
tags:
  - linux
  - arch linux
---

### Why using cmd

If you have question why i'm using cmd for installing packages, the answer is because it is very simple and very easy to do if you want install another packages, because the process is actually the same.

### Simple installation

This is very simple ways to install ventoy in cmd, you only need type sudo pacman -S ventoy-bin, and that's is the process is done

![first_step](/assets/snippets/simple_first_step.png)

### Finish simple installation

![finish](/assets/snippets/simple_step_finish.png)

### With several steps :

### Open the terminal and make sure git is installed on your system

First make sure you are installing git, git is important because we need git for clone the repo, not just ventoy repo, for example: if you want to install vs code, you need to clone the repo too, and another packages also.

![git](/assets/snippets/git.png)

### If you do not have git on your system, install git first

To install git, the process is very simple, you just type something like this, and git is ready on your system

![installing_git](/assets/snippets/installinggit.png)

### Clone ventoy repo

After git is installed on your system, now clone the repo of ventoy, the link is down bellow :
[ventoy repo](https://aur.archlinux.org/packages/ventoy-bin)

![clone_ventoy](/assets/snippets/ventoy.png)

### Go to ventoy directory

After you clone the repo, go to ventoy directory

![ventoy_directory](/assets/snippets/gotoventoydirectory.png)

### Run makepkg -s

And run makepkg -s in ventoy directory and wait untill operation success.

![makepkg](/assets/snippets/makepkg.png)

### Run pacman -U

After the operation makepkg -s finish, now run sudo pacman -U and wait untill ventoy is installed on your system.

![pacman-u](/assets/snippets/sudopacman.png)

### Finish

Now ventoy is ready on your system, you can search in all apps, or you can also searh in cmd too.

![ventoy_ready](/assets/snippets/ventoyready.png)

### Remove ventoy

After all operation finish, now you can remove ventoy with type like this and that's it. thanks

![remove_ventoy](/assets/snippets/removeventoy.png)
