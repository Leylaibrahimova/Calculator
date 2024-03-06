document.addEventListener('DOMContentLoaded', function () {
    const seatsDiv = document.getElementById('seats');
    const reserveBtn = document.getElementById('reserve-btn');
    const cinemaSelect = document.getElementById('cinema-select');
    const seats = [];
    const totalRows = 4;
    const seatsPerRow = 10;
    const seatPrice = 100; // Her koltuk için fiyat
    let totalPrice = 0; // Toplam fiyat
  
    // Koltukları oluştur
    for (let row = 1; row <= totalRows; row++) {
      for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        const seatNumber = (row - 1) * seatsPerRow + seatNum;
        seat.textContent = `${row}-${seatNum}`;
        if (row > 1 && seatNum <= seatsPerRow) {
          seat.textContent = `${row - 1}-${seatNum}`;
        }
        seatsDiv.appendChild(seat);
        seats.push(seat);
        
        seat.addEventListener('click', function () {
          seat.classList.toggle('selected');
          calculateTotalPrice();
        });
      }
      // Satır sonunda boşluk ekle
      seatsDiv.appendChild(document.createElement('br'));
    }
    
    // Koltuk seçimine göre toplam fiyatı hesapla ve güncelle
    function calculateTotalPrice() {
      const selectedSeats = seats.filter(seat => seat.classList.contains('selected'));
      totalPrice = selectedSeats.length * seatPrice;
      // Toplam fiyatı göster
      document.getElementById('total-price').textContent = `${totalPrice} TL`;
    }
  
    // Rezervasyon yap butonuna tıklandığında seçilen koltukları göster
    reserveBtn.addEventListener('click', function () {
      const selectedSeats = seats.filter(seat => seat.classList.contains('selected'));
      const selectedSeatNumbers = selectedSeats.map(seat => seat.textContent);
      const selectedCinema = cinemaSelect.value;
      alert(`Seçilen Sinema: ${selectedCinema}\nSeçilen Koltuklar: ${selectedSeatNumbers.join(', ')}\nToplam Fiyat: ${totalPrice} TL`);
    });
  });
  