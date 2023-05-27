document.getElementById("getPosts").addEventListener("click", getPosts);
function getPosts() {
  let fname = document.getElementById("f_name").value;
  let sname = document.getElementById("s_name").value;
  reloadBtn = document.getElementById("reload");
  const url =
    "https://love-calculator.p.rapidapi.com/getPercentage?sname=" +
    `${sname}` +
    "&" +
    "fname=" +
    `${fname}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c012ccc51emshfbcc95305cdffd7p1c052ejsn4f4521cac371",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      let output = ``;
      output += `
                      <div class="container">
                        <h3>${data.percentage}%</h3>
                        </div>
                      `;
      let result = `
            `;
      let urresult = `<h3>your love score is</h3>`;
      result += `<h2>${data.result}</h2>`;
      reloadBtn.style.display = "block";
      document.getElementById("score").innerHTML = output;
      document.getElementById("loveinfo").innerHTML = result;
      document.getElementById("yourlovescoreis").innerHTML = urresult;
    })
    .catch((err) => console.log(err));
}
