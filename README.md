# DOM-Hand-Clock 🕰️

The **Dom Hand Clock** is a simple web-based clock that displays the current time using animated hands. It's built using HTML, CSS, and JavaScript.

## Features / Explanation ✨
- The updateClock function gets the current time using the Date object.
- It calculates the rotation angles for the hour, minute, and second hands based on the current time.
- The querySelector method selects the clock hand elements from the HTML.
- The calculated angles are applied as CSS transforms to rotate the hands.
- The setInterval function ensures that the clock updates every second.
- The initial call to updateClock ensures that the clock displays the correct time immediately.
- **Hour Hand**: Indicates the current hour.
- **Minute Hand**: Indicates the current minute.
- **Second Hand**: Indicates the current second.

## Usage
1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. The clock will automatically update every second to reflect the current time.

## How It Works

The clock hands are positioned using CSS transforms based on the current time obtained from JavaScript's `Date` object. The rotation angles for each hand are calculated to ensure smooth movement.

## Preview

![Hand Clock]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
(1) https://github.com/UIPranita/To-do-app.
(2) http://igc.dnyanprasarak.com/.
(3)https://restaurantcocoskitchen.netlify.app/

