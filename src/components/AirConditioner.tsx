import { useState, useEffect } from "react";
import "./AirConditioner.css";

const AirConditioner = () => {
  // 状态管理
  const [power, setPower] = useState(false);
  const [temp, setTemp] = useState(26);
  const [mode, setMode] = useState<"cool" | "heat" | "fan" | "dry">("cool");
  const [fanSpeed, setFanSpeed] = useState<"low" | "medium" | "high" | "auto">(
    "medium"
  );
  const [swing, setSwing] = useState(false);

  // 环境温度模拟
  const [roomTemp, setRoomTemp] = useState(28);
  const [targetReached, setTargetReached] = useState(false);

  // 模拟温度变化
  useEffect(() => {
    if (!power) {
      setTargetReached(false);
      return;
    }

    const interval = setInterval(() => {
      setRoomTemp((prev) => {
        let newTemp = prev;
        const diff = temp - prev;

        if (mode === "cool") {
          newTemp +=
            diff > 0
              ? 0
              : -0.2 *
                (fanSpeed === "low" ? 0.7 : fanSpeed === "high" ? 1.3 : 1);
        } else if (mode === "heat") {
          newTemp +=
            diff > 0
              ? 0.2 * (fanSpeed === "low" ? 0.7 : fanSpeed === "high" ? 1.3 : 1)
              : 0;
        } else if (mode === "fan") {
          newTemp += diff > 0 ? 0.05 : -0.05;
        }

        if (Math.abs(newTemp - temp) < 0.5) {
          setTargetReached(true);
        } else {
          setTargetReached(false);
        }

        return parseFloat(newTemp.toFixed(1));
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [power, temp, mode, fanSpeed]);

  // 控制方法
  const increaseTemp = () => temp < 30 && setTemp((t) => t + 1);
  const decreaseTemp = () => temp > 16 && setTemp((t) => t - 1);
  const togglePower = () => setPower(!power);

  const changeMode = () => {
    const modes = ["cool", "heat", "fan", "dry"];
    setMode(modes[(modes.indexOf(mode) + 1) % modes.length] as any);
  };

  const changeFanSpeed = () => {
    const speeds = ["low", "medium", "high", "auto"];
    setFanSpeed(speeds[(speeds.indexOf(fanSpeed) + 1) % speeds.length] as any);
  };

  const toggleSwing = () => setSwing(!swing);

  // 获取模式图标
  const getModeIcon = () => {
    switch (mode) {
      case "cool":
        return "❄️";
      case "heat":
        return "☀️";
      case "fan":
        return "🌀";
      case "dry":
        return "💧";
      default:
        return "❄️";
    }
  };

  // 获取风速图标
  const getFanSpeedIcon = () => {
    switch (fanSpeed) {
      case "low":
        return "⬇️";
      case "medium":
        return "➡️";
      case "high":
        return "⬆️";
      case "auto":
        return "🔄";
      default:
        return "➡️";
    }
  };

  // 获取风速动画类
  const getWindClass = () => {
    if (!power) return "";
    return `wind-${mode} wind-${fanSpeed}`;
  };

  return (
    <div className="air-conditioner">
      {/* 空调顶部出风口 */}
      <div className={`ac-vent ${getWindClass()}`}>
        <div className="vent-louvers">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`louver ${swing ? "swinging" : ""}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
        <div className="wind-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${5 + i * 4.5}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 空调主体 */}
      <div className="ac-body">
        {/* 显示屏 */}
        <div className={`ac-display ${power ? `mode-${mode}` : "power-off"}`}>
          {power ? (
            <>
              <div className="temp-display">
                <span className="current-temp">{temp}</span>
                <span className="temp-unit">°C</span>
              </div>
              <div className="room-temp">
                室温: {roomTemp}°C
                {targetReached && <span className="target-indicator">✓</span>}
              </div>
              <div className="status-info">
                <span className="mode-indicator">
                  {getModeIcon()}{" "}
                  {mode === "cool"
                    ? "制冷"
                    : mode === "heat"
                    ? "制热"
                    : mode === "fan"
                    ? "送风"
                    : "除湿"}
                </span>
                <span className="fan-indicator">
                  {getFanSpeedIcon()}{" "}
                  {fanSpeed === "low"
                    ? "低速"
                    : fanSpeed === "high"
                    ? "高速"
                    : fanSpeed === "auto"
                    ? "自动"
                    : "中速"}
                </span>
              </div>
            </>
          ) : (
            <div className="power-off-message">
              <div className="power-icon">⏻</div>
              <div>点击电源开启</div>
            </div>
          )}
        </div>

        {/* 控制面板 */}
        <div className="control-panel">
          {/* 电源按钮 */}
          <button
            className={`power-btn ${power ? "on" : "off"}`}
            onClick={togglePower}>
            {power ? "关机" : "开机"}
          </button>

          {/* 温度控制 */}
          <div className="temp-control">
            <button
              className="temp-btn decrease"
              onClick={decreaseTemp}
              disabled={!power || temp <= 16}>
              −
            </button>
            <div className="temp-indicator">{power ? `${temp}°C` : "--"}</div>
            <button
              className="temp-btn increase"
              onClick={increaseTemp}
              disabled={!power || temp >= 30}>
              +
            </button>
          </div>

          {/* 功能按钮 */}
          <div className="function-buttons">
            <button
              className={`mode-btn ${power ? "active" : ""}`}
              onClick={changeMode}
              disabled={!power}>
              模式
            </button>
            <button
              className={`fan-btn ${power ? "active" : ""}`}
              onClick={changeFanSpeed}
              disabled={!power}>
              风速
            </button>
            <button
              className={`swing-btn ${power ? (swing ? "on" : "off") : ""}`}
              onClick={toggleSwing}
              disabled={!power}>
              扫风
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditioner;
