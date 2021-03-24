---
layout: page
title: Software
description: "Software for the creation of pupil data"
nav-link: software # Unique name which is used for scroll navigation in index.html
front-page-order: 4 # Priority of the page generated in index.html
front-page-width: 8 # Describes the width of the page in columns from 1 to 12, 8 default
---



{% for item in site.software %}
<div class="software_card">
    <div class="col-md-6">
        <img src="{{ item.preview-img }}" alt="" title="">
    </div>
    <div class="col-md-6">
        <h5>
            <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
        </h5>
        <div>
            <p>
            {{ item.description }}
            </p>
        </div>
    </div>
</div>
{% endfor %}
