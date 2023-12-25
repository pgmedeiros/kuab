export default function Class() {
    return(
      <Video/>
    );
}

function Video() {
  return(
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/h_cscbKu-lY?si=jg_0vx1FqFh-v76b" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
    </iframe> 
  );
}