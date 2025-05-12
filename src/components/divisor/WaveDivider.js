import "./WaveDivider.css";

function WaveDivider() {
  return (
    <div className="wave-top-container">
      <svg
        className="wave wave-blue"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,160 C360,80 1080,240 1440,160 L1440,0 L0,0 Z"></path>
      </svg>

      <svg
        className="wave wave-black"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,160 C360,0 1080,320 1440,160 L1440,0 L0,0 Z"></path>
      </svg>
    </div>
  );
}

export default WaveDivider;
