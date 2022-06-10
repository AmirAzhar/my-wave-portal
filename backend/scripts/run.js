const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const songContractFactory = await hre.ethers.getContractFactory("SongPortal");
  const songContract = await songContractFactory.deploy();
  await songContract.deployed();
  console.log("Contract deployed to:", songContract.address);
  console.log("Contract deployed by:", owner.address);

  let allSongs;
  allSongs = await songContract.getAllSongs();

  let songTxn = await songContract.addNewSong("My song 1");
  await songTxn.wait();

  allSongs = await songContract.getAllSongs();

  songTxn = await songContract.connect(randomPerson).addNewSong("My song 2");
  await songTxn.wait();

  allSongs = await songContract.getAllSongs();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
