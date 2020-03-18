import WalletView from './src/views/walletView.js';
import ProductSelectView from './src/views/productSelectView.js';
import ProductView from './src/views/productView.js';
import WalletModel from './src/models/walletModel.js';
import VendingMachineModel from './src/models/vendingMachineModel.js';
import ChangeModel from './src/models/changeModel.js';

(function main() {
    const walletModel = new WalletModel();
    const changeModel = new ChangeModel(walletModel);
    const vendingMachineModel = new VendingMachineModel(changeModel);

    new WalletView(walletModel, vendingMachineModel, changeModel);
    new ProductSelectView(vendingMachineModel);
    new ProductView(vendingMachineModel);
})();