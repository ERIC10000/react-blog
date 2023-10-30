import { useState, useEffect } from "react";

const Conference = () => {

    const [rooms, setRooms] = useState(null)

    useEffect(() => {

        fetch('https://musau.pythonanywhere.com/getconference_room')
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data)
                setRooms(data)
                console.log(rooms)
            })

    }, []);

    return (
        <div className="home">
            <h2>Conference Rooms</h2>
            {rooms && rooms.map((room) => (
                <div style={{
                    padding: "15px",
                    margin: "10px",
                    backgroundColor: "yellow",
                    borderRadius: "15px"
                }}>
                    <h4>{room.room_name}</h4>
                    <h5>Number of Persons: {room.num_of_persons}</h5>
                    <p>{room.room_desc}</p>
                    <small style={{
                        color: "green"
                    }}>{room.availability}</small> <br />
                    <img src={room.image_url} style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "12px"
                    }} />
                </div>
            ))}
        </div>
    );
}

export default Conference;