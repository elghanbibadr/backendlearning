const fs = require("fs");

const steps = {
  "01-setup-and-server": [
    "GET /health returns { status: 'ok', time: ISO date }",
    "GET /hello/:name returns { message: 'Hello <name>' }",
    "GET /search?q=node returns the value of q",
    "POST /echo returns the JSON body you send",
    "Use a wrong MONGO_URI password, read the error, then fix it",
  ],
  "02-task-model-create-read": [],
  "03-update-delete-routes": [],
  "04-validation-errors": [],
  "05-users-password-hashing": [],
  "06-jwt-auth": [],
  "07-protected-routes": [],
  "08-pagination-filtering": [],
};

for (const [folder, tasks] of Object.entries(steps)) {
  fs.mkdirSync(folder, { recursive: true });
  const list = tasks.length
    ? tasks.map((t, i) => `${i + 1}. [ ] ${t}`).join("\n")
    : "_Exercises coming in this lesson._";
  fs.writeFileSync(`${folder}/README.md`, `# ${folder}\n\n## Exercises\n${list}\n\n## Notes\n`);
  fs.writeFileSync(`${folder}/server.js`, "");
}
console.log("Folders created");