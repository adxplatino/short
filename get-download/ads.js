const pa = ["partner-pub-6799779205978679:3jadfov3xyj", "partner-pub-6278983531888232:9794879523"];
const rw = pa[Math.floor(Math.random() * pa.length)];
const se = document.getElementById('sct');
se.src = `https://cse.google.com/cse.js?cx=${rw}`;
