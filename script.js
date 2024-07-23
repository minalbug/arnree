        // Initialize the counter and target values
        let currentNumber = 10000;
        const targetNumber = 50000;
        const incrementValue = 1800;
        const interval = 1000; // 1 second

        // Get the counter element
        const counterElement = document.getElementById('counter');

        // Function to update the counter
        function updateCounter() {
          if (currentNumber < targetNumber) {
            currentNumber += incrementValue;
            // Ensure the number does not exceed the target
            if (currentNumber > targetNumber) {
              currentNumber = targetNumber;
            }
            counterElement.textContent = `₦ ${currentNumber.toLocaleString('en-US')}`;
          }
        }

        // Update the counter every second
        setInterval(updateCounter, interval);