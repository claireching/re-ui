import {chooseRandom} from "../../helper/utils";

const DATA_LENGTH = 10;
const DATA_SAMPLE = {
    id: 1,
    name: "John",
    age: 30,
    country: "MY",
    height: 170,
    weight: 70,
    IQ: 100,
    income: 6000,
    status: "done"
};
const generateData = () => {
    const DATA = [];
    const headers = [];
    for (let i = 0; i < DATA_LENGTH; i++) {
        const toInsert = {};
        Object.keys(DATA_SAMPLE).forEach(k => {
            const value = DATA_SAMPLE[k];
            switch (k) {
                case "id":
                    toInsert.id = i + 1;
                    break;
                case "name":
                    toInsert.name = (Math.random() + 1).toString(36).substring(7);
                    break;
                case "age":
                case "height":
                case "weight":
                case "IQ":
                case "income":
                    let add = [10, 20, 3, 4, 5];
                    if (k === "income") {
                        add = [10000, 200, 300, 400, 500];
                    }
                    toInsert[k] = chooseRandom(add);
                    break;
                case "country":
                    toInsert.country = "MY";
                    break;
                case "status":
                    let statusArr = ["done", "processing", "open"];
                    toInsert[k] = chooseRandom(statusArr);
            }
            if (headers?.length < Object.keys(DATA_SAMPLE)?.length) {
                headers.push(k);
            }
        });
        DATA.push(toInsert);
    }

    return {data: DATA, headers};
};

export default generateData
