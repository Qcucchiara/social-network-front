import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Social-Network: Connect and Share Moments</title>
        <meta
          name="description"
          content="Rejoignez Social-Network pour vous connecter, partager et explorer des moments avec une communauté vibrante. Découvrez de nouvelles amitiés et exprimez-vous librement !"
        />
        <meta
          property="og:title"
          content="Social-Network: Connect and Share Moments"
        />
        <meta
          property="og:description"
          content="Rejoignez Social-Network et connectez-vous avec le monde. Partagez, explorez et exprimez-vous dans une communauté active !"
        />
        <meta property="og:image" content="/landing-page-illustration.svg" />
        <meta property="og:url" content="https://votre-site.com" />
      </Head>
      <div className=" px-8 sm:px-2 flex max-w-screen-lg flex-col mx-auto items-center pt-16 gap-4 bg-white h-max">
        <h1 className=" text-4xl text-center font-bold">
          Connect and Share Moments with the World
        </h1>
        <h2 className="text-2xl text-center">Welcome to Social-Network</h2>
        <p className=" text-center">
          Join A vibrant community where you can connect, share, and experience
          life together. <br />
          Create moments, explore new friendships, and express yourself with
          ease.
        </p>
        <Link href={"/authentification"}>
          <Button className=" bg-teal-700 text-white">Join Now</Button>
        </Link>
        <Image
          width={500}
          height={500}
          src={"/landing-page-illustration.svg"}
          alt={
            "an illustration of subjects you can speak about on this social network"
          }
        />
        <ul>
          <li>
            <strong>Discover Interests:</strong> Find communities and people who
            share your passions.
          </li>
          <li>
            <strong>Express Freely:</strong> Post, comment, and react to what
            matters to you.
          </li>
          <li>
            <strong>Stay Connected:</strong> Real-time updates keep you in the
            loop with friends and trending topics.
          </li>
        </ul>
      </div>
    </>
  );
}
