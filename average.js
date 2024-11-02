// average.js
module.exports = {
    average(values, minimum, maximum) {
        let i = 0;
        let inputNumber = 0;
        let validNumber = 0;
        let sum = 0;

        while ((values[i] !== -999) && (inputNumber < 100)) {
            inputNumber++;
            if ((values[i] >= minimum) && (values[i] <= maximum)) {
                validNumber++;
                sum += values[i];
            }
            i++;
        }

        if (validNumber > 0) {
            return sum / validNumber;
        } else {
            return -999;
        }
    }
};
