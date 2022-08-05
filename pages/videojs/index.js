export default function VideoJS({ videoUrl }) {
  return (
    <video
      id="my-player"
      className="video-js"
      controls
      preload="auto"
      poster="//vjs.zencdn.net/v/oceans.png"
      data-setup="{}"
    >
      <source src={videoUrl} type="video/mp4"></source>
    </video>
  );
}

export async function getStaticProps() {
  let videoUrl =
    "https://1309400899.vod2.myqcloud.com/e9310e43vodsgp1309400899/b2e00fe6387702304180272173/f0.mp4";
  return {
    props: { videoUrl },
  };
}
