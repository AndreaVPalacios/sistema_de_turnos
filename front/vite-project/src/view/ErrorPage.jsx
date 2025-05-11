import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Error(){
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

    setTimeout(() => {
        clearInterval(countdownInterval);
        navigate("/home");
    }, 5000);

    return() => clearInterval(countdownInterval)
    }, [navigate])

    return(
        <div>
            <h1>Página No Encontrada</h1>
            <p>Redireccionando a la página principal {countdown}</p>
        </div>
    )
}

export default Error