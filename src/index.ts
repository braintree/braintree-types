export type BraintreeTransactionUnion =
  | BraintreeTransaction
  | BraintreeCredit
  | BraintreeRefund;

export type BraintreeTransactionOrRefund =
  | BraintreeTransaction
  | BraintreeRefund;

export type BraintreePaymentContextOrError =
  | BraintreePaymentContextResult
  | HandlerError;

export type BraintreeCaptureBatchEventHandlerResponseOrError =
  | Pick<
      BraintreeEventHandlerResponse,
      "transactionStatusEvents" | "autoTransitionBatchTransactionStatus"
    >
  | RecoverableError;

// A custom error to return from a Custom Actions handler
export interface HandlerError {
  message: string;
}

// A custom error to return from a Custom Actions handler that also states if the request can be recoverable or retried
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
  amount?: string;
  billing?: BraintreeAddress;
  currencyIsoCode?: string;
  customer?: BraintreeCustomer;
  customFields?: BraintreeCustomField[];
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

export enum BraintreeTransactionType {
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

type StatusUnion =
  | BraintreeVoidedEvent
  | BraintreeAuthorizedEvent
  | BraintreeSettlementPendingEvent
  | BraintreeFailedEvent
  | BraintreeProcessorDeclinedEvent
  | BraintreeSettledEvent
  | BraintreeSettlementConfirmedEvent
  | BraintreeSettlementDeclinedEvent
  | BraintreeSubmittedForSettlementEvent;

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

export interface BraintreeSettlementConfirmedEvent
  extends BraintreeStatusEvent {
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

export interface BraintreeSubmittedForSettlementEvent
  extends BraintreeStatusEvent {
  status: BraintreeTransactionStatus.SUBMITTED_FOR_SETTLEMENT;
  settlementTimestamp?: Date | string;
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
  // Unique identifier for an "order" in a 3rd party system
  id: string;
  // The text explanation of the processor response code.
  message?: string;
  // Code returned by the processor for the status
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

export interface BraintreeRefund extends BraintreeTransaction {
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
  // Email address composed of ASCII characters. 255 character maximum.
  email?: string;
  fax?: string;
  firstName?: string;
  lastName?: string;
  // A string value that will represent this specific customer in your Vault. 36 character maximum; must be unique within your Vault; valid characters are letters, numbers, -, and _; the words "all" and "new" currently can't be used. If not specified on creation, the gateway will generate an alphanumeric ID that can be accessed on the result. The generated IDs will never start with a leading 0 and are case insensitive.
  id?: string;
  phone?: string;
  website?: string;
}

// TODO: ensure optionality of these fields
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
}

export interface BraintreeAuthorizeResponse {
  orderId: string;
  status: BraintreeTransactionStatus;
}

export interface BraintreeAsyncPayload {
  action: BraintreeAction;
  transaction: BraintreeTransaction;
}

export enum BraintreeTransactionStatus {
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

export enum BraintreeBatchingStrategy {
  TRANSACTION_TYPE = "TRANSACTION_TYPE"
}

export enum BraintreeAction {
  CREATE = "CREATE",
  UPDATE = "UPDATE"
}

export enumraintreeTransactionRejectionReason {
  FRAUD = "FRAUD"
}
