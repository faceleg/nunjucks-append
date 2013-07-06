# Nunjucks Append

Allows one to define a tag that subviews can append content to. Handy for
letting subviews add resources to the head or footer, for example.

## Example:

`layout.html`:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>The Title</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />

        {% output "javascript" %}
        <script src="/jquery.js" type="text/javascript"></script>
        {% endoutput %}
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
</html>
```

`index.html`:

```HTML
{% extends "/layouts/default.html" %}

{% append "javascript" %}
<!-- Will be output beneath jquery.js -->
<script type="text/javascript" src="/index-script.js"></script>
{% endappend %}

{% block content %}
<div>
    <p>The content</p>
</div>
{% endblock %}
```
