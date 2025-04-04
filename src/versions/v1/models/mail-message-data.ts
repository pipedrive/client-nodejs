/* tslint:disable */
/* eslint-disable */
/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { MailMessageDataFromInner } from './mail-message-data-from-inner';

/**
* 
* @export
* @interface MailMessageData
*/
export interface MailMessageData {
    /**
    * ID of the mail message.
    * @type {number}
    */
    'id'?: number;
    /**
    * The array of mail message sender (object)
    * @type {Array<MailMessageDataFromInner>}
    */
    'from'?: Array<MailMessageDataFromInner>;
    /**
    * The array of mail message receiver (object)
    * @type {Array<MailMessageDataFromInner>}
    */
    'to'?: Array<MailMessageDataFromInner>;
    /**
    * The array of mail message copies (object)
    * @type {Array<MailMessageDataFromInner>}
    */
    'cc'?: Array<MailMessageDataFromInner>;
    /**
    * The array of mail message blind copies (object)
    * @type {Array<MailMessageDataFromInner>}
    */
    'bcc'?: Array<MailMessageDataFromInner>;
    /**
    * The mail message body URL
    * @type {string}
    */
    'body_url'?: string;
    /**
    * The connection account ID
    * @type {string}
    */
    'account_id'?: string;
    /**
    * ID of the user whom mail message will be assigned to
    * @type {number}
    */
    'user_id'?: number;
    /**
    * ID of the mail message thread
    * @type {number}
    */
    'mail_thread_id'?: number;
    /**
    * The subject of mail message
    * @type {string}
    */
    'subject'?: string;
    /**
    * The snippet of mail message. Snippet length is up to 225 characters.
    * @type {string}
    */
    'snippet'?: string;
    /**
    * The status of tracking mail message. Value is `null` if tracking is not enabled.
    * @type {string}
    */
    'mail_tracking_status'?: MailMessageDataMailTrackingStatusConst | null;
    /**
    * 
    * @type {number}
    */
    'mail_link_tracking_enabled_flag'?: MailMessageDataMailLinkTrackingEnabledFlagConst;
    /**
    * 
    * @type {number}
    */
    'read_flag'?: MailMessageDataReadFlagConst;
    /**
    * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise `null`.
    * @type {string}
    */
    'draft'?: string;
    /**
    * 
    * @type {number}
    */
    'draft_flag'?: MailMessageDataDraftFlagConst;
    /**
    * 
    * @type {number}
    */
    'synced_flag'?: MailMessageDataSyncedFlagConst;
    /**
    * 
    * @type {number}
    */
    'deleted_flag'?: MailMessageDataDeletedFlagConst;
    /**
    * 
    * @type {number}
    */
    'has_body_flag'?: MailMessageDataHasBodyFlagConst;
    /**
    * 
    * @type {number}
    */
    'sent_flag'?: MailMessageDataSentFlagConst;
    /**
    * 
    * @type {number}
    */
    'sent_from_pipedrive_flag'?: MailMessageDataSentFromPipedriveFlagConst;
    /**
    * 
    * @type {number}
    */
    'smart_bcc_flag'?: MailMessageDataSmartBccFlagConst;
    /**
    * Creation or receival time of the mail message
    * @type {string}
    */
    'message_time'?: string;
    /**
    * The insertion into the database time of the mail message
    * @type {string}
    */
    'add_time'?: string;
    /**
    * The updating time in the database of the mail message
    * @type {string}
    */
    'update_time'?: string;
    /**
    * 
    * @type {number}
    */
    'has_attachments_flag'?: MailMessageDataHasAttachmentsFlagConst;
    /**
    * 
    * @type {number}
    */
    'has_inline_attachments_flag'?: MailMessageDataHasInlineAttachmentsFlagConst;
    /**
    * 
    * @type {number}
    */
    'has_real_attachments_flag'?: MailMessageDataHasRealAttachmentsFlagConst;
}

                export const MailMessageDataMailTrackingStatusConst = {
                        opened: 'opened',
                        not_opened: 'not opened'
                } as const;

                export type MailMessageDataMailTrackingStatusConst = typeof MailMessageDataMailTrackingStatusConst[keyof typeof MailMessageDataMailTrackingStatusConst];
                export const MailMessageDataMailLinkTrackingEnabledFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataMailLinkTrackingEnabledFlagConst = typeof MailMessageDataMailLinkTrackingEnabledFlagConst[keyof typeof MailMessageDataMailLinkTrackingEnabledFlagConst];
                export const MailMessageDataReadFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataReadFlagConst = typeof MailMessageDataReadFlagConst[keyof typeof MailMessageDataReadFlagConst];
                export const MailMessageDataDraftFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataDraftFlagConst = typeof MailMessageDataDraftFlagConst[keyof typeof MailMessageDataDraftFlagConst];
                export const MailMessageDataSyncedFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataSyncedFlagConst = typeof MailMessageDataSyncedFlagConst[keyof typeof MailMessageDataSyncedFlagConst];
                export const MailMessageDataDeletedFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataDeletedFlagConst = typeof MailMessageDataDeletedFlagConst[keyof typeof MailMessageDataDeletedFlagConst];
                export const MailMessageDataHasBodyFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataHasBodyFlagConst = typeof MailMessageDataHasBodyFlagConst[keyof typeof MailMessageDataHasBodyFlagConst];
                export const MailMessageDataSentFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataSentFlagConst = typeof MailMessageDataSentFlagConst[keyof typeof MailMessageDataSentFlagConst];
                export const MailMessageDataSentFromPipedriveFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataSentFromPipedriveFlagConst = typeof MailMessageDataSentFromPipedriveFlagConst[keyof typeof MailMessageDataSentFromPipedriveFlagConst];
                export const MailMessageDataSmartBccFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataSmartBccFlagConst = typeof MailMessageDataSmartBccFlagConst[keyof typeof MailMessageDataSmartBccFlagConst];
                export const MailMessageDataHasAttachmentsFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataHasAttachmentsFlagConst = typeof MailMessageDataHasAttachmentsFlagConst[keyof typeof MailMessageDataHasAttachmentsFlagConst];
                export const MailMessageDataHasInlineAttachmentsFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataHasInlineAttachmentsFlagConst = typeof MailMessageDataHasInlineAttachmentsFlagConst[keyof typeof MailMessageDataHasInlineAttachmentsFlagConst];
                export const MailMessageDataHasRealAttachmentsFlagConst = {
                        NUMBER_0: 0,
                        NUMBER_1: 1
                } as const;

                export type MailMessageDataHasRealAttachmentsFlagConst = typeof MailMessageDataHasRealAttachmentsFlagConst[keyof typeof MailMessageDataHasRealAttachmentsFlagConst];


