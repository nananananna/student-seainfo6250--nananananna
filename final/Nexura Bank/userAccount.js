function makeAccount() {
    const accountOperation = {};
    const accountInfo = {
        BTC: 0,
        ETH: 0,
        USDT: 0,
        USD: 0,
    };

    accountOperation.getAccount = function getAccount() {
        return accountInfo;
    }

    accountOperation.checkAccount = function checkAccount(asset, total) {
          return !(accountInfo[asset] < total);
    }

    accountOperation.transfer = function transfer(asset, total, mode) {
        if (mode === 'Deposit') {
            accountInfo[asset] += total;
            return 'deposit-success'
        } else if (mode === 'Withdraw') {
            if (!this.checkAccount(asset, total)) {
                return 'insufficient-funds'
            } else {
                accountInfo[asset] -= total;
                return 'withdraw-success';
            }
        }
    }

    accountOperation.send = function send(asset, total) {
        if (!this.checkAccount(asset, total)) {
            return 'insufficient-funds';
        }

        const mode = 'Withdraw';
        this.transfer(asset, total, mode);
        return 'send-success';
    }

    accountOperation.receive = function receive(asset, total) {
        const mode = 'Deposit';
        this.transfer(asset, total, mode);
    }

    accountOperation.convert = function convert({ fromAsset, toAsset, parsedTotal, exchangeRateToUSD }) {
        if (fromAsset === toAsset) return 'alternative-pair';

        if (!this.checkAccount(fromAsset, parsedTotal)) {
            return 'insufficient-funds';
        }

        const total = parsedTotal;
        const totalInUSD = total * exchangeRateToUSD[fromAsset];
        const totalOut = totalInUSD / exchangeRateToUSD[toAsset];
        this.receive(toAsset, totalOut);
        this.send(fromAsset, total);
        return 'convert-success';
    }

    return accountOperation;
}

module.exports = {
    makeAccount,
};