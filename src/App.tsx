// 不再需要导入 App.css，UnoCSS 会提供所有样式
import AirConditioner from "./components/AirConditioner";

function App() {
  return (
    <div className="max-w-320px mx-auto p-8 text-center">
      <AirConditioner />
    </div>
  );
}

export default App;
