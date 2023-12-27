import styles from '@/app/app.module.css'

export default function Course() {

    return(
        <div className= {styles.main}>
            <Video/>
            <Video/>
        </div>
    );
}

function Video() {
    return(
    <div className={ styles.videoBlock }>
        <iframe 
        className={ styles.videoIframe } 
        src="https://www.youtube.com/embed/h_cscbKu-lY?si=jg_0vx1FqFh-v76b" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
      <p>Acesse o original: LINK PARA O YOUTUBE</p>
    </div>           
    );
  }