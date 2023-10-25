## About us
> Contributors
- Nandan (Scrum Master)
- Arnav(Front end and DevOPS)
- Remy (Front end and DevOPS)
- Torin(Back end with AWS)

## What our project is about!
Our project is a movie database, similar to IMDB, but in a more simpler form. We have incorporated by using javascript and html with css for the background while using python and AWS for our backend.
- Our github pages is published at https://tdwolff.github.io/NART_Movie/

## How we can up with this idea
For our team teach we have come up with the idea of a movie database. We have then for our final project decided to incorporate to a wide variety of movies compared to our low 50 movies. We are expanding it so we have have a better recommendation system and just better than what it was before. 

### AWS requirements
- We have used AWS in order to power the backend of our website
> We have successfully used AWS in the following
- Encoding API for OMDB
- Sign in Page

### MacOs installation requirements 
- Ihe result of these step are MacOS tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/macos/). Run scripts in scripts directory of student repo: setup_macos.sh and activate_macos.sh. Expected name of the repository to run these scripts is 'student'.

### Preview
- The result of these step is server running on: http://0.0.0.0:4100/teacher/.  Regeneration messages will run in terminal on any save.  Press the Enter or Return key in the terminal at any time to enter commands.

- Complete installation
```bash
bundle install
```
- Run Server.  This requires running terminal commands `make`, `make stop`, `make clean`, or `make convert` to manage the running server.  Logging of details will appear in terminal.   A `Makefile` has been created in project to support commands and start processes.

    - Start preview server in terminal
    ```bash
    cd ~/vscode/teacher  # my project location, adapt as necessary
    make
    ```

    - Terminal output of shows server address. Cmd or Ctl click http location to open preview server in browser. Example Server address message... 
    ```
    Server address: http://0.0.0.0:4100/teacher/
    ```

    - Save on ipynb or md activiates "regeneration". Refresh browser to see updates. Example terminal message...
    ```
    Regenerating: 1 file(s) changed at 2023-07-31 06:54:32
        _notebooks/2024-01-04-cockpit-setup.ipynb
    ```

    - Terminal message are generated from background processes.  Click return or enter to obtain prompt and use terminal as needed for other tasks.  Alway return to root of project `cd ~/vscode/teacher` for all "make" actions. 
        

    - Stop preview server, but leave constructed files in project for your review.
    ```bash
    make stop
    ```

    - Stop server and "clean" constructed files, best choice when renaming files to eliminate potential duplicates in constructed files.
    ```bash
    make clean
    ```

    - Test notebook conversions, best choice to see if IPYNB conversion is acting up.
    ```bash
    make convert
    ```
### Meta Data (Front Matter)
- Meta data also known as front matter is a set of key value pairs that can provide additional information to github pages about .md and .ipynb files. This can and probably will be used in other file types (ie doc, pdf), if we added them to the system.

- In the front matter you can also define things like a title and description for the page.  Additional front matter is defined to place content on "Computer Science Lab Notebook" page.  The `courses:` key will place data on a specific page with the nested `week:` placing data on a specific row on the page.  The `type:` key in front matter will place blog under the plans, hacks(ToDo), and tangibles column. 

- In our files the front matter is defined at the top of the page or the first markdown cell.

    - First open one of the .md or .ipynb files already included in either your _posts folder or your _notebooks folder.

    - In the .md file you should notice something similar to this at the top of the page. To see this in your .ipynb files you will need to double click the markdown cell at the top of the file.

    ```yaml
    ---
    toc: true
    comments: false
    layout: post
    title: Daily Plan Sample
    description: Example Blog!!!  This shows planning and notes from hacks.
    type: plans
    courses: { compsci: {week: 0} }
    ---
    ```

- Front matter will always have '---' at the top and bottom to distinguish it and each key value pair will be separated by a ':'.

- Here we can modify things like the title and description.

- The type value will tells us which column this is going to appear under, supported values: `plans`, `hacks`, `tangibles`.

- The courses tells us which menu item it will be under, in this case the `compsci` menu, and the `week` tells it what row (week) it will appear under that menu.

- In our examples,  hacks(ToDo) contains references to our IPYNB files; these are stored in GitHub under the `_notebooks` folder.   The plans and tangibles contains references to our MD files; these are stored in GitHub under the `_posts` folder.

- Key files in Computer Science Lab Notebook
    - `compsci.md` - this is the "Computer Science Lab Notebook" page and is the link `https://nighthawkcoders.github.io/student/compsci`.  It contains the Title and Number of units on the page.
    - `_data/compsci.yml` - this contains the supporting data that helps organize the units on the page.
    - `_layouts`\schedule.html - this contains code, in the Liquid language, that generates the HTML for all the rows and columns.
    - fyi, the schedule.html could work for another type of page.  For instance, you could make a csa.md, _data/csa.yml, and tag files with `csa: {week: 0}` under courses.
