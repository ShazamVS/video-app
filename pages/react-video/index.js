import ReactPlayer from "react-player";

export default function Video({ videoUrl }) {
  return <ReactPlayer url={videoUrl} controls playing={true} />;
}

export async function getStaticProps() {
  let videoUrl =
    "https://1309400899.vod2.myqcloud.com/e9310e43vodsgp1309400899/b2e00fe6387702304180272173/f0.mp4";
  return {
    props: { videoUrl },
  };
}
