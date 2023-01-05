"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BraintreeTransactionType;
(function (BraintreeTransactionType) {
    BraintreeTransactionType["SALE"] = "SALE";
    BraintreeTransactionType["CREDIT"] = "CREDIT";
})(BraintreeTransactionType = exports.BraintreeTransactionType || (exports.BraintreeTransactionType = {}));
/**
 * Braintree CVV response codes. Further documentation can be found here: https://developers.braintreepayments.com/reference/general/processor-responses/avs-cvv-responses#cvv
 */
var CvvResponseCode;
(function (CvvResponseCode) {
    /**
     * CVV matches
     * The CVV provided matches the information on file with the cardholder's bank.
     */
    CvvResponseCode["M"] = "M";
    /**
     * CVV does not match
     * The CVV provided does not match the information on file with the cardholder's bank.
     */
    CvvResponseCode["N"] = "N";
    /**
     * CVV is not verified
     * The card-issuing bank received the CVV, but did not verify whether it was correct. This typically happens if the bank declines an authorization before evaluating the CVV.
     */
    CvvResponseCode["U"] = "U";
    /**
     * CVV not provided
     * No CVV was provided. This also happens if the transaction was made with a vaulted payment method. Learn more about AVS and CVV rules in the Vault.
     */
    CvvResponseCode["I"] = "I";
    /**
     * Issuer does not participate
     * The CVV was provided but the card-issuing bank does not participate in card verification.
     */
    CvvResponseCode["S"] = "S";
    /**
     * CVV not applicable
     * The CVV was provided but this type of transaction does not support card verification.
     */
    CvvResponseCode["A"] = "A";
    /**
     * CVV skipped
     * CVV checks were skipped for this transaction.
     */
    CvvResponseCode["B"] = "B";
})(CvvResponseCode = exports.CvvResponseCode || (exports.CvvResponseCode = {}));
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
/** A Braintree verification status. */
var BraintreeVerificationStatus;
(function (BraintreeVerificationStatus) {
    /**
     * The verification failed to be processed.
     * Typically this represents an internal error in Braintree's systems.
     */
    BraintreeVerificationStatus["FAILED"] = "FAILED";
    /** The verification was rejected in the Braintree gateway before being sent to the processor. */
    BraintreeVerificationStatus["GATEWAY_REJECTED"] = "GATEWAY_REJECTED";
    /** The verification was declined by the processor. */
    BraintreeVerificationStatus["PROCESSOR_DECLINED"] = "PROCESSOR_DECLINED";
    /** The verification received a successful response from the processor.  */
    BraintreeVerificationStatus["VERIFIED"] = "VERIFIED";
    /**
     * The verification is being verified.
     *
     * This is the initial state of a verification.
     */
    BraintreeVerificationStatus["VERIFYING"] = "VERIFYING";
    /**
     * The verification hase been voided. This usually means a dollar-based auth has been reversed.
     */
    BraintreeVerificationStatus["VOIDED"] = "VOIDED";
})(BraintreeVerificationStatus = exports.BraintreeVerificationStatus || (exports.BraintreeVerificationStatus = {}));
