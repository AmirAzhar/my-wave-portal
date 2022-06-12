import { ethers } from "ethers";
import abi from "../utils/SongPortal.json";

export const addNewSong = async () => {
  try {
    const { ethereum } = window;
    const contractAddress = "0x49EfBad6EECc3E44Fd992F77116731E6Cf852764";
    const contractABI = abi.abi;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const songPortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let songs = await songPortalContract.getAllSongs();
      console.log("Retrieved all songs...", songs);

      const songTxn = await songPortalContract.addNewSong("Test");
      console.log("Mining...", songTxn.hash);

      await songTxn.wait();
      console.log("Mined -- ", songTxn.hash);

      songs = await songPortalContract.getAllSongs();
      console.log("Retrieved all songs...", songs);
    } else {
      console.log("Ethereum object doesn't exist'");
    }
  } catch (error) {
    console.log(error);
  }
};
