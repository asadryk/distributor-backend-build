"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesName = exports.PartnerApprovalStatus = exports.ToEmail = exports.temporaryOfferStatus = exports.SearchType = exports.SadaatiPartnerChangeRequestStatus = exports.RenewalStatus = exports.SubscriptionTypes = exports.SadaatiPartnerSubscriptionStatus = exports.SocialMediaTypes = exports.lawsAndRegulationIds = exports.MediaTypes = exports.JobApplicationStatus = exports.CourseApplicationStatus = exports.partnerChangeStatus = exports.JobSeekerStatus = exports.UserJournies = exports.Halls = exports.TemplateNames = exports.Queues = exports.CollectionNames = exports.Database = exports.UserTypes = void 0;
var UserTypes;
(function (UserTypes) {
    UserTypes["admin"] = "admin";
    UserTypes["orderBooker"] = "orderBooker";
    UserTypes["orderDelivery"] = "orderDelivery";
    UserTypes["user"] = "user";
    UserTypes["saler"] = "saler";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
var Database;
(function (Database) {
    Database["Distributor"] = "Distributor";
})(Database || (exports.Database = Database = {}));
var CollectionNames;
(function (CollectionNames) {
    CollectionNames["Users"] = "users";
    CollectionNames["ManualUser"] = "manualUser";
    CollectionNames["Emails"] = "emails";
    CollectionNames["Jobs"] = "jobs";
    CollectionNames["Courses"] = "courses";
    CollectionNames["Circulars"] = "circulars";
    CollectionNames["HumanResourceLaws"] = "humanResourceLaws";
    CollectionNames["SadaatiPartnerChangeRequests"] = "sadaatiPartnerChangeRequests";
    CollectionNames["UaePassUserData"] = "uaePassUserData";
    CollectionNames["JobSeekers"] = "jobSeekers";
    CollectionNames["RenewalRequests"] = "renewalRequests";
    CollectionNames["PartnerChangeRequests"] = "PartnerChangeRequests";
})(CollectionNames || (exports.CollectionNames = CollectionNames = {}));
var Queues;
(function (Queues) {
    Queues["email-template"] = "email-template";
})(Queues || (exports.Queues = Queues = {}));
var TemplateNames;
(function (TemplateNames) {
    TemplateNames["forgetPassword"] = "forgetPassword";
    TemplateNames["newRegistration"] = "newRegistration";
    TemplateNames["toTeamRegistaration"] = "toTeamRegistaration";
    TemplateNames["renewalRequestPartner"] = "renewalRequestPartner";
    TemplateNames["renewalRequestTeam"] = "renewalRequestTeam";
    TemplateNames["userVarification"] = "userVarification";
    TemplateNames["emailVerification"] = "emailVerification";
})(TemplateNames || (exports.TemplateNames = TemplateNames = {}));
var Halls;
(function (Halls) {
    Halls["active"] = "active";
    Halls["freeArea"] = "freeArea";
})(Halls || (exports.Halls = Halls = {}));
var UserJournies;
(function (UserJournies) {
    UserJournies["note"] = "note";
    UserJournies["suggestion"] = "suggestion";
    UserJournies["inquiry"] = "inquiry";
    UserJournies["complaints"] = "complaints";
})(UserJournies || (exports.UserJournies = UserJournies = {}));
var JobSeekerStatus;
(function (JobSeekerStatus) {
    JobSeekerStatus["Incomplete"] = "Incomplete";
    JobSeekerStatus["Active"] = "Active";
    JobSeekerStatus["Archive"] = "Archive";
    JobSeekerStatus["Hired"] = "Hired";
})(JobSeekerStatus || (exports.JobSeekerStatus = JobSeekerStatus = {}));
var partnerChangeStatus;
(function (partnerChangeStatus) {
    partnerChangeStatus["pending"] = "pending";
    partnerChangeStatus["approved"] = "approved";
    partnerChangeStatus["rejected"] = "rejected";
    partnerChangeStatus["expired"] = "expired";
})(partnerChangeStatus || (exports.partnerChangeStatus = partnerChangeStatus = {}));
var CourseApplicationStatus;
(function (CourseApplicationStatus) {
    CourseApplicationStatus["draft"] = "draft";
})(CourseApplicationStatus || (exports.CourseApplicationStatus = CourseApplicationStatus = {}));
var JobApplicationStatus;
(function (JobApplicationStatus) {
    JobApplicationStatus["draft"] = "draft";
})(JobApplicationStatus || (exports.JobApplicationStatus = JobApplicationStatus = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["image"] = "image";
    MediaTypes["video"] = "video";
})(MediaTypes || (exports.MediaTypes = MediaTypes = {}));
var lawsAndRegulationIds;
(function (lawsAndRegulationIds) {
    lawsAndRegulationIds["privacyPolicy"] = "privacyPolicy";
    lawsAndRegulationIds["disclaimer"] = "disclaimer";
    lawsAndRegulationIds["legalCulture"] = "legalCulture";
    lawsAndRegulationIds["qualityPolicy"] = "qualityPolicy";
})(lawsAndRegulationIds || (exports.lawsAndRegulationIds = lawsAndRegulationIds = {}));
var SocialMediaTypes;
(function (SocialMediaTypes) {
    SocialMediaTypes["website"] = "website";
    SocialMediaTypes["instagram"] = "instagram";
    SocialMediaTypes["twitter"] = "twitter";
    SocialMediaTypes["youtube"] = "youtube";
    SocialMediaTypes["contactNumber"] = "contactNumber";
    SocialMediaTypes["companyEmail"] = "companyEmail";
    SocialMediaTypes["facebook"] = "facebook";
})(SocialMediaTypes || (exports.SocialMediaTypes = SocialMediaTypes = {}));
var SadaatiPartnerSubscriptionStatus;
(function (SadaatiPartnerSubscriptionStatus) {
    SadaatiPartnerSubscriptionStatus["pending"] = "pending";
    SadaatiPartnerSubscriptionStatus["approved"] = "approved";
    SadaatiPartnerSubscriptionStatus["declined"] = "rejected";
    SadaatiPartnerSubscriptionStatus["expired"] = "expired";
})(SadaatiPartnerSubscriptionStatus || (exports.SadaatiPartnerSubscriptionStatus = SadaatiPartnerSubscriptionStatus = {}));
var SubscriptionTypes;
(function (SubscriptionTypes) {
    SubscriptionTypes["gold"] = "gold";
    SubscriptionTypes["silver"] = "silver";
    SubscriptionTypes["bronze"] = "bronze";
})(SubscriptionTypes || (exports.SubscriptionTypes = SubscriptionTypes = {}));
var RenewalStatus;
(function (RenewalStatus) {
    RenewalStatus["pending"] = "pending";
    RenewalStatus["rejected"] = "rejected";
    RenewalStatus["approved"] = "approved";
    RenewalStatus["none"] = "none";
})(RenewalStatus || (exports.RenewalStatus = RenewalStatus = {}));
var SadaatiPartnerChangeRequestStatus;
(function (SadaatiPartnerChangeRequestStatus) {
    SadaatiPartnerChangeRequestStatus["pending"] = "pending";
    SadaatiPartnerChangeRequestStatus["approved"] = "approved";
    SadaatiPartnerChangeRequestStatus["declined"] = "declined";
})(SadaatiPartnerChangeRequestStatus || (exports.SadaatiPartnerChangeRequestStatus = SadaatiPartnerChangeRequestStatus = {}));
var SearchType;
(function (SearchType) {
    SearchType["archived"] = "archived";
    SearchType["normal"] = "normal";
})(SearchType || (exports.SearchType = SearchType = {}));
var temporaryOfferStatus;
(function (temporaryOfferStatus) {
    temporaryOfferStatus["pending"] = "pending";
    temporaryOfferStatus["approved"] = "approved";
    temporaryOfferStatus["none"] = "none";
})(temporaryOfferStatus || (exports.temporaryOfferStatus = temporaryOfferStatus = {}));
var ToEmail;
(function (ToEmail) {
    ToEmail["supportEmail"] = "IT@fuj-hr.ae";
    ToEmail["sadaatiTeam"] = "saadaticard@fuj-hr.ae";
})(ToEmail || (exports.ToEmail = ToEmail = {}));
var PartnerApprovalStatus;
(function (PartnerApprovalStatus) {
    PartnerApprovalStatus["pending"] = "pending";
    PartnerApprovalStatus["approved"] = "approved";
    PartnerApprovalStatus["rejected"] = "rejected";
})(PartnerApprovalStatus || (exports.PartnerApprovalStatus = PartnerApprovalStatus = {}));
var EntitiesName;
(function (EntitiesName) {
    EntitiesName["RenewalRequests"] = "renewalRequests";
    EntitiesName["PartnerChangeRequests"] = "PartnerChangeRequests";
    EntitiesName["SadaatiPartnerChangeRequests"] = "sadaatiPartnerChangeRequests";
    EntitiesName["Users"] = "users";
    EntitiesName["Emails"] = "emails";
    EntitiesName["ArticleEmail"] = "articleEmail";
    EntitiesName["AppDownloads"] = "appDownloads";
    EntitiesName["Cms"] = "cms";
    EntitiesName["Configs"] = "configs";
    EntitiesName["Sections"] = "sections";
    EntitiesName["SubSections"] = "subSections";
    EntitiesName["AnnouncementCategories"] = "announcementCategories";
    EntitiesName["ImageCategories"] = "imageCategories";
    EntitiesName["Logs"] = "logs";
    EntitiesName["Schedule"] = "schedule";
    EntitiesName["ScheduleLogs"] = "schedule-logs";
    EntitiesName["siteMapSections"] = "siteMapSections";
    EntitiesName["siteMapPages"] = "siteMapPages";
    EntitiesName["Events"] = "events";
    EntitiesName["Announcements"] = "announcements";
    EntitiesName["Articles"] = "articles";
    EntitiesName["Images"] = "images";
    EntitiesName["Notifications"] = "notifications";
    EntitiesName["OrganizationChart"] = "organizationChart";
    EntitiesName["DiscountPercentage"] = "discountPercentage";
    EntitiesName["Videos"] = "videos";
    EntitiesName["Visitors"] = "visitors";
    EntitiesName["ReleaseAndPublications"] = "releaseAndPublications";
    EntitiesName["Awards"] = "awards";
    EntitiesName["AboutUs"] = "aboutUs";
    EntitiesName["ExternalLinks"] = "externalLinks";
    EntitiesName["HumanResourceLaws"] = "humanResourceLaws";
    EntitiesName["Circulars"] = "circulars";
    EntitiesName["LawsAndRegulations"] = "lawsAndRegulations";
    EntitiesName["HallBookings"] = "hallBookings";
    EntitiesName["LicenseTypes"] = "licenseTypes";
    EntitiesName["Partners"] = "partners";
    EntitiesName["SuggestCourses"] = "suggestCourses";
    EntitiesName["Emirates"] = "emirates";
    EntitiesName["SadaatiCategories"] = "sadaatiCategories";
    EntitiesName["Countries"] = "countries";
    EntitiesName["Cities"] = "cities";
    EntitiesName["ContactMessages"] = "contactMessages";
    EntitiesName["Specializations"] = "specializations";
    EntitiesName["Employers"] = "employers";
    EntitiesName["JobCategories"] = "jobCategories";
    EntitiesName["Jobs"] = "jobs";
    EntitiesName["JobSeekers"] = "jobSeekers";
    EntitiesName["Courses"] = "courses";
    EntitiesName["CourseLanguages"] = "courseLanguages";
    EntitiesName["TargetedCategories"] = "targetedCategories";
    EntitiesName["EducationalInstitutes"] = "educationalInstitutes";
    EntitiesName["EducationalLevels"] = "educationalLevels";
    EntitiesName["Specialities"] = "specialities";
    EntitiesName["VisaStatuses"] = "visaStatuses";
    EntitiesName["EmployementStatuses"] = "employementStatuses";
    EntitiesName["LeavingWorkReasons"] = "leavingWorkReasons";
    EntitiesName["MaritalStatuses"] = "maritalStatuses";
    EntitiesName["DocumentTypes"] = "documentTypes";
    EntitiesName["Feedbacks"] = "feedbacks";
    EntitiesName["SingleServices"] = "singleServices";
    EntitiesName["ContactUs"] = "contactUs";
    EntitiesName["Trainees"] = "trainees";
    EntitiesName["AcademicAttainments"] = "academicAttainments";
    EntitiesName["AcademicQualifications"] = "academicQualifications";
    EntitiesName["SadaatiCards"] = "sadaatiCards";
    EntitiesName["FeedbackTypes"] = "feedbackTypes";
    EntitiesName["EmailSubscriptions"] = "emailSubscriptions";
    EntitiesName["Roles"] = "roles";
    EntitiesName["Faqs"] = "faqs";
    EntitiesName["CourseRegistrations"] = "courseRegistrations";
    EntitiesName["CourseApplications"] = "courseApplications";
    EntitiesName["JobApplications"] = "jobApplications";
    EntitiesName["SadaatiPartners"] = "sadaatiPartners";
    EntitiesName["SadaatiCardPrints"] = "sadaatiCardPrints";
    EntitiesName["Spokepersons"] = "spokepersons";
    EntitiesName["Publications"] = "publications";
    EntitiesName["JobClassifications"] = "jobClassification";
    EntitiesName["TechnicalSupport"] = "technicalSupport";
    EntitiesName["EmailTemplates"] = "emailTemplates";
    EntitiesName["TemporaryOffer"] = "temporaryOffer";
})(EntitiesName || (exports.EntitiesName = EntitiesName = {}));
//# sourceMappingURL=enums.js.map