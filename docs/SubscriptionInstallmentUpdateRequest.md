# Pipedrive.SubscriptionInstallmentUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | **[Object]** | Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | 
**update_deal_value** | **Boolean** | Indicates that the deal value must be set to installment subscription&#39;s total value | [optional] 


