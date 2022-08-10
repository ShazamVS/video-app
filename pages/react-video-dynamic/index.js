import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  suspense: true,
});

export default function VideoJS({ videoUrl }) {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicReactPlayer player={videoUrl} />;
    </Suspense>
  );
}

export async function getStaticProps() {
  let videoUrl =
    "https://1309400899.vod2.myqcloud.com/e9310e43vodsgp1309400899/0b001d64387702304157334213/f0.mp4";
  return {
    props: { videoUrl },
  };
}
