# Pipedrive.AddARecurringSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealId** | **Number** | ID of the Deal this Recurring Subscription is associated with | 
**currency** | **String** | The currency of the Recurring Subscription. Accepts a 3-character currency code. | 
**description** | **String** | Description of the Recurring Subscription | [optional] 
**cadenceType** | **String** | Interval between payments | 
**cyclesCount** | **Number** | Shows how many payments the Subscription has. Note that only one field must be set: cycles_count or infinite. | 
**cycleAmount** | **Number** | Amount of each payment | 
**startDate** | **Date** | Start date of the Recurring Subscription. Format: YYYY-MM-DD | 
**infinite** | **Boolean** | This indicates that the Recurring Subscription will last until it&#39;s manually canceled or deleted. Note that only one field must be set: cycles_count or infinite. | 
**payments** | **[Object]** | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | [optional] 
**updateDealValue** | **Boolean** | Indicates that the Deal value must be set to Recurring Subscription&#39;s MRR value | [optional] 



## Enum: CadenceTypeEnum


* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `quarterly` (value: `"quarterly"`)

* `yearly` (value: `"yearly"`)




