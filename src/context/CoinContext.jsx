import { createContext,useEffect,useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin,setAllCoin] = useState([])
    const [curreny,setCurreny] = useState({
        name: "USD",
        symbol: "$"
    })

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-nXHn4yPq3SvvSDZtHiAbPpLE' }
        };

        const respones = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curreny.name}`, options)
        const data = await respones.json()
        setAllCoin(data)
  
    }

    useEffect(() => {
        fetchAllCoin()
    },[curreny])

    const contextValue = {
        allCoin,
        curreny,
        setCurreny
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider


