// API https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
           json.forEach(post => {
            console.log(post.title)
            document.getElementById("posts").innerHTML +=  `<p>${post.title}</p>`
           });
      })