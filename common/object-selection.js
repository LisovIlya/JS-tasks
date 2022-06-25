const workers = [
    {name: "John", salary: 500},
    {name: "Mike", salary: 1300},
    {name: "Linda", salary: 1500}
];

const getWorthlyWorkers = workersArr => {
    const worthyWorkers = [];

    workersArr.forEach(currentWorkers => {
        if (currentWorkers.salary > 1000) {
            worthyWorkers.push(currentWorkers.name)
        }
    })

    // for (let i = 0; i < workersArr.length; i++) {
    //     const currentWorker = workersArr[i];

    //     if (currentWorker.salary > 1000)    {
    //         worthyWorkers.push(currentWorker.name);
    //     }
    // }

    return worthyWorkers;
}

console.log(getWorthlyWorkers(workers));