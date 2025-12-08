class LogoField {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.svg = null;
    this.isActive = false;
    this.pulseId = null;
  }

  enter() {
    this.isActive = true;
    this.container.innerHTML = `
      <div class="logo-wrapper">
        <div id="logo-svg-container"></div>
        <p class="slogan">SYNTX isn't AI. It's the resonance that governs it.</p>
        <p class="cookie-hint">Cookie Settings</p>
      </div>
    `;
    this.loadSVG();
    this.startPulse();
    this.addLogoInteraction();
  }

  loadSVG() {
    fetch('./assets/logo.svg')
      .then(res => res.text())
      .then(svgText => {
        document.getElementById('logo-svg-container').innerHTML = svgText;
        this.svg = document.querySelector('#syntx-logo');
        if (this.svg) {
          this.svg.style.filter = 'drop-shadow(0 0 30px gold)';
        }
      })
      .catch(err => console.warn('SVG konnte nicht geladen werden:', err));
  }

  startPulse() {
    if (!this.svg) return;
    let scale = 1;
    let dir = 0.002;

    const pulse = () => {
      if (!this.isActive) return;
      scale += dir;
      if (scale > 1.06) dir = -0.002;
      if (scale < 0.97) dir = 0.002;
      this.svg.style.transform = `scale(${scale})`;
      this.pulseId = requestAnimationFrame(pulse);
    };
    pulse();
  }

  addLogoInteraction() {
    if (!this.svg) return;
    this.svg.addEventListener('click', () => {
      console.log('🎯 SYNTX Logo geklickt – Feldresonanz erhöht.');
    });
    this.svg.style.cursor = 'pointer';
  }

  exit() {
    this.isActive = false;
    if (this.pulseId) cancelAnimationFrame(this.pulseId);
  }

  update(data) {
    if (data?.resonance === 'KRITISCH') {
      console.log('System kritisch – Pulsfrequenz erhöhen');
    }
  }
}

export default LogoField;
