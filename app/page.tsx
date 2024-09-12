import PhishingBlog from "@/components/PhishingBlog";
import Image from "next/image";
import dynamic from 'next/dynamic';


const PhishingAlert = dynamic(() => import('../components/PhishingAlert'), { ssr: false });

export default function Home() {
  return (
    <main className="">
      {/* <PhishingAlert /> */}
      <PhishingBlog />
    </main>
  );
}
