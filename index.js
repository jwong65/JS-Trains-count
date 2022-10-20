let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

console.log(newInventoryCarModels);
let x=0;
let typeS1Count =0;

while(x<newInventoryCarModels.length){
    //console.log(newInventoryCarModels[x]);
    if(newInventoryCarModels[x]=='S1'){
        typeS1Count+=1;
    }
    x++;
}
console.log("The number of S1 is:", typeS1Count)

let LorrieCount =0;
for (let i=0;i<newInventoryCarTypes.length; i++){
    //console.log(newInventoryCarTypes[i])
    if(newInventoryCarTypes[i]==='Lorrie'){
        LorrieCount+=1;
    }
} 
console.log('The number of Lorries is:', LorrieCount)

let totalYears= 0;
let StockYears=0;
let stockNumber=0;
for(let u=0; u<newInventoryYearBuilt.length; u++){
    //console.log(newInventoryYearBuilt)
    totalYears+=Number(newInventoryYearBuilt[u]);

}
totalYears= totalYears/newInventoryYearBuilt.length;
console.log("Total years: ", totalYears)

for (let t=0; t<newInventoryCarModels.length; t++){
    //console.log(newInventoryCarModels[t])
    if(newInventoryCarTypes[t]=='StockCar'){
        StockYears= StockYears+Number(newInventoryYearBuilt[t]);
        stockNumber+=1;
        console.log(newInventoryYearBuilt[t])
    }
}
//It's iterating now
StockYears=StockYears/stockNumber
console.log("The average year of a Stock model is:", StockYears)

