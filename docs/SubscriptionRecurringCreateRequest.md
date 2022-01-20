# Pipedrive.SubscriptionRecurringCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_id** | **Number** | The ID of the deal this recurring subscription is associated with | 
**currency** | **String** | The currency of the recurring subscription. Accepts a 3-character currency code. | 
**description** | **String** | The description of the recurring subscription | [optional] 
**cadence_type** | **String** | The interval between payments | 
**cycles_count** | **Number** | Shows how many payments the subscription has. Note that one field must be set: &#x60;cycles_count&#x60; or &#x60;infinite&#x60;. If &#x60;cycles_count&#x60; is set, then &#x60;cycle_amount&#x60; and &#x60;start_date&#x60; are also required. | [optional] 
**cycle_amount** | **Number** | The amount of each payment | 
**start_date** | **Date** | The start date of the recurring subscription. Format: YYYY-MM-DD | 
**infinite** | **Boolean** | This indicates that the recurring subscription will last until it&#39;s manually canceled or deleted. Note that only one field must be set: &#x60;cycles_count&#x60; or &#x60;infinite&#x60;. | [optional] 
**payments** | **[Object]** | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | [optional] 
**update_deal_value** | **Boolean** | Indicates that the deal value must be set to recurring subscription&#39;s MRR value | [optional] 



## Enum: CadenceTypeEnum


* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `quarterly` (value: `"quarterly"`)

* `yearly` (value: `"yearly"`)




