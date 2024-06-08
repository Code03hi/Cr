import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({history}) => {

    const [data,setData] = useState([["Date","Prices"]])

    useEffect(() => {
        let dataCopy = [["Date","Prices"]]
        if(history.prices){
            history.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setData(dataCopy)
        }
    },[data])

    return (
        <Chart
            chartType="LineChart"
            height="100%"
            data={data}
            legendToggle
        />
    )
}

export default LineChart
