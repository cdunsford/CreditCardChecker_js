// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
//const mystery6 = [4,0,3,7,6,6,0,0,5,5,6,0,1,2,2,3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(cardNumber) 
{
    let doubledCredNumber = [];
    let count = 1;
    let sumDigits = 0;

    /*
        We will double every other number in the credit card number starting from the right-most digit and work backwards
    */
    for (let index = cardNumber.length - 1; index >= 0; index--) {

        /*
            use modulus of 0 (using count starting at 1) to double every other number
        */
        if(count % 2 == 0)
        {
            //Add our doubled number to the beginning of the array
            let newNum = cardNumber[index] * 2;
            if(newNum > 9)
            {
                newNum -= 9;
            }
            doubledCredNumber.unshift(newNum);
            

        }
        else
        {
            //Add our original number to the beginning of the array
            doubledCredNumber.unshift(cardNumber[index]);
        }

        sumDigits += doubledCredNumber[0];
        
        count++; 
        
    }

    if(sumDigits % 10 == 0)
    {
        //Credit card number is valid
        return true;

    }
    else
    {
        //Credit card number is invalid
        return false;
    }

}

function findInvalidCards(arrayOfCards) {

    let invalidCards = [];

    for (let i = 0; i < arrayOfCards.length; i++) {
    
        if(!validateCred(arrayOfCards[i]))
        {

            invalidCards.push(arrayOfCards[i]);
            
        }        
    }

    return invalidCards;
}

function idInvalidCreditCardCompanies(arrayOfInvalidCards) {

    let badCompanies = [];
    
    for (let index = 0; index < arrayOfInvalidCards.length; index++) {
        if(arrayOfInvalidCards[index][0] == 3)
        {
            if(badCompanies.indexOf('Amex') == -1)
            {
                badCompanies.push('Amex');

            }
            
        }
        else if(arrayOfInvalidCards[index][0] == 4)
        {
            if(badCompanies.indexOf('Visa') == -1)
            {
                badCompanies.push('Visa');
            }
        }
        else if(arrayOfInvalidCards[index][0] == 5)
        {
            if(badCompanies.indexOf('Mastercard') == -1)
            {
                badCompanies.push('Mastercard');
            }
        }
        else if(arrayOfInvalidCards[index][0] == 6)
        {
            if(badCompanies.indexOf('Discover') == -1)
            {
                badCompanies.push('Discover');
            }
        }
        else
        {
            if(badCompanies.indexOf('Company not found') == -1)
            {
                badCompanies.push('Company not found');
            }
        }
        
    }
    return badCompanies;

}

let invalidCards = findInvalidCards(batch);
let badCompanies = idInvalidCreditCardCompanies(invalidCards);

for (let i = 0; i < invalidCards.length; i++) {
    
    
        console.log('INVALID: ' + invalidCards[i].join());
    
}

console.log('Bad Companies: ' + badCompanies);

/*for (let i = 0; i < batch.length; i++) {
    
    if(validateCred(batch[i]))
    {
        console.log('VALID: ' + batch[i].join())
    }
    else
    {
        console.log('INVALID: ' + batch[i].join());
    }
}
*/











