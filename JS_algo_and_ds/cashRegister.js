function checkCashRegister(price, cash, cid) {
    const nameToNum = [
        {name: 'ONE HUNDRED', val: 100},
        {name: 'TWENTY', val: 20},
        {name: 'TEN', val: 10},
        {name: 'FIVE', val: 5},
        {name: 'ONE', val: 1},
        {name: 'QUARTER', val: 0.25},
        {name: 'DIME', val: 0.1},
        {name: 'NICKEL', val: 0.05},
        {name: 'PENNY', val: 0.01}
    ];
    let output = {status: null, change: []};
    let change = cash - price;
    let register = cid.reduce(function (out, curr) {
        out.total += curr[1];
        out[curr[0]] = curr[1];
        return out;
    }, {total: 0});

    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    
    let arrayChange = nameToNum.reduce(function (out, curr) {
        let val = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            val += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (val > 0) {
            out.push([curr.name, val]);
        }
        return out;
    }, []);
    
    if (arrayChange.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    
    output.status = 'OPEN';
    
    output.change = arrayChange;
    
    return output;
}
