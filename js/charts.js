document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('cpuChart');
  if (!el || !window.Chart) return;
  const hours = Array.from({length:24}, (_,i)=>`${i}:00`);
  const data = hours.map((_,i)=> Math.max(5, Math.round(20 + 30*Math.sin(i/3) + 10*Math.random())));
  new Chart(el.getContext('2d'), {
    type: 'line',
    data: { labels: hours, datasets: [{ label: 'CPUUtilization (%)', data, tension: 0.35 }] },
    options: { responsive: true, scales: { y: { min: 0, max: 100 } } }
  });
});
