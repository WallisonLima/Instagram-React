
import { Carousel } from 'react-bootstrap'

export const StatusCarrocel = (props: any) => {
    return (
        <Carousel.Item>
            <div className="container-foto">
                <img src={props.foto} alt="imagem" ></img>
                <p>walllima</p>
            </div>
        </Carousel.Item>
    )
}