module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["All the effort you are making will ultimately pay off.", "All the troubles you have will pass away very quickly.", " All will go well with your new project.", " All your hard work will soon pay off.", " Allow compassion to guide your decisions.", "An acquaintance of the past will affect you in the near future."];
        
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getNumber: (req, res) => {
        const numbers = ["6", "76", "52", "4", "65", "6", "17", "80", "9", "10"];

        // choose random number
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers[randomIndex];
      
        res.status(200).send(randomNumber);
    },

    getBabyName: (req, res) => {
        const names = ["Anthony", "Scarlett", "Cohen", "Isla", "Presley", "Brooke", "Dahlia", "Jude", "Jade", "Sasha"];

        // choose random baby name
        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];
      
        res.status(200).send(randomName);
    },

    getCurrentTime: (req, res) => {
       // get the current date and time
        const currentDate = new Date();

        //gGet the current time
        const currentTime = currentDate.toLocaleTimeString();
      
        res.status(200).send(currentTime);
    }

}