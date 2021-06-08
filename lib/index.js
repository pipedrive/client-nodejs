/**
  * @module PipedriveAPIV1Lib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const ActivitiesController = require('./Controllers/ActivitiesController');
const ActivityFieldsController = require('./Controllers/ActivityFieldsController');
const ActivityTypesController = require('./Controllers/ActivityTypesController');
const CurrenciesController = require('./Controllers/CurrenciesController');
const DealFieldsController = require('./Controllers/DealFieldsController');
const DealsController = require('./Controllers/DealsController');
const ItemsController = require('./Controllers/ItemsController');
const FilesController = require('./Controllers/FilesController');
const FiltersController = require('./Controllers/FiltersController');
const GlobalMessagesController = require('./Controllers/GlobalMessagesController');
const GoalsController = require('./Controllers/GoalsController');
const MailMessagesController = require('./Controllers/MailMessagesController');
const MailThreadsController = require('./Controllers/MailThreadsController');
const NoteFieldsController = require('./Controllers/NoteFieldsController');
const NotesController = require('./Controllers/NotesController');
const OrganizationFieldsController = require('./Controllers/OrganizationFieldsController');
const OrganizationRelationshipsController =
  require('./Controllers/OrganizationRelationshipsController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PermissionSetsController = require('./Controllers/PermissionSetsController');
const PersonFieldsController = require('./Controllers/PersonFieldsController');
const PersonsController = require('./Controllers/PersonsController');
const PipelinesController = require('./Controllers/PipelinesController');
const ProductFieldsController = require('./Controllers/ProductFieldsController');
const ProductsController = require('./Controllers/ProductsController');
const RecentsController = require('./Controllers/RecentsController');
const RolesController = require('./Controllers/RolesController');
const StagesController = require('./Controllers/StagesController');
const TeamsController = require('./Controllers/TeamsController');
const UserConnectionsController = require('./Controllers/UserConnectionsController');
const UserSettingsController = require('./Controllers/UserSettingsController');
const UsersController = require('./Controllers/UsersController');
const WebhooksController = require('./Controllers/WebhooksController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const FilterTypeEnum = require('./Models/FilterTypeEnum');
const IconKeyEnum = require('./Models/IconKeyEnum');
const FieldType = require('./Models/FieldType');
const NumberBooleanEnum = require('./Models/NumberBooleanEnum');
const MailMessage = require('./Models/MailMessage');
const MailMessageData = require('./Models/MailMessageData');
const MailParticipant = require('./Models/MailParticipant');
const MailServiceBaseResponse = require('./Models/MailServiceBaseResponse');
const Activity = require('./Models/Activity');
const BasicDeal = require('./Models/BasicDeal');
const VisibleToEnum = require('./Models/VisibleToEnum');
const NewDeal = require('./Models/NewDeal');
const GetAddedDeal = require('./Models/GetAddedDeal');
const GetDuplicatedDeal = require('./Models/GetDuplicatedDeal');
const GetMergedDeal = require('./Models/GetMergedDeal');
const AddedDealFollower = require('./Models/AddedDealFollower');
const DeleteDeal = require('./Models/DeleteDeal');
const DeleteDealFollower = require('./Models/DeleteDealFollower');
const DeleteDealParticipant = require('./Models/DeleteDealParticipant');
const DeleteDealProduct = require('./Models/DeleteDealProduct');
const BasicDealProduct = require('./Models/BasicDealProduct');
const NewDealProduct = require('./Models/NewDealProduct');
const BaseCurrency = require('./Models/BaseCurrency');
const Currencies = require('./Models/Currencies');
const Note = require('./Models/Note');
const GetNotes = require('./Models/GetNotes');
const PostNote = require('./Models/PostNote');
const DeleteNote = require('./Models/DeleteNote');
const BaseNoteDealTitle = require('./Models/BaseNoteDealTitle');
const BaseNote = require('./Models/BaseNote');
const NoteCreatorUser = require('./Models/NoteCreatorUser');
const AdditionalData = require('./Models/AdditionalData');
const AdditionalDataWithPaginationDetails = require('./Models/AdditionalDataWithPaginationDetails');
const BasicGoal = require('./Models/BasicGoal');
const NewGoal = require('./Models/NewGoal');
const BasicOrganizationField = require('./Models/BasicOrganizationField');
const NewOrganizationField = require('./Models/NewOrganizationField');
const BasicOrganization = require('./Models/BasicOrganization');
const NewOrganization = require('./Models/NewOrganization');
const OrganizationRelationship = require('./Models/OrganizationRelationship');
const BasicPerson = require('./Models/BasicPerson');
const NewPerson = require('./Models/NewPerson');
const NewPersonField = require('./Models/NewPersonField');
const Pipeline = require('./Models/Pipeline');
const Product = require('./Models/Product');
const NewFollowerResponse = require('./Models/NewFollowerResponse');
const DeleteProductFollowerResponse = require('./Models/DeleteProductFollowerResponse');
const BasicProductField = require('./Models/BasicProductField');
const NewProductField = require('./Models/NewProductField');
const ProductField = require('./Models/ProductField');
const GetAllProductFieldsResponse = require('./Models/GetAllProductFieldsResponse');
const GetProductFieldResponse = require('./Models/GetProductFieldResponse');
const DeleteMultipleProductFieldsResponse = require('./Models/DeleteMultipleProductFieldsResponse');
const DeleteProductFieldResponse = require('./Models/DeleteProductFieldResponse');
const BaseRole = require('./Models/BaseRole');
const RoleAssignment = require('./Models/RoleAssignment');
const SubRole = require('./Models/SubRole');
const FullRole = require('./Models/FullRole');
const GetRoles = require('./Models/GetRoles');
const RoleSettings = require('./Models/RoleSettings');
const RolesAdditionalData = require('./Models/RolesAdditionalData');
const PostRoles = require('./Models/PostRoles');
const DeleteRole = require('./Models/DeleteRole');
const GetRole = require('./Models/GetRole');
const PutRole = require('./Models/PutRole');
const DeleteRoleAssignment = require('./Models/DeleteRoleAssignment');
const GetRoleAssignments = require('./Models/GetRoleAssignments');
const PostRoleAssignment = require('./Models/PostRoleAssignment');
const GetRoleSubroles = require('./Models/GetRoleSubroles');
const GetRoleSettings = require('./Models/GetRoleSettings');
const PostRoleSettings = require('./Models/PostRoleSettings');
const Stage = require('./Models/Stage');
const PermissionSets = require('./Models/PermissionSets');
const PermissionSetsItem = require('./Models/PermissionSetsItem');
const SinglePermissionSetsItem = require('./Models/SinglePermissionSetsItem');
const UserAssignmentsToPermissionSet = require('./Models/UserAssignmentsToPermissionSet');
const UserAssignmentToPermissionSet = require('./Models/UserAssignmentToPermissionSet');
const CreateTeam = require('./Models/CreateTeam');
const UpdateTeam = require('./Models/UpdateTeam');
const BaseTeam = require('./Models/BaseTeam');
const Teams = require('./Models/Teams');
const UserIDs = require('./Models/UserIDs');
const BaseUser = require('./Models/BaseUser');
const User = require('./Models/User');
const Users = require('./Models/Users');
const BaseUserMe = require('./Models/BaseUserMe');
const UserMe = require('./Models/UserMe');
const UserConnections = require('./Models/UserConnections');
const GetDeal = require('./Models/GetDeal');
const GetDeals = require('./Models/GetDeals');
const GetDealsByName = require('./Models/GetDealsByName');
const GetDealsSummary = require('./Models/GetDealsSummary');
const GetDealsTimeline = require('./Models/GetDealsTimeline');
const DealUserData = require('./Models/DealUserData');
const DealPersonData = require('./Models/DealPersonData');
const DealOrganizationData = require('./Models/DealOrganizationData');
const GetProductAttachementDetails = require('./Models/GetProductAttachementDetails');
const GetAddProductAttachementDetails = require('./Models/GetAddProductAttachementDetails');
const ProductAttachementFields = require('./Models/ProductAttachementFields');
const DealNonStrictModeFields = require('./Models/DealNonStrictModeFields');
const DealStrictModeFields = require('./Models/DealStrictModeFields');
const BaseDeal = require('./Models/BaseDeal');
const BaseResponse = require('./Models/BaseResponse');
const CommonMailThread = require('./Models/CommonMailThread');
const BaseMailThread = require('./Models/BaseMailThread');
const MailThread = require('./Models/MailThread');
const MailThreadOne = require('./Models/MailThreadOne');
const MailThreadParticipant = require('./Models/MailThreadParticipant');
const BaseMailThreadMessages = require('./Models/BaseMailThreadMessages');
const MailThreadMessages = require('./Models/MailThreadMessages');
const MailThreadDelete = require('./Models/MailThreadDelete');
const MailThreadPut = require('./Models/MailThreadPut');
const GlobalMessageGet = require('./Models/GlobalMessageGet');
const GlobalMessageBaseResponse = require('./Models/GlobalMessageBaseResponse');
const GlobalMessageData = require('./Models/GlobalMessageData');
const GlobalMessageUserData = require('./Models/GlobalMessageUserData');
const GlobalMessageDelete = require('./Models/GlobalMessageDelete');
const AdditionalData3 = require('./Models/AdditionalData3');
const AdditionalData4 = require('./Models/AdditionalData4');
const AdditionalData5 = require('./Models/AdditionalData5');
const AdditionalData6 = require('./Models/AdditionalData6');
const Age = require('./Models/Age');
const AssigneeTypeEnum = require('./Models/AssigneeTypeEnum');
const AverageTimeToWon = require('./Models/AverageTimeToWon');
const CreatorUserId = require('./Models/CreatorUserId');
const Data = require('./Models/Data');
const Data2 = require('./Models/Data2');
const Data3 = require('./Models/Data3');
const Data4 = require('./Models/Data4');
const Data5 = require('./Models/Data5');
const Data6 = require('./Models/Data6');
const Data7 = require('./Models/Data7');
const Data8 = require('./Models/Data8');
const Data9 = require('./Models/Data9');
const Data10 = require('./Models/Data10');
const Data11 = require('./Models/Data11');
const Data12 = require('./Models/Data12');
const Data13 = require('./Models/Data13');
const Data14 = require('./Models/Data14');
const Data15 = require('./Models/Data15');
const Data16 = require('./Models/Data16');
const Data17 = require('./Models/Data17');
const Data18 = require('./Models/Data18');
const Data19 = require('./Models/Data19');
const Data20 = require('./Models/Data20');
const Data21 = require('./Models/Data21');
const Data24 = require('./Models/Data24');
const Data25 = require('./Models/Data25');
const Data26 = require('./Models/Data26');
const Data27 = require('./Models/Data27');
const Data28 = require('./Models/Data28');
const Data29 = require('./Models/Data29');
const Data30 = require('./Models/Data30');
const Data31 = require('./Models/Data31');
const Data32 = require('./Models/Data32');
const Deal1 = require('./Models/Deal1');
const DealDefaultVisibilityEnum = require('./Models/DealDefaultVisibilityEnum');
const DealsResponse = require('./Models/DealsResponse');
const Email = require('./Models/Email');
const EventActionEnum = require('./Models/EventActionEnum');
const EventObjectEnum = require('./Models/EventObjectEnum');
const ExpectedOutcomeTrackingMetricEnum = require('./Models/ExpectedOutcomeTrackingMetricEnum');
const FieldType6Enum = require('./Models/FieldType6Enum');
const FieldType1Enum = require('./Models/FieldType1Enum');
const FieldType4Enum = require('./Models/FieldType4Enum');
const FileTypeEnum = require('./Models/FileTypeEnum');
const FolderEnum = require('./Models/FolderEnum');
const IntervalEnum = require('./Models/IntervalEnum');
const Interval2Enum = require('./Models/Interval2Enum');
const ItemTypeEnum = require('./Models/ItemTypeEnum');
const ItemType2Enum = require('./Models/ItemType2Enum');
const ItemsEnum = require('./Models/ItemsEnum');
const Language = require('./Models/Language');
const MailTrackingStatusEnum = require('./Models/MailTrackingStatusEnum');
const OrderByEnum = require('./Models/OrderByEnum');
const Organization1 = require('./Models/Organization1');
const OrgId = require('./Models/OrgId');
const Pagination = require('./Models/Pagination');
const Pagination1 = require('./Models/Pagination1');
const Parties = require('./Models/Parties');
const Person1 = require('./Models/Person1');
const PersonId = require('./Models/PersonId');
const Phone = require('./Models/Phone');
const RelatedObjects = require('./Models/RelatedObjects');
const RemoteLocationEnum = require('./Models/RemoteLocationEnum');
const RottenFlagEnum = require('./Models/RottenFlagEnum');
const SettingKeyEnum = require('./Models/SettingKeyEnum');
const StatusEnum = require('./Models/StatusEnum');
const Status2Enum = require('./Models/Status2Enum');
const Status3Enum = require('./Models/Status3Enum');
const StayInPipelineStages = require('./Models/StayInPipelineStages');
const Totals = require('./Models/Totals');
const TypeEnum = require('./Models/TypeEnum');
const TypeNameEnum = require('./Models/TypeNameEnum');
const Type2Enum = require('./Models/Type2Enum');
const UserId = require('./Models/UserId');
const ValuesTotal = require('./Models/ValuesTotal');
const WebhooksResponse = require('./Models/WebhooksResponse');
const WebhooksResponse1 = require('./Models/WebhooksResponse1');
const WeightedValuesTotal = require('./Models/WeightedValuesTotal');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const FailResponseException = require('./Exceptions/FailResponseException');
const UnauthorizedException = require('./Exceptions/UnauthorizedException');
const BaseResponseErrorException = require('./Exceptions/BaseResponseErrorException');
const Webhooks400ErrorException = require('./Exceptions/Webhooks400ErrorException');
const Webhooks400ErrorErrorException = require('./Exceptions/Webhooks400ErrorErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');
const SearchDeals = require('./Models/SearchDeals');
const SearchProducts = require('./Models/SearchProducts');
const ItemSearchByField = require('./Models/ItemSearchByField');


const initializer = {
    // functional components of PipedriveAPIV1Lib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of PipedriveAPIV1Lib
    ActivitiesController,
    ActivityFieldsController,
    ActivityTypesController,
    CurrenciesController,
    DealFieldsController,
    DealsController,
    ItemsController,
    FilesController,
    FiltersController,
    GlobalMessagesController,
    GoalsController,
    MailMessagesController,
    MailThreadsController,
    NoteFieldsController,
    NotesController,
    OrganizationFieldsController,
    OrganizationRelationshipsController,
    OrganizationsController,
    PermissionSetsController,
    PersonFieldsController,
    PersonsController,
    PipelinesController,
    ProductFieldsController,
    ProductsController,
    RecentsController,
    RolesController,
    StagesController,
    TeamsController,
    UserConnectionsController,
    UserSettingsController,
    UsersController,
    WebhooksController,
    OAuthAuthorizationController,
    // models of PipedriveAPIV1Lib
    FilterTypeEnum,
    IconKeyEnum,
    FieldType,
    NumberBooleanEnum,
    MailMessage,
    MailMessageData,
    MailParticipant,
    MailServiceBaseResponse,
    Activity,
    BasicDeal,
    VisibleToEnum,
    NewDeal,
    GetAddedDeal,
    GetDuplicatedDeal,
    GetMergedDeal,
    AddedDealFollower,
    DeleteDeal,
    DeleteDealFollower,
    DeleteDealParticipant,
    DeleteDealProduct,
    BasicDealProduct,
    NewDealProduct,
    BaseCurrency,
    Currencies,
    Note,
    GetNotes,
    PostNote,
    DeleteNote,
    BaseNoteDealTitle,
    BaseNote,
    NoteCreatorUser,
    AdditionalData,
    AdditionalDataWithPaginationDetails,
    BasicGoal,
    NewGoal,
    BasicOrganizationField,
    NewOrganizationField,
    BasicOrganization,
    NewOrganization,
    OrganizationRelationship,
    BasicPerson,
    NewPerson,
    NewPersonField,
    Pipeline,
    Product,
    NewFollowerResponse,
    DeleteProductFollowerResponse,
    BasicProductField,
    NewProductField,
    ProductField,
    GetAllProductFieldsResponse,
    GetProductFieldResponse,
    DeleteMultipleProductFieldsResponse,
    DeleteProductFieldResponse,
    BaseRole,
    RoleAssignment,
    SubRole,
    FullRole,
    GetRoles,
    RoleSettings,
    RolesAdditionalData,
    PostRoles,
    DeleteRole,
    GetRole,
    PutRole,
    DeleteRoleAssignment,
    GetRoleAssignments,
    PostRoleAssignment,
    GetRoleSubroles,
    GetRoleSettings,
    PostRoleSettings,
    Stage,
    PermissionSets,
    PermissionSetsItem,
    SinglePermissionSetsItem,
    SearchDeals,
    SearchProducts,
    UserAssignmentsToPermissionSet,
    UserAssignmentToPermissionSet,
    CreateTeam,
    UpdateTeam,
    BaseTeam,
    Teams,
    UserIDs,
    BaseUser,
    User,
    Users,
    BaseUserMe,
    UserMe,
    UserConnections,
    GetDeal,
    GetDeals,
    GetDealsByName,
    GetDealsSummary,
    GetDealsTimeline,
    DealUserData,
    DealPersonData,
    DealOrganizationData,
    GetProductAttachementDetails,
    GetAddProductAttachementDetails,
    ProductAttachementFields,
    DealNonStrictModeFields,
    DealStrictModeFields,
    BaseDeal,
    BaseResponse,
    CommonMailThread,
    BaseMailThread,
    MailThread,
    MailThreadOne,
    MailThreadParticipant,
    BaseMailThreadMessages,
    MailThreadMessages,
    MailThreadDelete,
    MailThreadPut,
    GlobalMessageGet,
    GlobalMessageBaseResponse,
    GlobalMessageData,
    GlobalMessageUserData,
    GlobalMessageDelete,
    AdditionalData3,
    AdditionalData4,
    AdditionalData5,
    AdditionalData6,
    Age,
    AssigneeTypeEnum,
    AverageTimeToWon,
    CreatorUserId,
    Data,
    Data2,
    Data3,
    Data4,
    Data5,
    Data6,
    Data7,
    Data8,
    Data9,
    Data10,
    Data11,
    Data12,
    Data13,
    Data14,
    Data15,
    Data16,
    Data17,
    Data18,
    Data19,
    Data20,
    Data21,
    Data24,
    Data25,
    Data26,
    Data27,
    Data28,
    Data29,
    Data30,
    Data31,
    Data32,
    Deal1,
    DealDefaultVisibilityEnum,
    DealsResponse,
    Email,
    EventActionEnum,
    EventObjectEnum,
    ExpectedOutcomeTrackingMetricEnum,
    FieldType6Enum,
    FieldType1Enum,
    FieldType4Enum,
    FileTypeEnum,
    FolderEnum,
    IntervalEnum,
    Interval2Enum,
    ItemTypeEnum,
    ItemType2Enum,
    ItemsEnum,
    Language,
    MailTrackingStatusEnum,
    OrderByEnum,
    Organization1,
    OrgId,
    Pagination,
    Pagination1,
    Parties,
    Person1,
    PersonId,
    Phone,
    RelatedObjects,
    RemoteLocationEnum,
    RottenFlagEnum,
    SettingKeyEnum,
    StatusEnum,
    Status2Enum,
    Status3Enum,
    StayInPipelineStages,
    Totals,
    TypeEnum,
    TypeNameEnum,
    Type2Enum,
    UserId,
    ValuesTotal,
    WebhooksResponse,
    WebhooksResponse1,
    WeightedValuesTotal,
    OAuthToken,
    OAuthProviderErrorEnum,
    ItemSearchByField,
    // exceptions of PipedriveAPIV1Lib
    FailResponseException,
    UnauthorizedException,
    BaseResponseErrorException,
    Webhooks400ErrorException,
    Webhooks400ErrorErrorException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
