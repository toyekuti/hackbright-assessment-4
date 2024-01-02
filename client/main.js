const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)


const numberBtn = document.querySelector("#numberButton")

const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

numberBtn.addEventListener('click', getNumber)


const nameBtn = document.querySelector("#nameButton")

const getBabyName = () => {
    axios.get("http://localhost:4000/api/name/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

nameBtn.addEventListener('click', getBabyName)


const timeBtn = document.querySelector("#timeButton")

const getCurrentTime = () => {
    axios.get("http://localhost:4000/api/time/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

timeBtn.addEventListener('click', getCurrentTime)