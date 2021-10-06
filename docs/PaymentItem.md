# Pipedrive.PaymentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Payment | [optional] 
**subscriptionId** | **Number** | The ID of the Subscription this Payment is associated with | [optional] 
**dealId** | **Number** | The ID of the Deal this Payment is associated with | [optional] 
**isActive** | **Boolean** | The Payment status | [optional] 
**amount** | **Number** | The Payment amount | [optional] 
**currency** | **String** | The currency of the Payment | [optional] 
**changeAmount** | **Number** | Difference between the amount of the current Payment and the previous Payment. The value can be either positive or negative. | [optional] 
**dueAt** | **Date** | Date when Payment occurs | [optional] 
**revenueMovementType** | **String** | Represents the movement of revenue in comparison with the previous Payment. Possible values are: &#x60;New&#x60; - first Payment of the subscription. &#x60;Recurring&#x60; - no movement. &#x60;Expansion&#x60; - current Payment amount &gt; previous Payment amount. &#x60;Contraction&#x60; - current Payment amount &lt; previous Payment amount. &#x60;Churn&#x60; - last Payment of the subscription. | [optional] 
**paymentType** | **String** | The type of the Payment. Possible values are: &#x60;Recurring&#x60; - payments occur over fixed intervals of time, &#x60;Additional&#x60; - extra payment not the recurring payment of the recurring subscription, &#x60;Installment&#x60; - payment of the installment subscription. | [optional] 
**description** | **String** | The description of the Payment | [optional] 
**addTime** | **String** | The creation time of the Payment | [optional] 
**updateTime** | **String** | The update time of the Payment | [optional] 



## Enum: RevenueMovementTypeEnum


* `new` (value: `"new"`)

* `recurring` (value: `"recurring"`)

* `expansion` (value: `"expansion"`)

* `contraction` (value: `"contraction"`)

* `none` (value: `"none"`)

* `churn` (value: `"churn"`)





## Enum: PaymentTypeEnum


* `recurring` (value: `"recurring"`)

* `additional` (value: `"additional"`)

* `installment` (value: `"installment"`)




