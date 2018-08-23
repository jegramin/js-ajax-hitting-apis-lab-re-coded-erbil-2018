const rootURL = "https://api.github.com";

function getRepositories(){
  const name = document.getElementById("username").value;
  const url = rootURL + "/user/" + name + "/repos";
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", displayRepositories);
  xhr.open("GET", url);
  xhr.send();
}
function displayRepositories(){
  const repos = JSON.parse(this.responsText);
  const repoLoist = "<ul>" + repos.map(repo =>{
    const dataUsername = 'data-username:"' + repo.owner.login +'"';
    const dataRepository = 'data-repository:"' + repo.name + '"';
    return(
      `<li>
        <h3>${repo.name}</h3>
        <a href="repo.html_url">${repo.html_url}</a><br>
        <a href="#" ${dataUsername} ${dataRepository} onclick="getCommits(this)">Get Commits</a><br>
        <a href="#" ${dataUsername} ${dataRepository} onclick="getBranches(this)">Get Branches</a>
      </li>`
    )
  }).join('') + "</ul>";
  document.getElementById(repositories).innerHTML = repoLoist;
}

function getCommits(el){
  const repoName = el.dataset.repository
  const url = rootURL + "/repos/" + el.dataset.username + "/" + repoName + "/commits"
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", displayCommits)
  xhr.open("GET", url)
  xhr.send()
}
function displayCommits(){
  const commits = JSON.parse(this.responsText);
  const commitList = `<ul>${commits.map(commit => {
    
  })}`
}


