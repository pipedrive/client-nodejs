# Pipedrive.OrganizationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the organization | [optional] 
**companyId** | **Number** | The ID of the company related to the organization | [optional] 
**ownerId** | [**Owner**](Owner.md) |  | [optional] 
**name** | **String** | The name of the organization | [optional] 
**activeFlag** | **Boolean** | Whether the organization is active or not | [optional] 
**pictureId** | [**PictureDataWithValue**](PictureDataWithValue.md) |  | [optional] 
**countryCode** | **String** | The country code of the organization | [optional] 
**firstChar** | **String** | The first character of the organization name | [optional] 
**addTime** | **String** | The creation date and time of the organization | [optional] 
**updateTime** | **String** | The last updated date and time of the organization | [optional] 
**visibleTo** | **String** | The visibility group ID of who can see the organization | [optional] 
**label** | **Number** | The label assigned to the organization | [optional] 
**ownerName** | **String** | The name of the organization owner | [optional] 
**ccEmail** | **String** | The BCC email associated with the organization | [optional] 
**emailMessagesCount** | **Number** | The count of email messages related to the organization | [optional] 
**peopleCount** | **Number** | The count of persons related to the organization | [optional] 
**activitiesCount** | **Number** | The count of activities related to the organization | [optional] 
**doneActivitiesCount** | **Number** | The count of done activities related to the organization | [optional] 
**undoneActivitiesCount** | **Number** | The count of undone activities related to the organization | [optional] 
**filesCount** | **Number** | The count of files related to the organization | [optional] 
**notesCount** | **Number** | The count of notes related to the organization | [optional] 
**followersCount** | **Number** | The count of followers related to the organization | [optional] 
**address** | **String** | The full address of the organization | [optional] 
**addressSubpremise** | **String** | The sub-premise of the organization location | [optional] 
**addressStreetNumber** | **String** | The street number of the organization location | [optional] 
**addressRoute** | **String** | The route of the organization location | [optional] 
**addressSublocality** | **String** | The sub-locality of the organization location | [optional] 
**addressLocality** | **String** | The locality of the organization location | [optional] 
**addressAdminAreaLevel1** | **String** | The level 1 admin area of the organization location | [optional] 
**addressAdminAreaLevel2** | **String** | The level 2 admin area of the organization location | [optional] 
**addressCountry** | **String** | The country of the organization location | [optional] 
**addressPostalCode** | **String** | The postal code of the organization location | [optional] 
**addressFormattedAddress** | **String** | The formatted organization location | [optional] 
**openDealsCount** | **Number** | The count of open deals related with the item | [optional] 
**relatedOpenDealsCount** | **Number** | The count of related open deals related with the item | [optional] 
**closedDealsCount** | **Number** | The count of closed deals related with the item | [optional] 
**relatedClosedDealsCount** | **Number** | The count of related closed deals related with the item | [optional] 
**wonDealsCount** | **Number** | The count of won deals related with the item | [optional] 
**relatedWonDealsCount** | **Number** | The count of related won deals related with the item | [optional] 
**lostDealsCount** | **Number** | The count of lost deals related with the item | [optional] 
**relatedLostDealsCount** | **Number** | The count of related lost deals related with the item | [optional] 
**nextActivityDate** | **String** | The date of the next activity associated with the deal | [optional] 
**nextActivityTime** | **String** | The time of the next activity associated with the deal | [optional] 
**nextActivityId** | **Number** | The ID of the next activity associated with the deal | [optional] 
**lastActivityId** | **Number** | The ID of the last activity associated with the deal | [optional] 
**lastActivityDate** | **String** | The date of the last activity associated with the deal | [optional] 
**editName** | **Boolean** | If the company ID of the organization and company ID of the request is same or not | [optional] 
**lastActivity** | **Object** | Please refer to response schema of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/Activities#getActivity\&quot;&gt;Activity&lt;/a&gt; | [optional] 
**nextActivity** | **Object** | Please refer to response schema of &lt;a href&#x3D;\&quot;https://developers.pipedrive.com/docs/api/v1/Activities#getActivity\&quot;&gt;Activity&lt;/a&gt; | [optional] 


