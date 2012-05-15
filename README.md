# jquery.joyce.js

stress-test your layouts

## basic usage

include on your page after jquery:

```html
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="jquery.joyce.js"></script>
```

then, in your own javascript, use the `joyce()` method on a jQuery object.

```javascript
$(document).ready(function() {
    $('blockquote').first().joyce();
    $('article#portrait > p.readable').joyce();
});
```

this will replace all (nonempty) text nodes inside those elements (and their
descendants) with an excerpt from James Joyce's *Finnegan's Wake*, designed
to drive your layouts crazy!

you can also pass a selector matching elements you'd like `joyce` to ignore:

```javascript
$('body').joyce({ exclude: 'a, label, ' });
```

## console usage

in most cases, you won't want to include joyce on a page, but instead test
that page's layout directly from a developer console. the easiest way to do
this (tested from Chrome), is to enter this at the console:

```javascript
$.getScript('https://raw.github.com/tomjakubowski/jquery.joyce.js/master/jquery.joyce.js');
$('article.dirtyletter > p').joyce();
```
