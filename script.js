function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
  
    const hourDegrees = hours * 30 + 0.5 * minutes; // 360/12 = 30 degrees per hour
    const minuteDegrees = minutes * 6 + 0.1 * seconds; // 360/60 = 6 degrees per minute
    const secondDegrees = seconds * 6; // 360/60 = 6 degrees per second
  
    hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDegrees}deg)`;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to avoid delay in displaying the clock
  updateClock();
  