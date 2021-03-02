---
layout: page
title: Contributions
description: "Collaborators to the project"
nav: people
---

<div class="people-widget">
    <div class="row people-row">

        {% for person in site.people %}
        <div class="people-person col-12 col-md-auto">
            <a href="/">
                <img class="avatar avatar-circle" src="{{ person.image }}" alt="Avatar">
            </a>
            <div class="portrait-title">
                <h2> {{ person.name }}</h2>
                {% if person.subtitle %}
                <h3>{{ person.subtitle }}</h3>
                {% endif %}
                <ul class="network-icon" aria-hidden="true">
                    {% if person.mail %}
                    <li><a href="{{ person.mail | prepend: 'mailto:' }}"><i class="fa fa-envelope"></i></a></li>
                    {% endif %}
                    {% if person.twitter %}
                    <li><a href="{{ person.twitter }}" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a></li>                            
                    {% endif %}
                    <li><a href="{{ person.github }}" target="_blank" rel="noopener"><i class="fa fa-github"></i></a></li>
                    <li><a href="{{ person.scholar }}" target="_blank" rel="noopener"><i class="fa fa-graduation-cap"></i></a></li>
                </ul>
            </div>
        </div>
        {% endfor %}

    </div>
</div>
