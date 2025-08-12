---
sidebar_position: 1
---

# Hott Files
HotStaq's frontend leverages .hott files, to generate HTML content. These files are downloaded by the client's web browser and executed as JavaScript. HTML tags within .hott files are escaped and transformed into JavaScript, which is then written to the HTML document.

In this guide, we'll cover the different tags used in .hott files and their specific use cases.

<\* JavaScript content \*>

Usage: <\* your_code_here \*>

This tag executes JavaScript content and outputs the result using Hot.echo. It is ideal for displaying dynamic content.

Example:
```js
<*
    let title = "HotStaq site";
*>
<!DOCTYPE html>
<html>

<head>
    <title>${title}</title>
</head>

<body>
<*
    Hot.echo ("HotStaq test site!");
*>
</body>

</html>
```

!{ HTML to be outputted and purified }

Usage: !{ your_html_here }

This tag parses the HTML content and outputs it directly to the HTML document. It is useful for rendering user-generated content or dynamic HTML that needs to be sanitized.
Example:
```js
!{ <div>${userInput}</div> }
```

STR{ JavaScript content }

Usage: STR{ your_code_here }

This tag executes JavaScript content and outputs a string using JSON.stringify. It is useful for displaying objects or arrays as strings.
Example:
```js
STR{ { name: "John Doe", age: 25 } }
```

${ JavaScript content }

Usage: ${ your_code_here }

This tag executes JavaScript content and outputs the result directly. It is suitable for displaying variables or expressions.
Example:
```
${ 2 + 2 }
```

<(arguments)=>{ JavaScript content }>

Usage: <(arguments)=>{ your_code_here }>

This tag defines JavaScript content to be executed later, such as when a user interacts with an element (e.g., clicking a button).
Example:
```
<button onclick="<(event) => {
    alert('Button clicked!');
  }>">Click me</button>
```

**NOTE** This entire block will be parsed and stored as a function, and will immediately output "Hot.CurrentPage.callFunction" in its place.

Additionally, these functions can also return a value when using a different ending tag. Available ending tags are `}>`, `}R>`, `}A>`, `}RA>`

Ending tag functionality:
* }>
  * Executes the function. Does not return anything.
* }R>
  * Executes the function and returns a value.
```
<form onsubmit="<(event)=>{ return (true); }R>"></form>
```
* }A>
  * Executes the async function and awaits it. Does not return anything.
```
<button onclick="<(event)=>{
        await Hot.API.test ();
        alert ('Button clicked');
    }A>">Click Me</button>
```
* }RA>
  * Executes the async function and awaits it, returning a value.
```
<form onsubmit="<(event)=>{
        let canContinue = true;
        let result = await Hot.API.checkCredentials ({
                "username": "username",
                "password": "asdfasdf"
            });

        if (result.error != null)
            canContinue = false;

        return (canContinue);
    }RA>"></form>
```

?( JavaScript content )

Usage: ?( your_code_here )

This tag executes JavaScript content, which must return a string. The returned string is attached to the HTML DOM object it's used on. It is ideal for customizing element attributes, and for easily having your test cases or AI point to certain objects.
Example:
```
<button ?("dynamic-content-button") class="btn">Dynamic content</button>
```

By understanding and utilizing these tags, you can create dynamic and interactive web pages with HotStaq's frontend framework while easily creating test cases.