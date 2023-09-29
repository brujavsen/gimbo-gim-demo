import Carousel from "./helper/Carousel";

const Galery = () => {

    const image = [
        '/image-gimbo-1.jpg',
        '/image-gimbo-2.jpg',
        '/image-gimbo-3.jpg'
    ]

    return (
        <div className="gallery_cnt">
            <h2>Galeria</h2>
            <Carousel img={image}/>
        </div>
    )
}

export default Galery