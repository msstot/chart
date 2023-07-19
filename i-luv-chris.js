var layout = {
  title: {
    text:'Wavelength 🌊 Vs. Percent reflectance📈',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Wavelength 🌊',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Percent Reflectance 📈',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};
TESTER = 
document.getElementById('tester');
Plotly.newPlot(
  TESTER,
  [
    {
  x:[470,525,560,585,600,645,700,735,810,880,940],
  y:[16.38,27.86,24.87,18.73,17.17,20.85,28.46,29.44,61.92,84.62,91.09]
    }
],
layout
  );