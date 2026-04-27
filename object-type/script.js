function createUser(firstName, lastName) {
    return { firstName, lastName };
}

function getFullName(user) { 
    if (!user){
        return "";
    }
    
    return user.firstName + " " + user.lastName;
}

function extendObject(obj, isValid) { 
    let clone = Object.assign({}, obj);
    clone.isValid = isValid;
    return clone; 
} 

function sumPrices(prices) {
    let sum = 0;
    for (let key in prices) {
        let value = prices[key];

        if (typeof value === "number" && Number.isFinite(value)) {
            sum += value;
        }
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) { 
   let user = createUser(firstName, lastName);
   user.setFirstName = function(newFirstName) {
       this.firstName = newFirstName;
   }
   user.setLastName = function(newLastName) {
       this.lastName = newLastName;
   }
   user.getFullName = function() {
       return getFullName(this);
   }
   return user;
}