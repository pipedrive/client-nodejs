# Pipedrive.SubscriptionRecurringUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the recurring subscription | [optional] 
**cycle_amount** | **Number** | The amount of each payment | [optional] 
**payments** | **[Object]** | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | [optional] 
**update_deal_value** | **Boolean** | Indicates that the deal value must be set to recurring subscription&#39;s MRR value | [optional] 
**effective_date** | **Date** | All payments after that date will be affected. Format: YYYY-MM-DD | 


