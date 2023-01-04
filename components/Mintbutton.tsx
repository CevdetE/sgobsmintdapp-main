import React from "react";
import { useWeb3Context } from "../context";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import { contractAddress } from "../config.json";
import NFT from "../artifacts/Stonedgoblins.json";

const freemint = async (
  provider: ethers.providers.Web3Provider,
  amount: number
) => {
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, NFT.abi, signer);

  // try {
  let mintTx = await contract.spawnfreestoners(amount);
  let tx = await mintTx.wait();

  toast.success("Successfully minted!");
  /*} catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Error";

    toast.error(`Error minting: ${message}`);
  }*/
};

const mint = async (
  provider: ethers.providers.Web3Provider,
  amount: number
) => {
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, NFT.abi, signer);

  try {
    let mintTx = await contract.spawnstoners(amount, {
      value: ethers.utils.parseEther((0.0069 * amount).toString()),
    });
    await mintTx.wait();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Error";

    toast.error(`Error minting: ${message}`);
  }

  toast.success("Successfully minted!");
};

export function Mintbutton() {
  const { web3Provider } = useWeb3Context();

  return web3Provider ? (
    <button onClick={() => freemint(web3Provider, 1)}>Mint Free</button>
  ) : (
    <text>Please connect to wallet</text>
  );
}
