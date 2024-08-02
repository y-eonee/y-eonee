import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); //coin 데이터 가져올때까지 laoding 표시 
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")//api 불러오기 
      .then((response) => response.json()) //response에서 json (coin data) return
      .then((json) => {
        setCoins(json);
        setLoading(false); // 데이터 로드 후에 loading을 false로 설정
      });
  }, []);
 
  return (
    <div>
      <h1>The Coins! {loading? "" : `(${coins.length})`}</h1>
      {loading? (
          <strong>Loading...</strong> 
        ):(
          <select>
            {coins.map((coin) => 
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>)} 
          </select>
        ) } 
      
    </div>
  );
}

export default App;



