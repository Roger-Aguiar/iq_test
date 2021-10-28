export class IqTest 
{
    numbers = '';

    constructor(numbers)
    {
        this.numbers = numbers;
    }

    solveIqTest(): number 
    {
        let evenness = this.numbers.split(' ');
        let odd = [];
        let even = [];

        for (let index = 0; index < evenness.length; index++) 
        {
            if(Number(evenness[index]) % 2 != 0)
                odd.push(Number(evenness[index]));
            else
                even.push(Number(evenness[index]));
        }
        
        return odd.length == 1 ? this.getPositionOfEvenness(odd[0], evenness) : this.getPositionOfEvenness(even[0], evenness);
    }

    getPositionOfEvenness(numberEvenness: number, evenness: string[])
    {    
        for (let index = 0; index < evenness.length; index++)         
            if(numberEvenness == Number(evenness[index]))
                return index + 1;      
    }
}

