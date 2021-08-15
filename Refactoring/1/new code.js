let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [...employers.filter( (elem) => elem.length > 0)];
// console.log(employersNames);
// console.log(employers);



employersNames = employersNames.map( (elem) => elem.toLowerCase().trim() );
// console.log(employersNames);

const sponsors = {
    cash: ["40000", 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash([...sponsorsCash], own = 0) {
    return +own + sponsorsCash.map( elem => +elem).reduce( (accumulator, elem) => accumulator + elem);
}







let money = calcCash(sponsors.cash);

function makeBusiness(owner, cash, emp, director = 'Viktor') {
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director} . Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness(...['Sam', money, employersNames]);