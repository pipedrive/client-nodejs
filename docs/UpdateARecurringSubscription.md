# Pipedrive.UpdateARecurringSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the Recurring Subscription | [optional] 
**cycleAmount** | **Number** | Amount of each payment | [optional] 
**payments** | **[Object]** | Array of additional payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | [optional] 
**updateDealValue** | **Boolean** | Indicates that the Deal value must be set to Recurring Subscription&#39;s MRR value | [optional] 
**effectiveDate** | **Date** | All payments after that date will be affected. Format: YYYY-MM-DD | 


