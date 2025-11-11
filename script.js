
function fetch_and_display(){
fetch("https://api.webz.io/newsApiLite?token=b2d23044-d4ff-484f-ae9e-fcead8575798&q=Headlines")
.then(response => response.json()).then(data=> 
{
  document.getElementsByClassName("main")[0].innerHTML=
  data["posts"].map(
    (item)=>{
      return ` 
        <div class="card">
           <div class="inner" id="author">author: <p>${item["author"]}</p></div> 
           <div class="inner" id="heading">heading: <p>${item["title"]}</p></div>
           <div class="inner" id="url" >url: <a href=${item["url"]}>check here</a></div>
        </div>
`;
    }
  ).join("");
}

);
}
 