# Pipedrive.PaymentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the payment | [optional] 
**subscription_id** | **Number** | The ID of the subscription this payment is associated with | [optional] 
**deal_id** | **Number** | The ID of the deal this payment is associated with | [optional] 
**is_active** | **Boolean** | The payment status | [optional] 
**amount** | **Number** | The payment amount | [optional] 
**currency** | **String** | The currency of the payment | [optional] 
**change_amount** | **Number** | The difference between the amount of the current payment and the previous payment. The value can be either positive or negative. | [optional] 
**due_at** | **Date** | The date when payment occurs | [optional] 
**revenue_movement_type** | **String** | Represents the movement of revenue in comparison with the previous payment. Possible values are: &#x60;New&#x60; - first payment of the subscription. &#x60;Recurring&#x60; - no movement. &#x60;Expansion&#x60; - current payment amount &gt; previous payment amount. &#x60;Contraction&#x60; - current payment amount &lt; previous payment amount. &#x60;Churn&#x60; - last payment of the subscription. | [optional] 
**payment_type** | **String** | The type of the payment. Possible values are: &#x60;Recurring&#x60; - payments occur over fixed intervals of time, &#x60;Additional&#x60; - extra payment not the recurring payment of the recurring subscription, &#x60;Installment&#x60; - payment of the installment subscription. | [optional] 
**description** | **String** | The description of the payment | [optional] 
**add_time** | **Date** | The creation time of the payment | [optional] 
**update_time** | **Date** | The update time of the payment | [optional] 



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




