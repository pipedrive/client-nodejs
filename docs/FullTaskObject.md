# Pipedrive.FullTaskObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title of the task | [optional] 
**projectId** | **Number** | The ID of the project this task is associated with | [optional] 
**description** | **String** | The description of the task | [optional] 
**parentTaskId** | **Number** | The ID of a parent task. Can not be ID of a task which is already a subtask. | [optional] 
**assigneeId** | **Number** | The ID of the user who will be the assignee of the task | [optional] 
**done** | [**NumberBoolean**](NumberBoolean.md) | Whether the task is done or not. 0 &#x3D; Not done, 1 &#x3D; Done. | [optional] 
**dueDate** | **Date** | The due date of the task. Format: YYYY-MM-DD. | [optional] 
**creatorId** | **Number** | The creator of a task | [optional] 
**addTime** | **String** | The creation date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**updateTime** | **String** | The update date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 
**markedAsDoneTime** | **String** | The marked as done date and time of the task in UTC. Format: YYYY-MM-DD HH:MM:SS. | [optional] 


