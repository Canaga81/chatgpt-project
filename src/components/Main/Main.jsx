import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
    
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  //! Klavyeden "Enter" tuşuna basıldığında işlenecek fonksiyon
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      onSent(); //^ onSent() fonksiyonunu çağır
    }
  }

  return (
    <div className="main">
      <div className="nav">
        <h3>CNG</h3>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Salam, Dostum.</span>
              </p>
              <p>Sənə bugün necə yardım edə bilərəm ?</p>
            </div>

            {/* <div className="cards">
              <div className="card">
                <p>Qarşıdan gələn səyahətdə görmək üçün gözəl yerlər təklif edin</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Bu konsepsiyanı qısaca xülasə edin: şəhərsalma</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>İş üçün beyin fırtınası komandasını birləşdirən fəaliyyətlər</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Aşağıdakı kodun oxunuşunu yaxşılaşdırın</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div> */}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyPress={handleKeyPress} // Klavye olay dinleyicisi
              type="text"
              placeholder="Mənə Sual Ver😉..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;