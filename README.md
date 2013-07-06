# Nunjucks Append

Allows one to define a tag that subviews can append content to. Handy for
letting subviews add resources to the head or footer, for example.

## Example:

The layout - `/views/layouts/default.html`:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>The Title</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />

        {% output "javascript" %}
        <script src="/jquery.js"></script>
        {% endoutput %}
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
</html>
```

The view - `/views/index.html`:

```HTML
{% extends "/layouts/default.html" %}

{% append "javascript" %}
<!-- Will be output beneath jquery.js -->
<script src="/index-script.js"></script>
{% endappend %}

{% block content %}
<div>
    <p>The content</p>
</div>
{% endblock %}
```

The output:

```HTML
<html>
<head>
    <title>The Title</title>
    <link href="/stylesheets/style.css" rel="stylesheet">
    <script src="/jquery.js"></script>
    <!-- Will be output beneath jquery.js -->
    <script src="/index-script.js"></script>
</head>

<body>
    <div>
        <p>The content</p>
    </div>
</body>
</html>
```
