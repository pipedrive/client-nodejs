# Pipedrive.TaskPostObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title of the task | 
**projectId** | **Number** | The ID of a project | 
**description** | **String** | The description of the task | [optional] 
**parentTaskId** | **Number** | The ID of a parent task. Can not be ID of a task which is already a subtask. | [optional] 
**assigneeId** | **Number** | The ID of the user who will be the assignee of the task | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the task is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. | [optional] 
**dueDate** | **Date** | The due date of the task. Format: YYYY-MM-DD. | [optional] 


