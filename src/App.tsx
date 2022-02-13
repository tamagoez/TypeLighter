import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <label for="my-modal-2" className="btn btn-primary modal-button">LEARN</label> 
      <input type="checkbox" id="my-modal-2" className="modal-toggle"> 
      <div className="modal">
        <div className="modal-box">
          <p>現在開発中。こうご期待!</p> 
          <div className="modal-action">
            <label for="my-modal-2" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
}
