// /import dynamic from "next/dynamic";
// import { Suspense } from "react";

// const DynamicVideoPlayer = dynamic(() => import("../components/header"), {
//   suspense: true,
// });

// export default function VideoJS({ videoUrl }) {
//   return (
//     <DynamicVideoPlayer
//       id="my-player"
//       className="video-js"
//       controls
//       preload="auto"
//       data-setup="{}"
//       height="500px"
//       width="500px"
//       autoPlay="true"
//       muted="true"
//     >
//       <source src={videoUrl} type="video/mp4"></source>
//     </DynamicVideoPlayer>
//   );
// }

// export async function getStaticProps() {
//   let videoUrl =
//     "https://1309400899.vod2.myqcloud.com/e9310e43vodsgp1309400899/0b001d64387702304157334213/f0.mp4";
//   return {
//     props: { videoUrl },
//   };
// }

import React from "react";

export default function index() {
  return <div>Pending</div>;
}
