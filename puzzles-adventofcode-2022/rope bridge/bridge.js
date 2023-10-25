const http = require("http");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal server error");
      return;
    }

    data = modifyDataFunction(data);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <div id="table">${data}</div>
                    <script>
                        async function updateContent() {
                            try {
                                const response = await fetch('/');
                                const newData = await response.text();
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(newData, 'text/html');
                                document.getElementById('content').innerText = 
                                    doc.getElementById('content').innerText;
                            } catch (error) {
                                console.error('Error:', error);
                            }
                        }

                        setInterval(updateContent, 1000);
                    </script>
                </body>
            </html>
        `);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// function modifyDataFunction(data) {
//   return data + new Date().toLocaleTimeString();
// }

const vector = {
  headX: 0,
  headY: 0,
  tailX: 0,
  tailY: 0,
  tailMove: 0,
};

const sumWithInitial = data.split("").reduce(moveRope, vector);

function moveRope(vector, move) {
  //   console.log(vector, move);
  let direction = move[0];
  let steps = move[2];
  let nextMove = {};
  for (let i = 0; i < steps; i++) {
    nextMove = moveTail(moveHead(vector, direction));
  }
  return vector;
}

function moveHead(vector, direction) {
  if (direction == "U") {
    vector.headY += 1;
  } else if (direction == "R") {
    vector.headX += 1;
  } else if (direction == "D") {
    vector.headY += 1;
  } else if (direction == "L") {
    vector.headX += 1;
  }
  //   vector.direction = direction;
  return vector;
}

function moveTail(vector) {
  if (vector.headX - vector.tailX > 1) {
    // vector.tailMove += 1;
    vector.tailX += 1;
  }
  if (vector.headY - vector.tailY > 1) {
    // vector.tailMove += 1;
    vector.tailY += 1;
  }
  //   render(vector);
  return vector;
}
