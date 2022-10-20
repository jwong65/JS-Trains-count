let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

console.log(newInventoryCarModels);
let x=0;
let typeS1Count =0;

while(x<newInventoryCarModels.length){
    console.log(newInventoryCarModels[x]);
    if(newInventoryCarModels[x]=='S1'){
        typeS1Count+=1;
    }
    x++;
}
console.log("The number of S1 is:", typeS1Count)