# Pipedrive.AddAnInstallmentSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealId** | **Number** | ID of the Deal this Installment Subscription is associated with | 
**currency** | **String** | The currency of the Installment Subscription. Accepts a 3-character currency code. | 
**payments** | **[Object]** | Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with an explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD). | 
**updateDealValue** | **Boolean** | Indicates that the Deal value must be set to the Installment Subscription&#39;s total value | [optional] 


