// Hämtar data från posts.json
async function fetchPosts() {
    try {
      const response = await fetch("./posts.json");
  
      if (!response.ok) {
        throw new Error("Något gick fel vid hämtning av data.");
      }
  
      const data = await response.json();
      appendPosts(data)

    } catch (error) {
      console.log(error);
    }
  }

  fetchPosts() 

// visar objekt från post.json till posts.html   
function appendPosts(data) {
    
    data.forEach(element => {
    const posts = document.querySelector(".posts")
    const section = document.createElement("section")
    const h2 = document.createElement("h2")
    const a = document.createElement("a")
    const img = document.createElement("img")
    const p = document.createElement("p")

    section.setAttribute("class", element.name)
    a.setAttribute("href", element.link)
    img.setAttribute("src", element.image)


    h2.innerText = element.name
    p.innerText = element.description

    a.append(img)
    section.append(h2, a, p)
    posts.append(section)

    });
  }