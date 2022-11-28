export declare type BraintreeTransactionUnion = BraintreeTransaction | BraintreeCredit | BraintreeRefund;
export declare type BraintreeTransactionOrRefund = BraintreeTransaction | BraintreeRefund;
export declare type BraintreePaymentContextOrError = BraintreePaymentContextResult | HandlerError;
export declare type BraintreeCaptureBatchEventHandlerResponseOrError = Pick<BraintreeEventHandlerResponse, "transactionStatusEvents" | "autoTransitionBatchTransactionStatus"> | RecoverableError;
export interface HandlerError {
    message: string;
}
export interface RecoverableError extends HandlerError {
    recoverable: boolean;
}
export interface BraintreePaymentContextResult {
    /** Custom fields to be written to the Payment Context */
    customFields?: BraintreeCustomField[];
}
export interface CreateBraintreePaymentContextInput {
    /**
     * Custom fields provided as input to a handler.
     */
    readonly customFields?: BraintreeCustomField[];
}
export interface BraintreePaymentContextInput {
    /** A Braintree global id (https://graphql.braintreepayments.com/guides/node_query/) */
    readonly id: string;
    /**
     * A String representing a date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format
     *
     * This value CANNOT be changed.
     */
    readonly createdAt: string;
    /**
     * A String representing a date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format
     *
     * This value CANNOT be changed.
     */
    readonly updatedAt: string;
    /**
     * Custom fields provided previously stored on a Payment Context.
     *
     * These values cannot be mutated.
     */
    readonly customFields?: BraintreeCustomField[];
}
export interface BraintreePaymentContext {
    /** A Braintree global id (https://graphql.braintreepayments.com/guides/node_query/) */
    id: string;
    /**
     * A String representing a date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format
     */
    createdAt: string;
    /**
     * A String representing a date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format
     */
    updatedAt: string;
    /**
     * Custom fields provided previously stored on a Payment Context.
     */
    customFields?: BraintreeCustomField[];
}
export interface BraintreeTransaction {
    /**
     * Dollar amount including cents represented as a `String`
     *
     * ex: "10.00"
     */
    amount: string;
    amountAuthorized?: string;
    billing?: BraintreeAddress;
    currencyIsoCode: string;
    customFields?: BraintreeCustomField[];
    customer?: BraintreeCustomer;
    descriptor?: BraintreeTransactionDescriptor;
    gatewayRejectionReason?: BraintreeTransactionRejectionReason;
    id: string;
    lineItems?: BraintreeLineItem[];
    orderId?: string;
    originResponse?: OriginResponse;
    settlementOriginResponse?: OriginResponse;
    paymentMethodFields: BraintreePaymentMethodField[];
    processorId?: string;
    riskData?: BraintreeRiskData;
    settlementBatchId?: string;
    shipping?: BraintreeAddress;
    status: BraintreeTransactionStatus;
    statusEvent?: BraintreeTransactionStatusEvent;
    taxAmount?: string;
    type: BraintreeTransactionType;
}
export interface BraintreeRiskData {
    customerBrowser?: string;
    customerIp?: string;
    deviceData?: string;
}
export interface BraintreeImportExternalTransaction {
    externalTransaction: ExternalTransaction;
}
export interface ExternalTransaction {
    amount: string;
    type: BraintreeTransactionType;
    billing?: BraintreeAddress;
    currencyIsoCode: string;
    customFields?: BraintreeCustomField[];
    customer?: BraintreeCustomer;
    gatewayRejectionReason?: BraintreeTransactionRejectionReason;
    id?: string;
    lineItems?: BraintreeLineItem[];
    orderId?: string;
    originResponse: OriginResponse;
    processorId?: string;
    settlementBatchId?: string;
    shipping?: BraintreeAddress;
    status: BraintreeTransactionStatus;
    statusEvent?: BraintreeTransactionStatusEvent;
    taxAmount?: string;
    paymentMethodFields: BraintreePaymentMethodField[];
    descriptor?: BraintreeTransactionDescriptor;
    merchantAccountId?: string;
}
export declare enum BraintreeTransactionType {
    SALE = "SALE",
    CREDIT = "CREDIT"
}
export interface BraintreeTransactionStatusEvent {
    status: BraintreeTransactionStatus;
    originResponse?: OriginResponse;
}
export interface BraintreeEventHandlerResponse {
    transactionStatusEvent?: StatusUnion;
    transactionStatusEvents?: StatusUnion[];
    autoTransitionBatchTransactionStatus?: BraintreeAutoTransitionBatchTransactionStatus;
    importExternalTransaction?: BraintreeImportExternalTransaction;
    paymentContextOrError?: BraintreePaymentContextOrError;
}
declare type StatusUnion = BraintreeVoidedEvent | BraintreeAuthorizedEvent | BraintreeSettlementPendingEvent | BraintreeFailedEvent | BraintreeProcessorDeclinedEvent | BraintreeSettledEvent | BraintreeSettlementConfirmedEvent | BraintreeSettlementDeclinedEvent | BraintreeSettlingEvent | BraintreeSubmittedForSettlementEvent;
interface BraintreeStatusEvent {
    id: string;
    status: BraintreeTransactionStatus;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeVoidedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.VOIDED;
    originResponse?: OriginResponse;
}
export interface BraintreeAuthorizedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.AUTHORIZED;
    originResponse?: OriginResponse;
}
export interface BraintreeSettlementPendingEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLEMENT_PENDING;
}
export interface BraintreeFailedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.FAILED;
    originResponse?: Partial<OriginResponse>;
}
export interface BraintreeProcessorDeclinedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.PROCESSOR_DECLINED;
    originResponse?: Partial<OriginResponse>;
}
export interface BraintreeSettledEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLED;
    originResponse?: OriginResponse;
}
export interface BraintreeSettlementConfirmedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLEMENT_CONFIRMED;
    originResponse: OriginResponse;
}
export interface BraintreeSettlementDeclinedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLEMENT_DECLINED;
    originResponse: OriginResponse;
}
export interface BraintreeSettlingEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLING;
    originResponse: OriginResponse;
}
export interface BraintreeSubmittedForSettlementEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SUBMITTED_FOR_SETTLEMENT;
    settlementTimestamp?: Date | string;
    batchingStrategy?: BraintreeBatchingStrategy;
}
export interface BraintreeAutoTransitionBatchTransactionStatus {
    originalStatus: BraintreeTransactionStatus;
    targetStatus: BraintreeTransactionStatus;
    transitionAtTimestamp: string;
}
export interface BraintreeTransactionDescriptor {
    name?: string;
    phone?: string;
    url?: string;
}
export interface OriginResponse {
    id: string;
    message?: string;
    code?: string;
    cvvResponseCode?: CvvResponseCode;
}
/**
 * Braintree CVV response codes. Further documentation can be found here: https://developers.braintreepayments.com/reference/general/processor-responses/avs-cvv-responses#cvv
 */
export declare enum CvvResponseCode {
    /**
     * CVV matches
     * The CVV provided matches the information on file with the cardholder's bank.
     */
    M = "M",
    /**
     * CVV does not match
     * The CVV provided does not match the information on file with the cardholder's bank.
     */
    N = "N",
    /**
     * CVV is not verified
     * The card-issuing bank received the CVV, but did not verify whether it was correct. This typically happens if the bank declines an authorization before evaluating the CVV.
     */
    U = "U",
    /**
     * CVV not provided
     * No CVV was provided. This also happens if the transaction was made with a vaulted payment method. Learn more about AVS and CVV rules in the Vault.
     */
    I = "I",
    /**
     * Issuer does not participate
     * The CVV was provided but the card-issuing bank does not participate in card verification.
     */
    S = "S",
    /**
     * CVV not applicable
     * The CVV was provided but this type of transaction does not support card verification.
     */
    A = "A",
    /**
     * CVV skipped
     * CVV checks were skipped for this transaction.
     */
    B = "B"
}
export interface BraintreeAsyncInput {
    transactionId: string;
    payload: BraintreeAsyncPayloadInput | BraintreeAsyncFilePayloadInput;
}
export interface BraintreeAsyncPayloadInput {
    value: string;
    format: string;
}
export interface BraintreeAsyncFilePayloadInput {
    bucket: string;
    key: string;
}
export interface BraintreeRefund extends BraintreeTransaction {
    /**
     * The newly refunded transaction.
     */
    refundedTransaction: BraintreeTransaction;
}
export interface BraintreeCredit {
    id: string;
    amount?: string;
    billing?: BraintreeAddress;
    currencyIsoCode?: string;
    customer?: BraintreeCustomer;
    orderId?: string;
    shipping?: BraintreeAddress;
    taxAmount?: string;
    refundedTransaction?: BraintreeTransaction;
    status: BraintreeTransactionStatus;
    processorId?: string;
    originResponse?: OriginResponse;
    type: BraintreeTransactionType;
    settlementBatchId?: string;
    paymentMethodFields: BraintreePaymentMethodField[];
    descriptor?: BraintreeTransactionDescriptor;
}
export interface BraintreeCustomField {
    name: string;
    value: string;
}
export interface BraintreePaymentMethodField {
    name: string;
    value: string;
    displayValue?: string;
}
export interface BraintreeCustomer {
    company?: string;
    email?: string;
    fax?: string;
    firstName?: string;
    lastName?: string;
    id?: string;
    phone?: string;
    website?: string;
    /** A set of country code ID pairs, analogous to Social Security numbers in the United States. */
    /** A customer may have multiple national tax identifiers, but only one per country code. The values provided for an update will be stored and previous entries will be replaced. */
    /** **You will only need to use these fields for processing in certain countries.** */
    taxIdentifiers?: BraintreeTaxIdentifiers[];
}
/** The customer's tax identifer for a given country. */
export interface BraintreeTaxIdentifiers {
    /** The identifier provided in the format require for the given country. */
    id: string;
    /** The country code in ISO 3166-1 alpha-2 format. */
    /** **Only a [subset of countries are supported](https://developers.braintreepayments.com/reference/general/countries/ruby#list-of-countries).** */
    countryCode: string;
}
export interface BraintreeAddress {
    id?: string;
    company?: string;
    streetAddress?: string;
    extendedAddress?: string;
    firstName?: string;
    lastName?: string;
    locality?: string;
    postalCode?: string;
    region?: string;
    countryName?: string;
    countryCodeAlpha2?: string;
    countryCodeAlpha3?: string;
    countryCodeNumeric?: string;
}
export interface BraintreeLineItem {
    commodityCode?: string;
    description?: string;
    discountAmount?: string;
    kind: "debit" | "credit";
    name: string;
    productCode?: string;
    quantity: string;
    taxAmount?: string;
    totalAmount: string;
    unitAmount: string;
    unitTaxAmount?: string;
    unitOfMeasure?: string;
    url?: string;
    itemType?: string;
    imageUrl?: string;
}
export interface BraintreeAuthorizeResponse {
    orderId: string;
    status: BraintreeTransactionStatus;
}
export interface BraintreeAsyncPayload {
    action: BraintreeAction;
    transaction: BraintreeTransaction;
}
export interface BraintreeHandlerClientContextCustom {
    braintreeRequestId?: string;
}
export interface BraintreeHandlerClientContext {
    Custom?: BraintreeHandlerClientContextCustom;
}
export interface BraintreeHandlerContext {
    clientContext?: BraintreeHandlerClientContext;
}
export declare enum BraintreeTransactionStatus {
    AUTHORIZED = "AUTHORIZED",
    AUTHORIZING = "AUTHORIZING",
    AUTHORIZATION_EXPIRED = "AUTHORIZATION_EXPIRED",
    FAILED = "FAILED",
    GATEWAY_REJECTED = "GATEWAY_REJECTED",
    PROCESSOR_DECLINED = "PROCESSOR_DECLINED",
    SETTLED = "SETTLED",
    SETTLEMENT_CONFIRMED = "SETTLEMENT_CONFIRMED",
    SETTLEMENT_DECLINED = "SETTLEMENT_DECLINED",
    SETTLEMENT_PENDING = "SETTLEMENT_PENDING",
    SETTLING = "SETTLING",
    SUBMITTED_FOR_SETTLEMENT = "SUBMITTED_FOR_SETTLEMENT",
    VOIDED = "VOIDED"
}
export declare enum BraintreeBatchingStrategy {
    TRANSACTION_TYPE = "TRANSACTION_TYPE"
}
export declare enum BraintreeAction {
    CREATE = "CREATE",
    UPDATE = "UPDATE"
}
export declare enum BraintreeTransactionRejectionReason {
    FRAUD = "FRAUD"
}
/** The response type for a Custom Actions verification handler. */
export interface BraintreeVerificationPayload {
    result: BraintreeVerificationResult;
}
/** The possible results returned within a Braintree verification payload. */
export declare type BraintreeVerificationResult = ProcessorDeclinedVerificationEvent | FailedVerificationEvent | VerifiedVerificationEvent | HandlerError;
/** A generic verification status event. */
export interface BraintreeVerificationStatusEvent {
    /** The Braintree-mapped status set by the backing-processor to be returned to the Braintree Gateway. */
    status: BraintreeVerificationStatus;
    /** The Braintree-mapped detailed response for the verification attempt returned from the backing processor. */
    originResponse?: BraintreeVerificationOriginResponse;
}
/** The raw details returned from the processor that can be stored on a verification. */
export interface BraintreeVerificationOriginResponse {
    /** Unique identifier for the veriication in a 3rd party system. */
    id?: string;
    /**
     * A code returned by the processor for the status.
     * This is an arbitrary field that can express different "codes" from processors. It does not necessarily map to any Braintree values.
     */
    code?: string;
    /** The text explanation of the processor response code. */
    message?: string;
}
/** A Braintree verification passed to a Custom Actions handler. */
export interface BraintreeVerificationInput {
    /** The amount to be verified. This will be a monetary amount that may include a decimal and up to 3 minor units. */
    amount: string;
    /** The currency [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code to be used for the verification. */
    currencyIsoCode: string;
    /** The Braintree public id of the verification. */
    id: string;
    /**
     * The response from a downstream verification.
     *
     * Typically, this is only populated for verifications with a status of `VERIFIED`.
     */
    originResponse?: BraintreeVerificationOriginResponse;
    /** The current status of the verification. */
    status: BraintreeVerificationStatus;
}
/** A Braintree verification status. */
export declare enum BraintreeVerificationStatus {
    /**
     * The verification failed to be processed.
     * Typically this represents an internal error in Braintree's systems.
     */
    FAILED = "FAILED",
    /** The verification was rejected in the Braintree gateway before being sent to the processor. */
    GATEWAY_REJECTED = "GATEWAY_REJECTED",
    /** The verification was declined by the processor. */
    PROCESSOR_DECLINED = "PROCESSOR_DECLINED",
    /** The verification received a successful response from the processor.  */
    VERIFIED = "VERIFIED",
    /**
     * The verification is being verified.
     *
     * This is the initial state of a verification.
     */
    VERIFYING = "VERIFYING"
}
/** A verification event used when the verification should be transitioned to a status of `PROCESSOR_DECLINED`. */
export declare type ProcessorDeclinedVerificationEvent = BraintreeVerificationStatusEvent & {
    status: BraintreeVerificationStatus.PROCESSOR_DECLINED;
};
/** A verification event used when the verification should be transitioned to a status of `VERIFIED` */
export interface VerifiedVerificationEvent extends BraintreeVerificationStatusEvent {
    status: BraintreeVerificationStatus.VERIFIED;
}
/** A verification event used when the verification should be transitioned to a status of `FAILED` */
export interface FailedVerificationEvent extends BraintreeVerificationStatusEvent {
    status: BraintreeVerificationStatus.FAILED;
}
export {};
