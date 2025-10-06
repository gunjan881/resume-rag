const jobs = [ 
  { title: "Frontend Developer", skills: "HTML, CSS, JavaScript, React" }, 
  { title: "Data Scientist", skills: "Python, ML, NLP, Embeddings" },
  { title: "Backend Developer", skills: "Node.js, Express, PostgreSQL, APIs" }
]; 

function matchJobs(){ 
  let results = document.getElementById("results");
  results.innerHTML = "";

  jobs.forEach(job => { 
    let div = document.createElement("div"); 
    div.classList.add("job-card"); 
    div.innerHTML = `<h3>${job.title}</h3><p>Skills: ${job.skills}</p>`; // FIXED
    results.appendChild(div);
  });
}
