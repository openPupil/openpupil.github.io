
At the moment, this page is unpublished and not available online.

# TODO

- Update texts
- Create Google Forms and link it
- Modify robots.txt to allow scraping when public
- Update software entries
- Update under construction in index.html

- If a chart plot should be shown, plotting data from the table, see table.js and uncomment the code, and move the chart.md from misc to _pages directory



# General

The website structure is based on different collections which are used to build the content of the site.

*_includes* and *_layouts* define jekyll layouts and HTML snippets. 

Collections *_legal, _pages, _people, _posts* directly define content of the website, most of which are embedded in the index.html. 

Each collection is defined under _config.yml, for some collections explicit html files are constructed, like _posts which all have their own sub-site, for other nothing is generated as they are included in the index.html (the variable output defines wherever a file is generated).



## CSS

All website css is written in _main.scss file in the _sass folder. 3rd party css is located under assets/css.

## Javascript

All JS code is located under assets/js.



# Images

Intro pupil macro image is taken by Micheal Morse available under https://www.pexels.com/photo/macro-photo-of-eye-1486641/ for free use.


## Image Gallery
The gallery is defined in img_gallery.html under includes, the liquid script searches for files that match the given path in assets and displays them

**Note**: This means that when in different directories, images with the same name are contained, they are displayed for both posts. <b>Always name images different, as they are thrown in one big pot.</b>



# Table generation

Table data is generated through post files defined in the directory _posts. This will create a jekyll collection named site.posts which is used to generate a plain HTML table in the file table.html in the folder _includes. This html table is then integrated in the page datasets.md under _pages, where it is displayed using the javascript library datatables.js. All datatables code in written in table.js

**Caution**: When changing the plain HTML table columns, the column indizes in table.js need to be updated.

## Table Data

The table data is defined through the _posts collections, each file in the _posts directory defines a set of frontmatter/meta variables which represent the table data and is accessed in the table generation under table.html.



# Misc

The _misc directory contains some pages files that are currently not used but may be useful
- search.md: a search widget that can search in post data
- chart.md: a chart plot showing some data from the table data
