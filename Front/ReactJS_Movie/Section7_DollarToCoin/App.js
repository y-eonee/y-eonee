import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); //coin 데이터 가져올때까지 laoding 표시 
  const [coins, setCoins] = useState([]); //가상화폐 정보 
  const [dollar, setDollar] = useState(""); // 입력된 달러 값을 저장
  const [btc, setBtc] = useState(0); //변환된 코인값 저장 (최종 출력)
  const [selectedCoin, setSelectedCoin] = useState(null); // 선택된 코인 정보를 저장

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")//api 불러오기 
      .then((response) => response.json()) //response에서 json (coin data) return
      .then((json) => {
        setCoins(json);
        setLoading(false); // 데이터 로드 후에 loading을 false로 설정
      });
  }, []);

  function handleCoinChange(event){ //화폐 정보를 바꾸는 경우 달러값 변환
    const coinInfo = coins.find((coin) => coin.id === event.target.value);
    setSelectedCoin(coinInfo); //선택된 코인 정보로 state 변경 
    if (coinInfo && dollar) { //둘다 state가 존재하는 경우
      setBtc(dollar / coinInfo.quotes.USD.price); // 선택된 코인의 가격으로 변환
    }
  }
 
  function onChangeDollar(event){ //달러 값이 변하는 경우 다시 달러 계산 
    setDollar(parseInt(event.target.value)); //달러를 int로 바꾸고 state에 저장 
    if(selectedCoin) //coin이 선택된 경우
      setBtc(dollar/selectedCoin.quotes.USD.price); //입력된 달러 -> 가상화폐 변환 
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? ( //api데이터 가져오는동안 loading 표시 
         <strong>Loading...</strong>  
      ) : (
        <>
          <select onChange={handleCoinChange} defaultValue=""> //기본 select 설정 
            <option value="" disabled>Select a coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)} //coin 정보 띄우기 
              </option>
            ))}
          </select>
          <form>
            <input 
              type="number"
              value={dollar} 
              onChange={onChangeDollar} 
              placeholder="dollar?" /> //변환할 달러 입력 
          </form>
          {selectedCoin && (
            <h2>
              You can exchange ${dollar} to {btc.toFixed(6)} {selectedCoin.symbol}
            </h2>
          )}
        </>
      )} 
    </div>
  );
}

export default App;



