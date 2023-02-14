let ID = document.getElementById("IDNo").innerText

// GET REQUEST
function getTodos() {
/*   axios({
    method: "get",
    url: "https://my-burger-api.herokuapp.com/burgers",
    params: {
      _limit:5
    }
  })
  .then(result => showOutput(result))
  .catch(error => console.log(error)) */

  axios
  .get('http://localhost:3000/arsenal/'+ ID)
  .then(result => showOutput(result))
  .catch(error => console.log(error)) 

  console.log(ID)
}

// POST REQUEST
function addTodo() {
  axios.post("http://localhost:3000/arsenal",{
    name: "classic",
    type: "sidearm",
    discription: "The pistol you always get for free at the beginning of each round, it’s serviceable with two firing modes: mouse-1 for single bullet (more accurate at a distance) or mouse-2 for a three bullet burst (better in close quarters).",
    "primary fire": [
      "semi-automatic",
      "Fire rate: 6.75 rounds/sec"
    ],
    "Alt fire": [
      "3 - round burst, spread increase",
      "fire rate: 2.22 rounds/sec"
    ],
    Damage: [
      "0-30m = Body 26, Head 78, Leg 22",
      "30-50m = Body 22, Head 66, Leg 188"
    ],
    "Magazine Capacity": "12",
    "Wall penetration": "low"})
    
  .then(result => showOutput(result))
  .catch(error => console.log(error)) 
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .put("http://localhost:3000/arsenal")
    .then(result => showOutput(result))
    .catch(error => console.log(error))
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("http://localhost:3000/arsenal/7")
    .then(result => showOutput(result))
    .catch(error => console.log(error))
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {

  const config = {
    header:{
      'content-type': 'application/json',
      Authorization: 'sometoken'
    }
  }

  axios.post("http://localhost:3000/arsenal",{
    name: "classic",
    type: "sidearm",
    discription: "The pistol you always get for free at the beginning of each round, it’s serviceable with two firing modes: mouse-1 for single bullet (more accurate at a distance) or mouse-2 for a three bullet burst (better in close quarters).",
    "primary fire": [
      "semi-automatic",
      "Fire rate: 6.75 rounds/sec"
    ],
    "Alt fire": [
      "3 - round burst, spread increase",
      "fire rate: 2.22 rounds/sec"
    ],
    Damage: [
      "0-30m = Body 26, Head 78, Leg 22",
      "30-50m = Body 22, Head 66, Leg 188"
    ],
    "Magazine Capacity": "12",
    "Wall penetration": "low"}, config)
    
  .then(result => showOutput(result))
  .catch(error => console.log(error)) 
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use(
  config => {
  console.log(
    `${config.method.toUpperCase()} request sent to ${
      config.url
    } at ${new Date().getTime()}`
    );

  return config;},
  error => {
    return Promise.reject(error)
  }
  )

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);


