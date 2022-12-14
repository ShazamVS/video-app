import ReactPlayer from "react-player";

export default function VideoJS({ videoUrl }) {
  return <ReactPlayer url={videoUrl} />;
}

export async function getStaticProps() {
  let videoUrl =
    "https://1309400899.vod2.myqcloud.com/e9310e43vodsgp1309400899/0b001d64387702304157334213/f0.mp4";
  return {
    props: { videoUrl },
  };
}
