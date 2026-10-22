const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
  <div class="chili-card-img">
    <img src="${chili.img}" alt="${chili.nama}">
  </div>
  <div class="card-body-padding"> <!-- 👈 INI KUNCI AGAR TEKS TIDAK TUMPANG TINDIH -->
    <div class="chili-card-header">
      <div>
        <h3 class="chili-name">${chili.nama}</h3>
        <div class="chili-latin">${chili.namaLatin}</div>
      </div>
      <span class="badge-heat ${badgeClass}">${chili.tingkatPedasText}</span>
    </div>
    
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px;">${chili.deskripsi}</p>
    
    <div class="scoville-bar-wrap">
      <div class="scoville-info">
        <span>Tingkat Scoville (SHU):</span>
        <span style="color: var(--chili-red);">${chili.shu}</span>
      </div>
      <div class="scoville-bar">
        <div class="scoville-fill" style="width: ${chili.shuPercent}%;"></div>
      </div>
    </div>

    <div class="chili-details">
      <div class="chili-detail-row">
        <span class="chili-detail-label">📍 Asal Utama:</span>
        <span class="chili-detail-value">${chili.asal}</span>
      </div>
      <div class="chili-detail-row">
        <span class="chili-detail-label">👅 Karakter Rasa:</span>
        <span class="chili-detail-value">${chili.rasa}</span>
      </div>
      <div class="chili-detail-row">
        <span class="chili-detail-label">🍳 Cocok Untuk:</span>
        <span class="chili-detail-value">${chili.penggunaan}</span>
      </div>
    </div>
  </div>
`;
container.appendChild(card);