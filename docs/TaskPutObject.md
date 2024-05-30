# Pipedrive.TaskPutObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title of the task | [optional] 
**project_id** | **Number** | The ID of the project this task is associated with | [optional] 
**description** | **String** | The description of the task | [optional] 
**parent_task_id** | **Number** | The ID of a parent task. Can not be ID of a task which is already a subtask. | [optional] 
**assignee_id** | **Number** | The ID of the user who will be the assignee of the task | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the task is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. | [optional] 
**due_date** | **Date** | The due date of the task. Format: YYYY-MM-DD. | [optional] 


