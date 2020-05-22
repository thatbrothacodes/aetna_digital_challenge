import { isNumber } from "util";

(() => {
    const params = process.argv.slice(2);
    let inputError = false;

    for(let x = 0; x < params.length; x++) {
        try {
            const input = JSON.parse(params[x]);
            if(!Array.isArray(input)) {
                inputError = true;
                break;
            } else {
                const items = input;

                for(let z = 0; z < items.length; z++) {
                    if(!isNumber(items[z]) && items[z]) {
                        inputError = true;
                        break;
                    }
                }

                if(inputError) {
                    break;
                }
            }
        } catch (e) {
            throw "Invalid Input. Input must be arrays of numbers."
        }
    }

    if(inputError) {
        throw "Invalid Input. Input must be arrays of numbers."
    } else {
        let inputArrays = [];

        params.forEach((p) => {
            inputArrays = [
                ...inputArrays,
                ...JSON.parse(p)
            ];
        });

        inputArrays.sort((a,b) => {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        })

        console.log(inputArrays);
    }

})();
