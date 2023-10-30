import { useEffect } from "react";
import { useState } from "react";

const Nurses = () => {

    const [labs, setLabs] = useState(null)

    useEffect(() => {

        fetch('https://modcom.pythonanywhere.com/api/laboratories')
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data)
                setLabs(data)
                console.log(labs)
            })

    }, []);

    return (
        <div className="home">
            <h1>Laboratories</h1>
            {labs && labs.map((lab) => (
                <div>
                    <h1>{lab.lab_name}</h1>
                    <p>Email: {lab.email}</p>
                    <p>Permit: {lab.permit_id}</p>
                </div>

            ))}

        </div>
    );
}

export default Nurses;