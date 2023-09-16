import React, { useState, useEffect } from "react";

const Statewise = () => {

    let curTime = new Date().toLocaleTimeString();

    const [data, setData] = useState([]);
    const [time , setTime] = useState(curTime);

    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    }

    useEffect(() => {
        getCovidData();
    }, []);

    setInterval(()=>{
        curTime = new Date().toLocaleTimeString();
        setTime(curTime);
    })



    return (
        <>

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">INDIA STATEWISE COVID-19 DASHBOARD</h1>
                    <h2 className="text-center mb-3 text-bg-danger p-md-2">{time}</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>States</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updates</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curElement, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{curElement.state}</td>
                                                <td>{curElement.confirmed}</td>
                                                <td>{curElement.recovered}</td>
                                                <td>{curElement.deaths}</td>
                                                <td>{curElement.active}</td>
                                                <td>{curElement.lastupdatedtime}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise;









