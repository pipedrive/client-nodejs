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
**revenueMovementType** | **String** | Represents the movement of revenue in comparison with the previous Payment. Possible values are: New - first Payment of the subscription. Recurring - no movement. Expansion - current Payment amount &gt; previous Payment amount. Contraction - current Payment amount &lt; previous Payment amount. Churn - last Payment of the subscription. | [optional] 
**paymentType** | **String** | The type of the Payment. Possible values are: Recurring - payments occur over fixed intervals of time, Additional - extra payment not the recurring payment of the recurring subscription, Installment - payment of the installment subscription. | [optional] 
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




