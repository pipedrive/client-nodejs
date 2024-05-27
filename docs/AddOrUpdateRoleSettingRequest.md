# Pipedrive.AddOrUpdateRoleSettingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**setting_key** | **String** |  | 
**value** | **Number** | Possible values for the &#x60;default_visibility&#x60; setting depending on the subscription plan:&lt;br&gt; &lt;table class&#x3D;&#39;role-setting&#39;&gt; &lt;caption&gt;&lt;b&gt;Essential / Advanced plan&lt;/b&gt;&lt;/caption&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Value&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner &amp; Followers&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;br&gt; &lt;table class&#x3D;&#39;role-setting&#39;&gt; &lt;caption&gt;&lt;b&gt;Professional / Enterprise plan&lt;/b&gt;&lt;/caption&gt; &lt;tr&gt;&lt;th&gt;&lt;b&gt;Value&lt;/b&gt;&lt;/th&gt;&lt;th&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;1&#x60;&lt;/td&gt;&lt;td&gt;Owner only&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;3&#x60;&lt;/td&gt;&lt;td&gt;Owner&amp;#39;s visibility group&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;5&#x60;&lt;/td&gt;&lt;td&gt;Owner&amp;#39;s visibility group and sub-groups&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&#x60;7&#x60;&lt;/td&gt;&lt;td&gt;Entire company&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;br&gt; Read more about visibility groups &lt;a href&#x3D;&#39;https://support.pipedrive.com/en/article/visibility-groups&#39;&gt;here&lt;/a&gt;. | 



## Enum: SettingKeyEnum


* `deal_default_visibility` (value: `"deal_default_visibility"`)

* `lead_default_visibility` (value: `"lead_default_visibility"`)

* `org_default_visibility` (value: `"org_default_visibility"`)

* `person_default_visibility` (value: `"person_default_visibility"`)

* `product_default_visibility` (value: `"product_default_visibility"`)





## Enum: ValueEnum


* `1` (value: `1`)

* `3` (value: `3`)

* `5` (value: `5`)

* `7` (value: `7`)




