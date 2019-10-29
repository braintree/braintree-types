export interface BraintreeTransaction {
    /**
     * Dollar amount including cents represented as a `String`
     *
     * ex: "10.00"
     */
    amount?: string;
    billing?: BraintreeAddress;
    currencyIsoCode?: string;
    customFields?: BraintreeCustomField[];
    customer?: BraintreeCustomer;
    descriptor?: BraintreeTransactionDescriptor;
    gatewayRejectionReason?: BraintreeTransactionRejectionReason;
    id: string;
    lineItems?: BraintreeLineItem[];
    orderId?: string;
    originResponse?: OriginResponse;
    paymentMethodFields: BraintreePaymentMethodField[];
    processorId?: string;
    settlementBatchId?: string;
    shipping?: BraintreeAddress;
    status: BraintreeTransactionStatus;
    statusEvent?: BraintreeTransactionStatusEvent;
    taxAmount?: string;
    type: BraintreeTransactionType;
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
}
declare type StatusUnion = BraintreeVoidedEvent | BraintreeAuthorizedEvent | BraintreeSettlementPendingEvent | BraintreeFailedEvent | BraintreeProcessorDeclinedEvent | BraintreeSettledEvent | BraintreeSettlementConfirmedEvent | BraintreeSettlementDeclinedEvent | BraintreeSubmittedForSettlementEvent;
interface BraintreeStatusEvent {
    id: string;
    status: BraintreeTransactionStatus;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeVoidedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.VOIDED;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeAuthorizedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.AUTHORIZED;
    originResponse?: OriginResponse;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeSettlementPendingEvent extends BraintreeStatusEvent {
    id: string;
    status: BraintreeTransactionStatus.SETTLEMENT_PENDING;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeFailedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.FAILED;
    originResponse?: Partial<OriginResponse>;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeProcessorDeclinedEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.PROCESSOR_DECLINED;
    originResponse?: Partial<OriginResponse>;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeSettledEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SETTLED;
    originResponse?: OriginResponse;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeSettlementConfirmedEvent extends BraintreeStatusEvent {
    id: string;
    status: BraintreeTransactionStatus.SETTLEMENT_CONFIRMED;
    originResponse: OriginResponse;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeSettlementDeclinedEvent extends BraintreeStatusEvent {
    id: string;
    status: BraintreeTransactionStatus.SETTLEMENT_DECLINED;
    originResponse: OriginResponse;
    customFields?: BraintreeCustomField[];
}
export interface BraintreeSubmittedForSettlementEvent extends BraintreeStatusEvent {
    status: BraintreeTransactionStatus.SUBMITTED_FOR_SETTLEMENT;
    settlementTimestamp: Date;
    batchingStrategy?: BraintreeBatchingStrategy;
    customFields?: BraintreeCustomField[];
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
export interface BraintreeRefund {
    id: string;
    amount?: string;
    billing?: BraintreeAddress;
    currencyIsoCode?: string;
    customer?: BraintreeCustomer;
    orderId?: string;
    shipping?: BraintreeAddress;
    taxAmount?: string;
    refundedTransaction: BraintreeTransaction;
    status: BraintreeTransactionStatus;
    processorId?: string;
    originResponse?: OriginResponse;
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
}
export interface BraintreeAuthorizeResponse {
    orderId: string;
    status: BraintreeTransactionStatus;
}
export interface BraintreeAsyncPayload {
    action: BraintreeAction;
    transaction: BraintreeTransaction;
}
export declare enum BraintreeTransactionStatus {
    AUTHORIZED = "AUTHORIZED",
    AUTHORIZING = "AUTHORIZING",
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
export {};
