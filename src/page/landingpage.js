import React, { useEffect, useState } from 'react';
import { apiURL } from '../api/data';
import axios from 'axios';
import { CardList } from '../components/cardList';
const Landingpage = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    function getSessionStorageOrDefault(key, defaultValue) {
        const stored = sessionStorage.getItem(key);
        if (!stored) {
            return defaultValue;
        }
        return JSON.parse(stored);
    }


    useEffect(() => {
        setLoading(true);
        axios.get(apiURL).then((res) => {
            setData(res.data);
            sessionStorage.setItem("data", JSON.stringify(res.data));
        });

        setLoading(false);
    }, []);

    const sessionData = getSessionStorageOrDefault("data", data);
    const unDone = sessionData.filter(list =>
        list.status === 0
    );
    const done = sessionData.filter(list =>
        list.status === 1
    );
    return (
        <>
            {sessionData && (
                <>
                    <div className="h-screen bg-gray-900">
                        <h2 className="bg-purple-600 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto  mb-5 p-5 mb-24 border-gray-400 rounded-lg">My Todo List:</h2>
                        <div className="flex justify-around">
                            <CardList data={unDone} status={"Unfinished"} />
                            <CardList data={done} status={"Finished"} />
                        </div>

                    </div>
                </>

            )}
        </>



    );
}

export default Landingpage;