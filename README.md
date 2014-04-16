arabisk
=======

A jQuery plugin that helps you write arabic words and phrases more easily on the Internet.

## How to use

- Load jQuery into your project
``` html
// jQuery
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script> window.jQuery || document.write('<script src="jquery-2.1.0.min.js"><\/script>') </script>
```
- Load Arabisk plugin into your project
``` html
// Arabisk
<script src="jquery.arabisk.js" type="text/javascript"></script>
```

- Setup which elements/inputs you would like to apply this plugin to.

```javascript
  $("mySelector").arabisk();
```

## Exemples
```javascript
// With ID
  $("input#myid").arabisk();

// With Class
  $("textarea.myclass").arabisk();

// OR all input element
  $("input[type=text], textarea").arabisk();

```
## Keys index

<table>
  <tr>
    <td>a</td>
    <td>a</td>
    <td>a</td>
    <td>a</td>
  </tr>
</table>

#### Using Options
```javascript
$("input").addClear({top : -2, right : 6});
```
