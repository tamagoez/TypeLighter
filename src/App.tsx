import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="flex w-auto space-x-4 flex-nowrap">
        <div className="artboard phone-1 horizontal artboard-demo">
          <h2>Start editing to see some magic happen!</h2>
          <p className="font-bold">Hi</p>
        </div>
      </div>
      <label for="my-modal-2" className="btn btn-primary modal-button">LEARN</label> 
      <input type="checkbox" id="my-modal-2" className="modal-toggle"> 
      <div className="modal">
        <div className="modal-box">
          <p>現在開発中のため、使用できません;; STARを付けて終了までお待ちください!</p> 
          <div className="modal-action">
            <label for="my-modal-2" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
}
