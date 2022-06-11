import { ethers } from "ethers";

export const sing = async () => {
  try {
    const { ethereum } = window;

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
    } else {
      console.log("Ethereum object doesn't exist'");
    }
  } catch (error) {
    console.log(error);
  }
};
