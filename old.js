/* // const actionJSON = async (newUser) => {
  try {
    const pathToDB = path.join("test-db", "db.json");

    const res = await fs.readFile(pathToDB);

    const currDB = JSON.parse(res);

    console.log("Curr DB", currDB);

    if (newUser) {
      currDB.push(newUser);
      await fs.writeFile(pathToDB, JSON.stringify(currDB));
      const newDB = await fs.readFile(pathToDB);
      console.log("New DB", JSON.parse(newDB));
      return;
    }

    console.log("No User to Add");
  } catch (error) {
    console.log("Error:", error);
  }
};

actionJSON({ id: 45, name: "olena" });

const createFile = async () => {
  const dir = await fs.readdir("./");
  console.log(dir);
  await fs.mkdir("Testing/Media", { recursive: true });
  await fs.mkdir("Testing/Text", { recursive: true });
  console.log(path.extname("blended-1"));
  const stat = await fs.lstat("./");
  console.log(stat);
  //   const pathToFile = path.join("video0_8.mp4");
  //   const file = await fs.readFile(pathToFile);
  //   await fs.writeFile(`copy${path.basename(pathToFile)}`, file);
};

createFile();
 */
