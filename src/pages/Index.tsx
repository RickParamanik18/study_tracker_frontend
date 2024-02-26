import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
type Topic = {
    name: string;
    date: string;
};
const Index = () => {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        axios
            .get("https://study-tracker-backend-vert.vercel.app/topic", {
                headers: {
                    creator: "sumana",
                },
            })
            .then((res) => {
                setTopics(res.data.data);
            })
            .catch((err) => console.error(err));
    }, [topics]);
    return (
        <>
            <button
                style={{
                    margin: "10px 2px",
                    padding: "10px 20px",
                }}
                onClick={() => setIsVisible(true)}
            >
                Add Progress
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <table
                    style={{
                        border: "1px solid black",
                    }}
                >
                    <tr>
                        <th>Sl No.</th>
                        <th>Date</th>
                        <th>Topic Name</th>
                    </tr>
                    {topics
                        .map((topic, index) => (
                            <tr
                                key={index}
                                style={{
                                    padding: "10px",
                                }}
                            >
                                <td>{index + 1}</td>
                                <td>{topic.date}</td>
                                <td>{topic.name}</td>
                            </tr>
                        ))
                        .reverse()}
                </table>
                <Modal isVisible={isVisible} setIsVisible={setIsVisible} />
            </div>
        </>
    );
};

export default Index;
