# Pipedrive.UpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the filter | [optional] 
**conditions** | **Object** | The conditions of the filter as a JSON object. It requires a minimum structure as follows: {\&quot;glue\&quot;:\&quot;and\&quot;,\&quot;conditions\&quot;:[{\&quot;glue\&quot;:\&quot;and\&quot;,\&quot;conditions\&quot;: [CONDITION_OBJECTS]},{\&quot;glue\&quot;:\&quot;or\&quot;,\&quot;conditions\&quot;:[CONDITION_OBJECTS]}]}. Replace CONDITION_OBJECTS with JSON objects of the following structure: {\&quot;object\&quot;:\&quot;\&quot;,\&quot;field_id\&quot;:\&quot;\&quot;, \&quot;operator\&quot;:\&quot;\&quot;,\&quot;value\&quot;:\&quot;\&quot;, \&quot;extra_value\&quot;:\&quot;\&quot;} or leave the array empty. Depending on the object type you should use another API endpoint to get field_id. There are five types of objects you can choose from: \&quot;person\&quot;, \&quot;deal\&quot;, \&quot;organization\&quot;, \&quot;product\&quot;, \&quot;activity\&quot; and you can use these types of operators depending on what type of a field you have: \&quot;IS NOT NULL\&quot;, \&quot;IS NULL\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot;, \&quot;&#x3D;\&quot;, \&quot;LIKE &#39;%$%&#39;\&quot;, \&quot;NOT LIKE &#39;%$%&#39;\&quot;, \&quot;LIKE &#39;$%&#39;\&quot;, \&quot;NOT LIKE &#39;$%&#39;\&quot;, \&quot;LIKE &#39;%$&#39;\&quot;, \&quot;NOT LIKE &#39;%$&#39;\&quot;. To get a better understanding of how filters work try creating them directly from the Pipedrive application. | 


