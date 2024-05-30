# Pipedrive.SubscriptionInstallmentCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_id** | **Number** | The ID of the deal this installment subscription is associated with | 
**currency** | **String** | The currency of the installment subscription. Accepts a 3-character currency code. | 
**payments** | **[Object]** | Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | 
**update_deal_value** | **Boolean** | Indicates that the deal value must be set to the installment subscription&#39;s total value | [optional] 


