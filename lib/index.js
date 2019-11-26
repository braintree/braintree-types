"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BraintreeTransactionType;
(function (BraintreeTransactionType) {
    BraintreeTransactionType["SALE"] = "SALE";
    BraintreeTransactionType["CREDIT"] = "CREDIT";
})(BraintreeTransactionType = exports.BraintreeTransactionType || (exports.BraintreeTransactionType = {}));
var BraintreeTransactionStatus;
(function (BraintreeTransactionStatus) {
    BraintreeTransactionStatus["AUTHORIZED"] = "AUTHORIZED";
    BraintreeTransactionStatus["AUTHORIZING"] = "AUTHORIZING";
    BraintreeTransactionStatus["AUTHORIZATION_EXPIRED"] = "AUTHORIZATION_EXPIRED";
    BraintreeTransactionStatus["FAILED"] = "FAILED";
    BraintreeTransactionStatus["GATEWAY_REJECTED"] = "GATEWAY_REJECTED";
    BraintreeTransactionStatus["PROCESSOR_DECLINED"] = "PROCESSOR_DECLINED";
    BraintreeTransactionStatus["SETTLED"] = "SETTLED";
    BraintreeTransactionStatus["SETTLEMENT_CONFIRMED"] = "SETTLEMENT_CONFIRMED";
    BraintreeTransactionStatus["SETTLEMENT_DECLINED"] = "SETTLEMENT_DECLINED";
    BraintreeTransactionStatus["SETTLEMENT_PENDING"] = "SETTLEMENT_PENDING";
    BraintreeTransactionStatus["SETTLING"] = "SETTLING";
    BraintreeTransactionStatus["SUBMITTED_FOR_SETTLEMENT"] = "SUBMITTED_FOR_SETTLEMENT";
    BraintreeTransactionStatus["VOIDED"] = "VOIDED";
})(BraintreeTransactionStatus = exports.BraintreeTransactionStatus || (exports.BraintreeTransactionStatus = {}));
var BraintreeBatchingStrategy;
(function (BraintreeBatchingStrategy) {
    BraintreeBatchingStrategy["TRANSACTION_TYPE"] = "TRANSACTION_TYPE";
})(BraintreeBatchingStrategy = exports.BraintreeBatchingStrategy || (exports.BraintreeBatchingStrategy = {}));
var BraintreeAction;
(function (BraintreeAction) {
    BraintreeAction["CREATE"] = "CREATE";
    BraintreeAction["UPDATE"] = "UPDATE";
})(BraintreeAction = exports.BraintreeAction || (exports.BraintreeAction = {}));
var BraintreeTransactionRejectionReason;
(function (BraintreeTransactionRejectionReason) {
    BraintreeTransactionRejectionReason["FRAUD"] = "FRAUD";
})(BraintreeTransactionRejectionReason = exports.BraintreeTransactionRejectionReason || (exports.BraintreeTransactionRejectionReason = {}));
