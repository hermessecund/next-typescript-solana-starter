import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useProgram , useClaimNFT, useProrgamMetadata, useClaimConditions } from "@thirdweb-dev/react/solana"
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {const Home: NextPage = () => {
     const { program } = useProgram("3PHKaLH1QwP3jWbwBvn3PjhsW4b7cgpTPKbEKNwsgKJT", "nft-drop");
     const { mutateAsync: claim, isLoading, error } = useClaimNFT(program););
   const { data: metadata, isLoading, loadinMetadata } = useProgramMetadata(program););
   const { data: claimConditions, isLoading, loadingClaimConditionserror } = useClaimConditions(program););


  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/thirdweb.svg"
            height={75}
            width={115}
            objectFit="contain"
            alt="thirdweb"
          />
          <Image
            width={75}
            height={75}
            src="/sol.png"
            className={styles.icon}
            alt="sol"
          />
        </div>
        <h1 className={styles.h1}>Solana, meet thirdweb 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <WalletMultiButton />
      </div>
    </>
  );
};

export default Home;
