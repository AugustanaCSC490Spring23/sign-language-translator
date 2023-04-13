import { useParams } from "react-router-dom";

const WordDetails = () => {
    const { text } = useParams();
    return <div>
        {text}
    </div>
}

export default WordDetails;