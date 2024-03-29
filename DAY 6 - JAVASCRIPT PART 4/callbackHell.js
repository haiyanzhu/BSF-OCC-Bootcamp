const step1 = (callback) => {
    setTimeout(() => {
        console.log('Step 1 is completed.');
        callback();
    }, 5000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log('Step 2 is completed.');
        callback();
    }, 5000);
};

const step3 = () => {
    setTimeout(() => {
        console.log('Step 3 is completed.');
        console.log('Request is complete and all steps are done!');
    }, 7000);
};

//Nested callbacks;
step1(() => {
    step2(() => {
        step3(); //no need for a callback in here;
        
    });
})
