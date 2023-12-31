import styles from '../../app.module.css'
import { getLectures } from '../../lib/data';

export default async function Course({ params }: { params: { id : string } }) {

    console.log('entrou funcao course');

    console.log(params.id);

    const lectures = await getLectures(params.id);

    return(
        <div className= {styles.main}>
            { lectures?.map((lecture) => {
                return (
                    <Video key= {lecture.link} link= {lecture.link} />
                );
            }) }
        </div>
    );
}

function Video({link} : {link: string}) {
    return(
    <div className={ styles.videoBlock }>
        <iframe 
        key= { link }
        className={ styles.videoIframe } 
        src= { link } 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
    </div>           
    );
  }