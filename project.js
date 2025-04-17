const app = document.getElementById("app");

let user = {
  registered: false,
  loggedIn: false,
  roomJoined: false,
};

function renderLanding() {
  app.innerHTML = `
    <p>Welcome to the Game Platform</p>
    <button onclick="checkRegistration()">Continue</button>
  `;
}

function checkRegistration() {
  app.innerHTML = `
    <p>Are you registered?</p>
    <button onclick="login()">Yes</button>
    <button onclick="register()">No</button>
  `;
}

function login() {
  user.loggedIn = true;
  renderPlatform();
}

function register() {
  user.registered = true;
  user.loggedIn = true;
  renderPlatform();
}

function renderPlatform() {
  app.innerHTML = `
    <p>Welcome! What would you like to do?</p>
    <button onclick="createRoom()">Create Game Room</button>
    <button onclick="joinRoom()">Join Game Room</button>
  `;
}

function createRoom() {
  app.innerHTML = `
    <p>Configure your Game Room</p>
    <button onclick="selectGameType()">Next</button>
  `;
}

function selectGameType() {
  app.innerHTML = `
    <p>Select Game Type</p>
    <button onclick="startGame('trivia')">Trivia</button>
    <button onclick="startGame('word')">Word Puzzle</button>
    <button onclick="startGame('number')">Number Challenge</button>
  `;
}

function startGame(type) {
  app.innerHTML = <p>Starting ${type} game...</p>;
  setTimeout(() => realTimeGameplay(type), 1000);
}

function joinRoom() {
  app.innerHTML = `
    <p>Enter Room Code</p>
    <input id="roomCode" placeholder="Room Code" />
    <button onclick="waitForStart()">Join</button>
  `;
}

function waitForStart() {
  user.roomJoined = true;
  app.innerHTML = <p>Waiting for game to start...</p>;
  setTimeout(() => realTimeGameplay("joined game"), 2000);
}

function realTimeGameplay(type) {
  app.innerHTML = `
    <p>Playing ${type} in real-time...</p>
    <button onclick="updateScores()">Finish Game</button>
  `;
}

function updateScores() {
  app.innerHTML = `
    <p>Scores Updated!</p>
    <button onclick="showLeaderboard()">View Leaderboards</button>
  `;
}

function showLeaderboard() {
  app.innerHTML = `
    <p>Leaderboards</p>
    <button onclick="gameSummary()">Game Summary</button>
  `;
}

function gameSummary() {
  app.innerHTML = `
    <p>Game Summary</p>
    <button onclick="renderLanding()">Return to Home</button>
  `;
}

// Initial render
renderLanding();