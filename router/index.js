import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './../store';
Vue.use(VueRouter);

//acl
import ProfileView from './../components/users/myProfile.vue';
import UserView from './../components/users/all.vue';
import UserEditView from './../components/users/editUserSources.vue';
import UserAddView from './../components/users/add.vue';
import RolesView from './../components/roles/all.vue';
import RoleCreateView from './../components/roles/create.vue';
import RoleEditView from './../components/roles/edit.vue';

//overall-reports
import OverallReports from './../components/overall-reports/reports.vue';
import ReportsAdblockView from './../components/overall-reports/reports-adblock.vue';
import ReportsPageTypeView from './../components/overall-reports/reports-pagetype.vue';
import ReportsTaboolaOrganicView from './../components/overall-reports/reports-taboola-organic.vue';
import ReportsHouseAdsView from './../components/overall-reports/reports-house-ads.vue';
import ReportsExitPercentageView from './../components/overall-reports/reports-exit-percentage.vue';
import ReportsContentTeamView from './../components/overall-reports/reports-content-team.vue';
import ReportsSourcesView from './../components/overall-reports/reports-sources.vue';

import TrafficsAll from './../components/traffics/all.vue';
import TrafficSourceView from './../components/traffics/single.vue';

//monetization
import AdOps from './../components/monetizations/adOps.vue';
import PercentageOfRevenueImps from './../components/monetizations/percentageOfRevenueImps.vue';
import Performance from './../components/monetizations/performance.vue';
import partnerRevenue from './../components/monetizations/partnerRevenue.vue';
import headerDiscrepancyReports from './../components/monetizations/headerDiscrepancyReports.vue';
import headerRevenue from './../components/monetizations/headerRevenue.vue';
import UnfilledImpressions from './../components/monetizations/unfilledImpressions.vue';
import DfpKeys from './../components/monetizations/DfpKeys.vue';
import DfpKeyValues from './../components/monetizations/DfpKeyValues.vue';

import NativeRevenueReports from './../components/monetizations/native-reports/all.vue';
import TaboolaRevenueReports from './../components/monetizations/native-reports/taboola.vue';
import RevcontentRevenueReports from './../components/monetizations/native-reports/revcontent.vue';
import MainMonetization from '../components/monetizations/main.vue';

import CustomMonetization from './../components/monetizations/custom/customPartners.vue';
import CustomMonetizationUnits from './../components/monetizations/custom/Units/customPartnersUnits.vue';

import SocialInfluencer from './../components/monetizations/SocialInfluencer.vue';

// Insights
import InsightsOverview from './../components/insights/overview.vue';
import InsightsSession from './../components/insights/session.vue';
import InsightsMonetization from './../components/insights/monetization.vue';

//integrattion
import Integrations from './../components/settings/integrations/integrations.vue';
import GeminiManageIntegrationsAccounts from './../components/settings/integrations/geminiManageIntegrations.vue';
import ManageIntegrationsAccounts from './../components/settings/integrations/manageIntegrations.vue';
import FacebookManageIntegrationsAccounts from './../components/settings/integrations/facebookManageIntegrations.vue';
import DFPIntegrationsAccounts from './../components/settings/integrations/dfpManageIntegrations.vue';
import TrafficPartnerSetup from './../components/settings/integrations/trafficPartners.vue';
import RevenuePartnerAndDfpAccountSetup from './../components/settings/integrations/revenuePartnerAndDfpAccounts.vue';
import CpcSettings from './../components/settings/cpcSettings/cpcSettings.vue';
import AppsScriptTriggers from './../components/settings/appsScript/index.vue';

//Partner Types
import PartnerTypes from './../components/settings/partners/types.vue';
import PartnerTypeCreate from './../components/settings/partners/createType.vue';

//mapping
import DFPIntegrationMappingGeneral from './../components/settings/dfp/mapping/general.vue';
import DFPIntegrationMappingSites from './../components/settings/dfp/mapping/availableSites.vue';
import DFPIntegrationMappingAdUnits from './../components/settings/dfp/mapping/adUnits.vue';
import DFPIntegrationMappingPartners from './../components/settings/dfp/mapping/Advertisers.vue';
import DFPIntegrationDfpAdUnits from './../components/settings/dfp/adUnits.vue';
import DFPIntegrationEdit from './../components/settings/dfp/editAccount.vue';
import PartnersIntegrationMappingGeneral from './../components/settings/partners/mapping/general.vue';
import PartnersIntegrationMappingDevices from './../components/settings/partners/mapping/adUnitDevice.vue';
import PartnersIntegrationMappingSizes from './../components/settings/partners/mapping/adUnitSizes.vue';
import PartnersIntegrationMappingSites from './../components/settings/partners/mapping/adUnitSites.vue';
import PartnersIntegrationMappingAdUnits from './../components/settings/partners/mapping/adUnits.vue';
import PartnersIntegrationAdUnits from './../components/settings/partners/adUnits.vue';

//gallery
import GalleryAlbums from './../components/settings/gallery/albums.vue';
import GalleryImages from './../components/settings/gallery/images.vue';
import ManageGalleryAlbum from './../components/settings/gallery/manageAlbum.vue';
import AddGalleryImage from './../components/settings/gallery/addImage.vue';
import EditGalleryImage from './../components/settings/gallery/editImage.vue';

//headlines
import HeadlineFolders from './../components/settings/headlines/folders.vue';
import ManageFolders from './../components/settings/headlines/manageFolder.vue';
import Headlines from './../components/settings/headlines/manage.vue';

//targeting
import FbTargeting from './../components/settings/targeting/FbTargeting.vue';



import PromotedContent from './../components/settings/promoted_content/promotedContent.vue';

import CampaignLogs from './../components/settings/logs/changeLogAll.vue';

/*New custom targeting library*/
import TargetingLibrary from './../components/settings/targeting/TargetingLibrary.vue';
import LibraryTargetingWizard from './../components/settings/targeting/EditLibrary/LibraryTargetingWizard.vue';

//campaign management
import AllCampaigns from './../components/campaings-management/AllCampaigns.vue';
import NewAllCampaigns from './../components/entities-management/campaigns/AllCampaigns.vue';

import FacebookAccounts from './../components/campaings-management/Facebook/FacebookAccounts.vue';
import OutbrainAccounts from './../components/campaings-management/Outbrain/OutbrainAccounts.vue';
import TaboolaAccounts from './../components/campaings-management/Taboola/TaboolaAccounts.vue';
import RevcontentAccounts from './../components/campaings-management/Revcontent/RevcontentAccounts.vue';
import GeminiAccounts from './../components/campaings-management/Gemini/GeminiAccounts.vue';

import GeminiCampaigns from './../components/campaings-management/Gemini/Campaigns/GeminiCampaigns.vue';
import TaboolaCampaigns from './../components/campaings-management/Taboola/Campaigns/TaboolaCampaigns.vue';
import OutbrainCampaigns from './../components/campaings-management/Outbrain/Campaigns/OutbrainCampaigns.vue';
import RevcontentCampaigns from './../components/campaings-management/Revcontent/Campaigns/RevcontentCampaigns.vue';
import FacebookCampaigns from './../components/campaings-management/Facebook/Campaigns/FacebookCampaigns.vue';

import GeminiAdGroups from './../components/campaings-management/Gemini/Groups/GeminiAdGroups.vue';
import CreateGeminiGroup from './../components/campaings-management/Gemini/Groups/CreateGeminiGroup.vue';
import FacebookAdsets from './../components/campaings-management/Facebook/Adsets/FacebookAdsets.vue';
import FacebookAdsetAds from './../components/campaings-management/Facebook/Ads/FacebookAdsetAds.vue';
import FacebookAccountAdsets from './../components/campaings-management/Facebook/Adsets/FacebookAccountAdsets.vue';

import OutbrainAds from './../components/campaings-management/Outbrain/Ads/OutbrainAds.vue';
import TaboolaAds from './../components/campaings-management/Taboola/Ads/TaboolaAds.vue';
import RevcontentAds from './../components/campaings-management/Revcontent/Ads/RevcontentAds.vue';
import FacebookCampaignAds from './../components/campaings-management/Facebook/Ads/FacebookCampaignAds.vue';
import GeminiAds from './../components/campaings-management/Gemini/Ads/GeminiAds.vue';
import GeminiGroupAds from './../components/campaings-management/Gemini/Ads/GeminiGroupAds.vue';

import EditCreative from './../components/creatives/EditCreative.vue';
import EditFacebookAd from './../components/campaings-management/Facebook/Ads/EditFacebookAd.vue';

import SourceList from  './../components/sources/all.vue';
import CreateSource from './../components/campaings-management/Wizard/CreateSource.vue';
import EditSource from './../components/campaings-management/Wizard/EditSource.vue';
import CustomCampaigns from './../components/campaings-management/Custom/Campaigns/CustomCampaigns.vue';
import CustomCreatives from './../components/campaings-management/Custom/Creatives/CustomCreatives.vue';

import CopyDynamicWidget from './../components/campaings-management/Wizard/CopyCampaign.vue';
import CopyFbAdsetsWidget from './../components/campaings-management/Facebook/Adsets/AdsetsCopy.vue'
import CopyFbAdsetAdsWidget from './../components/campaings-management/Facebook/Ads/CopyAdsetAds.vue'
import PendingCreativesWidget from './../components/campaings-management/Wizard/PendingCreatives.vue';
import WizardEntitiesErrors from './../components/campaings-management/Wizard/WizardEntitiesErrors/WizardEntitiesErrors.vue';
import CreativesErrors from './../components/campaings-management/Wizard/CreativesErrors.vue';
import CampaignsForAdsetsErrors from './../components/campaings-management/Wizard/CampaignsForAdsetsErrors.vue';
import AdsetsErrors from './../components/campaings-management/Wizard/AdsetsErrors.vue';

import CreationFBAdsDynamicWidget from './../components/campaings-management/Wizard/CreationFBAdsDynamicWidget.vue';

import CreationFBAdsetDynamicWidget from './../components/campaings-management/Wizard/CreationFBAdsetDynamicWidget.vue';
import CreationGemAdGroupDynamicWidget from './../components/campaings-management/Wizard/CreationGemAdGroupDynamicWidget.vue';
import CreationAdsDynamicWidget from './../components/campaings-management/Wizard/CreationAdsDynamicWidget.vue';
import CreationGEmAdsDynamicWidget from './../components/campaings-management/Wizard/CreationGEmAdsDynamicWidget.vue';
import CreationPinterestAdsDynamicWidget from './../components/campaings-management/Wizard/CreationPinterestAdsDynamicWidget.vue';
import CreationTwitterAdsDynamicWidget from './../components/campaings-management/Wizard/CreationTwitterAdsDynamicWidget.vue';
import CreationDynamicWidget from './../components/campaings-management/Wizard/CreationDynamicWidget.vue';
import CreateEntities from '../components/creation-wizard/CreateEntities.vue';
import CreationAdsMultipleDynamicWidget from './../components/campaings-management/Wizard/CreationAdsMultipleDynamicWidget.vue';
import CreationFBAccountsWidget from './../components/campaings-management/Wizard/CreationFBAccountsWidget.vue';
import CreationFbCampaignPromotedPageWidget from './../components/campaings-management/Wizard/CreationFbCampaignPromotedPageWidget.vue';
import FBPostDataByDay from './../components/campaings-management/Wizard/FacebookViralTools/FBPostDataByDay.vue';
import ScheduleCalendar from './../components/campaings-management/Wizard/FacebookViralTools/ScheduledCalendar/ScheduleCalendar.vue';
import CreationFBPostsDynamicWidget from './../components/campaings-management/Wizard/FacebookViralTools/PostsWizard/CreateUpdatePostsMain.vue';
import CreationFBPostsNew from './../components/campaings-management/fb-post-wizard/FbPostEditor.vue';
// import CreationFBPostsDynamicWidget from './../components/campaings-management/Wizard/FacebookViralTools/OldPostsWizard/CreationFBPostsDynamicWidget.vue';

import FacebookNotSharedAudiences from './../components/campaings-management/Facebook/Audiences/FacebookNotSharedAudiences.vue';
import FBPagesTable from './../components/campaings-management/Facebook/FBPagesTable.vue';

import PartnersUsers from './../components/partners/admin/users.vue';
import ManagePartner from './../components/partners/admin/manage.vue';
import AdminPartnerReports from './../components/partners/admin/reports.vue';

import TrendingContent from './../components/partners/trending-content/trendingContent.vue';
import UrlGenerator from './../components/partners/urlGenerator.vue';
import PartnerParamsWizard from './../components/partners/user/paramsWizard.vue';
import PartnerReports from './../components/partners/reports.vue';
import DashboardNew from './../components/new-dashboard/dashboard_new.vue';
import MediaBuys from './../components/new-traffic/mediaBuys.vue';

//traffic(custom)
import AddCustomTraffic from './../components/traffics/custom/addCustomTraffic.vue';
import AddCustomTrafficNew from './../components/traffics/custom/addCustomTrafficNew.vue';

import FbShowData from './../components/campaings-management/Wizard/FacebookViralTools/FbShowDataCount.vue';
import FbShowAnalytics from './../components/campaings-management/Wizard/FacebookViralTools/FbPagesShowDataAnalytics.vue';

/** CrowdTangle api */
import FbShowLists from '../components/crowdtangle/FbShowLists.vue';

//schedule
import Scheduler from './../components/schedule/scheduler.vue';
import rulesSchedule from './../components/schedule/rulesSchedule.vue';
import allScheduleTargets from './../components/schedule/allScheduleTargets.vue';

//unsupported images
import unsupportedImages from './../components/campaings-management/Wizard/unsuportedImages.vue';
import FbPageAnalyticsByType from './../components/campaings-management/Wizard/FacebookViralTools/FbPageAnalyticsByType.vue';
import FbPageQueue from './../components/campaings-management/Wizard/FacebookViralTools/FbPageQueue.vue';

//resizable table usage example
import ResizableTableExample from './../components/common/ResizableTable/TableUsageExample/Ads.vue'

//demo for common components
import Demo from './../components/demo/demo.vue'

const routes = [
    //overall reports
    {
        path: '/',
        component : OverallReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/unsupported-images',
        component : unsupportedImages,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/page-analytics',
        component : FbPageAnalyticsByType,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/page-queue',
        component : FbPageQueue,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/adblock',
        component : ReportsAdblockView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/pagetype',
        component : ReportsPageTypeView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/taboola-organic',
        component : ReportsTaboolaOrganicView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/house-ads',
        component : ReportsHouseAdsView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/exit-percentage',
        component : ReportsExitPercentageView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/content-team',
        component : ReportsContentTeamView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/sources/:source',
        component : ReportsSourcesView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },


    {
        path: '/traffics/custom/addNew',
            component : AddCustomTrafficNew,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('reports')){
                next();
            }
            next(false);
        }
    },
    //users
    {
        path: '/profile',
        component : ProfileView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('my_account')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/users/all',
        component : UserView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('users.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/users/edit/:userId',
        component : UserEditView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('users.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/users/add',
        component : UserAddView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('users.create')){
                next();
            }
            next(false);
        }
    },
    //roles
    {
        path: '/roles',
        component : RolesView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('roles.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/role/create',
        component : RoleCreateView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('roles.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/role/:roleId/edit',
        component : RoleEditView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('roles.edit')){
                next();
            }
            next(false);
        }
    },

    //media buy
    {
        path: '/traffics',
        component : TrafficsAll,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('traffic')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/traffics/sites/:source',
        component : TrafficSourceView,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('traffic')){
                next();
            }
            next(false);
        }
    },

    //custom traffic
    {
        path: '/traffics/custom/add',
        component : AddCustomTraffic,
        beforeEnter: (to, from, next) => {
            "use strict";
            if(Vue.hasPermission('traffic')){
                next();
            }
            next(false);
        }

    },

    //integration
    {
        path: '/settings/traffic-partner-setup/addaccount/gemini',
        component : GeminiManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/traffic-partner-setup/addaccount/facebook',
        component : FacebookManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/addaccount/dfp',
        component : DFPIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.dfp.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/traffic-partner-setup/addaccount/:account',
        component : ManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/traffic-partner-setup/editaccount/gemini/:accountId',
        component : GeminiManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.edit')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/traffic-partner-setup/editaccount/facebook/:accountId',
        component : FacebookManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.edit')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/traffic-partner-setup/editaccount/:account/:accountId',
        component : ManageIntegrationsAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.source.edit')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations',
        component : Integrations,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission(['settings.integration.dfp.view', 'settings.integration.source.view', 'settings.integration.mapping.view'])){
                next();
            }
            next(false);
        }
    },

    {
        path: '/settings/traffic-partner-setup',
        component : TrafficPartnerSetup,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission(['settings.integration.source.view'])){
                next();
            }
            next(false);
        }
    },

    {
        path: '/settings/revenue-partner-setup',
        component : RevenuePartnerAndDfpAccountSetup,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission(['settings.integration.dfp.view', 'settings.integration.mapping.view'])){
                next();
            }
            next(false);
        }
    },

    //partner types
    {
        path: '/settings/partner-types',
        component : PartnerTypes,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission(['setting.partner_types.view'])){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/partner-type/create',
        component : PartnerTypeCreate,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission(['setting.partner_types.create'])){
                next();
            }
            next(false);
        }
    },

    //mapping
    {
        path: '/settings/integrations/dfp/:networkCode/mapping',
        name: 'DFPIntegrationMappingGeneral',
        component: DFPIntegrationMappingGeneral,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/dfp/:networkCode/mapping/adunits',
        name: 'DFPIntegrationMappingAdUnits',
        component: DFPIntegrationMappingAdUnits,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/dfp/:networkCode/mapping/sites',
        name: 'DFPIntegrationMappingSites',
        component: DFPIntegrationMappingSites,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/dfp/:networkCode/mapping/advertisers',
        name: 'DFPIntegrationMappingPartners',
        component: DFPIntegrationMappingPartners,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/dfp/:networkCode/adunits',
        name: 'DFPIntegrationDfpAdUnits',
        component: DFPIntegrationDfpAdUnits,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/dfp/:networkCode/edit',
            name: 'DFPIntegrationEdit',
            component: DFPIntegrationEdit,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.dfp.edit')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/mapping',
        name: 'PartnersIntegrationMappingGeneral',
        component: PartnersIntegrationMappingGeneral,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/mapping/adunits',
        name: 'PartnersIntegrationMappingAdUnits',
        component: PartnersIntegrationMappingAdUnits,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/mapping/sizes',
        name: 'PartnersIntegrationMappingSizes',
        component: PartnersIntegrationMappingSizes,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/mapping/sites',
        name: 'PartnersIntegrationMappingSites',
        component: PartnersIntegrationMappingSites,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/mapping/devices',
        name: 'PartnersIntegrationMappingDevices',
        component: PartnersIntegrationMappingDevices,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/integrations/partner/:partnerId/adunits',
        name: 'PartnersIntegrationAdUnits',
        component: PartnersIntegrationAdUnits,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/cpc-settings',
        name: 'CpcSettings',
        component: CpcSettings,
        beforeEnter (to, from, next) {
            if(Vue.hasPermission('settings.integration.cpc.edit')){
                next();
            }
            next(false);
        }
    },
    //Apps Script
    {
        path: '/settings/apps-script',
        name: 'AppsScriptTriggers',
        component: AppsScriptTriggers,
        beforeEnter (to, from, next) {
            if(Vue.hasPermission('settings.appsscript.manage')){
                next();
            }
            next(false);
        }
    },

    //monetization
    {
        path: '/monetization/dfp-keys',
        component : DfpKeys,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/dfpKeyValues/:key',
            component : DfpKeyValues,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    //
    {
        path: '/monetization/ad-ops',
        component : AdOps,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/percentage-revenue-imp',
        component : PercentageOfRevenueImps,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/header-discrepancy',
        component : headerDiscrepancyReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/header-revenue',
        component : headerRevenue,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/performance',
        component : Performance,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/revenue',
        component : partnerRevenue,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/unfilled-impressions',
        component : UnfilledImpressions,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/monetization/native/all',
        component : NativeRevenueReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/native/taboola',
        component : TaboolaRevenueReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/native/revcontent',
        component : RevcontentRevenueReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/custom',
        component : CustomMonetization,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/custom-units',
        component : CustomMonetizationUnits,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.integration.mapping.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization',
        component : MainMonetization,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/monetization/social-influencer',
        component : SocialInfluencer,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('monetization')){
                next();
            }
            next(false);
        }
    },

    //image gallery
    {
        path: '/settings/gallery/editalbum/:album_id',
        component : ManageGalleryAlbum,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/gallery/addalbum',
        component : ManageGalleryAlbum,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/gallery/:album_id/editimage/:image_id',
        component : EditGalleryImage,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/gallery/:album_id/addimage',
        component : AddGalleryImage,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/gallery/:album_id',
        component : GalleryImages,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/gallery',
        component : GalleryAlbums,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },

    // Insights start
    {
        path: '/insights',
            component : InsightsOverview,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('insights.session_data.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/insights/monetization',
            component : InsightsMonetization,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('insights.monetization.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/insights/session',
            component : InsightsSession,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('insights.session_data.view')){
                next();
            }
            next(false);
        }
    },
    // Insights end

    //end image gallery
    //headline
    {
        path: '/settings/headlines/editfolder/:folder_id',
        component : ManageFolders,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/headlines/addfolder',
        component : ManageFolders,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/headlines/:folder_id',
        component : Headlines,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/settings/headline',
        component : HeadlineFolders,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    //end headline
    //targeting
    {
        path: '/settings/fb_targeting',
        component : FbTargeting,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    // {
    //     path: '/settings/fb_targeting/:libraryId',
    //     name: 'EditTargetingLibrary',
    //     component : EditTargetingLibrary,
    //     beforeEnter: (to, from, next) => {
    //         if(Vue.hasPermission('library')){
    //             next();
    //         }
    //         next(false);
    //     }
    // },
    {
        path: '/settings/targeting/:source?',
        component : TargetingLibrary,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/settings/targeting/:source/:libraryId',
        name: 'EditAllTargetingLibrary',
        component : LibraryTargetingWizard,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('library')){
                next();
            }
            next(false);
        }
    },
    // end targeting
    {
        path: '/settings/promoted_content',
        component : PromotedContent,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    //promoted content / admin
    {
        path: '/settings/change-logs',
        name: 'settings.change-logs',
        component: CampaignLogs,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('settings.change_logs.view')){
                next();
            }
            next(false);
        }
    },
    //end headline / admin

    //campaign management
    {
        path: '/campaigns-management/campaigns/all',
        name: 'campaigns.all',
        component : AllCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    //campaign management
    {
        path: '/campaigns-management/campaigns-all',
        children : [
            {
                path:  ':sourceId',
                component : NewAllCampaigns
            },
        ],
        component : NewAllCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/accounts/outbrain',
        component : OutbrainAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/accounts/taboola',
        component : TaboolaAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/accounts/revcontent',
        component : RevcontentAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/accounts/gemini',
        component : GeminiAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/accounts/facebook',
        component : FacebookAccounts,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/outbrain/:accountId',
        component : OutbrainCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/gemini/:accountId',
        component : GeminiCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/taboola/:accountId',
        component : TaboolaCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/revcontent/:accountId',
        component : RevcontentCampaigns,
        children : [
            {
                path: ':offset/:limit',
                component : RevcontentCampaigns
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/facebook/:accountId',
        component : FacebookCampaigns,
        children : [
            {
                path: ':offset/:limit',
                component : FacebookCampaigns
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/gemini/adgroups/:accountId/:campaignId',
        name : 'management.geimini.ads.groups',
        component : GeminiAdGroups,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/gemini/adgroups/create/:accountId/:campaignId',
        component : CreateGeminiGroup,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/facebook/adsets/:campaignId',
        component : FacebookAdsets,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/facebook/account-adsets/:accountId',
        component : FacebookAccountAdsets,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/facebook/audiences/not-shared',
        component : FacebookNotSharedAudiences,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/facebook/adset/ads/:adsetId',
        component : FacebookAdsetAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/gemini/ads/by-group/:adgroupId',
        component : GeminiGroupAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/creative/:source/:id',
        component : EditCreative,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/campaigns-management/outbrain/ads/:campaignId',
        component : OutbrainAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/taboola/ads/:campaignId',
        component : TaboolaAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/revcontent/ads/:campaignId',
        component : RevcontentAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/facebook/ads/:campaignId',
        component : FacebookCampaignAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/gemini/ads/:campaignId',
        component : GeminiAds,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/campaigns-management/facebook/ad/edit/:accountId/:campaignId/:adId',
        component : EditFacebookAd,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    //end campaign management

    //wizard
    {
        path: '/campaigns-management/wizard/create/fb-ads',
        component : CreationFBAdsDynamicWidget,
        children : [
            {
                path:  ':campaignId',
                component : CreationFBAdsDynamicWidget
            },
            {
                path: ':campaignId/related-img/:imageId',
                component : CreationFBAdsDynamicWidget
            },
            {
                path: ':campaignId/related-head/:headlineId',
                component : CreationFBAdsDynamicWidget
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/fb-accounts',
        component : CreationFBAccountsWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/fb-posts-old',
        component : CreationFBPostsDynamicWidget,
        children : [
            {
                path: ':domainId/:postId',
                component : CreationFBPostsDynamicWidget
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/fb-posts',
        component : CreationFBPostsNew,
        children : [
            {
                path: ':domainId/:postId',
                component : CreationFBPostsNew
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/fb-posts',
        component : FbShowData,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/schedule-calendar',
        component : ScheduleCalendar,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/report/fb-analytics',
        component : FbShowAnalytics,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/report/fb-all-pages',
        component : FBPagesTable,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/ad-groups',
        name: 'wizard/group/create',
        component : CreationFBAdsetDynamicWidget,
        children : [
            {
                path: ':campaignId',
                component : CreationFBAdsetDynamicWidget
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/gem-ad-groups/:campaignId?',
        name: 'wizard/group/gemini/create',
        component : CreationGemAdGroupDynamicWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    /*{
        path: '/campaigns-management/wizard/create/ads',
        name: 'wizard/ads/create',
        component : CreationAdsDynamicWidget,
        children : [
            {
                path: ':campaignId',
                component : CreationAdsDynamicWidget
            },
            {
                path: ':campaignId/related-img/:imageId',
                name: 'wizard/ads/related-img',
                component : CreationAdsDynamicWidget
            },
            {
                path: ':campaignId/related-head/:headlineId',
                name: 'wizard/ads/related-head',
                component : CreationAdsDynamicWidget
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },*/
    {
        path: '/campaigns-management/wizard/create/gemini-ads',
        component : CreationGEmAdsDynamicWidget,
        children : [
            {
                path: ':campaignId',
                component : CreationGEmAdsDynamicWidget
            },
            {
                path: ':campaignId/related-img/:imageId',
                component : CreationGEmAdsDynamicWidget
            },
            {
                path: ':campaignId/related-head/:headlineId',
                component : CreationGEmAdsDynamicWidget
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/pinterest-ads',
        component : CreationPinterestAdsDynamicWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/twitter-ads',
        component : CreationTwitterAdsDynamicWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/ads-multiple',
        name: 'wizard/ads/multiple-create',
        component : CreationAdsMultipleDynamicWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/ads',
        component : CreateEntities,
        children : [
            {
                path: 'source/:wizSourceId',
                component: CreateEntities,
                meta:{
                    'tab': 'ads',
                }
            },
            {
                path: ':campaignId',
                component: CreateEntities,
                meta:{
                    'tab': 'ads',
                }
            },
            {
                path: ':campaignId/related-img/:imageId',
                name: 'wizard/ads/related-img',
                component : CreationAdsDynamicWidget
            },
            {
                path: ':campaignId/related-head/:headlineId',
                name: 'wizard/ads/related-head',
                component : CreationAdsDynamicWidget
            }
        ],
        meta:{
            'tab': 'ads',
        },
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create/:sourceId',
            component : CreateEntities,
            name: 'CreationWizard',
            children : [
            {
                path: ':accountId',
                component: CreateEntities,
            }
        ],
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/create-fb-campaign-promoted-page',
        component : CreationFbCampaignPromotedPageWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },

    {
        path: '/campaigns-management/wizard/copy-fb-adsets/:oldCampaignId/:newCampaignId',
        name: 'wizard.fb-adsets.copy',
        component : CopyFbAdsetsWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/copy-fb-adset-ads/:newCampaignId/:newAdsetId',
        name: 'wizard.fb-adset-ads.copy',
        component : CopyFbAdsetAdsWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/status/ads',
        name: 'wizard/ads/status',
        component : PendingCreativesWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/not-created-ads/:campaignId',
        name: 'notCreatedCreatives',
        component : CreativesErrors,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/wizard-entities-errors',
        name: 'WizardEntitiesErrors',
        component : WizardEntitiesErrors,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/not-created-adsets/:campaignId',
        name: 'notCreatedAdsets',
        component : AdsetsErrors,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/not-created-adsets',
        name: 'campaignsForNotCreatedAdsets',
        component : CampaignsForAdsetsErrors,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/campaigns/:source',
        name: 'management.campaigns.custom',
        component : CustomCampaigns,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/source/create',
        name: 'wizard/source/create',
        component: CreateSource,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/wizard/:campaignId',
        name: 'wizard.campaigns.copy',
        component : CopyDynamicWidget,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/campaigns-management/:source/ads/:campaignId',
        name: 'management.creatives.custom',
        component : CustomCreatives,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    //end wizard

    // Source Wizard

    {
        path: '/sources',
            name: 'sources',
            component: SourceList,
            beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('custom_source.create')){
                next();
            }
            next(false);
        }
    },

    // End Source Wizard

    // Partners admin
    {
        path: '/partners/users',
        component : PartnersUsers,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('users.view')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/partners/manage/:userId',
        component : ManagePartner,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('users.edit')){
                next();
            }
            next(false);
        }
    },
    {   //note: Link to this route removed from navbar
        path: '/partners/admin/reports',
        component : AdminPartnerReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.reporting.revenue')){
                next();
            }
            next(false);
        }
    },
    // Partners admin end

    // Partners User
    {
        path: '/partners/tools/tracking-codes',
        name : 'partners.tools.tracking-codes',
        component : PartnerParamsWizard,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.tools.custom_source.create')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/partners/tools/trending-content',
        name : 'partners.tools.trending-content',
        component : TrendingContent,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.tools.trending_posts')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/partners/tools/url-generator',
        name : 'partners.tools.url-generator',
        component : UrlGenerator,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.tools.url_generator')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/partners/reporting/revenue',
        name : 'partners.reporting.revenue',
        component : PartnerReports,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.reporting.revenue')){
                next();
            }
            next(false);
        }
    },
    // Partners User end

    //New Dashboard
    {
        path: '/partners/reporting/dash_new',
        name : 'partners.reporting.dashboard_new',
        component : DashboardNew,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.reporting.revenue')){
                next();
            }
            next(false);
        }
    },
    //New Dashboard

    //New Media Buy
    {
        path: '/partners/reporting/media_buys',
        name : 'partners.reporting.media_buys',
        component : MediaBuys,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('partner.reporting.revenue')){
                next();
            }
            next(false);
        }
    },
    //New Dashboard

    /* Shedule start */
    {
        path: '/schedule/edit',
        component: Scheduler,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/schedule/schedule-rules',
        component: rulesSchedule,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    {
        path: '/schedule/schedule-targets',
        component: allScheduleTargets,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    /* Shedule end */
    {
        path: '/crowdTangle/fb-lists',
        component : FbShowLists,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    /* resizable table example  */
    {
        path: '/resizable-table-example',
        component : ResizableTableExample,
        beforeEnter: (to, from, next) => {
            if(Vue.hasPermission('campaign_management')){
                next();
            }
            next(false);
        }
    },
    /* demo for common components  */
    {
        path: '/demo-common-components',
        component : Demo,
        beforeEnter: (to, from, next) => {console.log(store.state.userInfo);
            if(Vue.hasPermission('users.edit')){
                next();
            }
            next(false);
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    base: 'dashboard'
});

//reset breadcrumbs
router.beforeEach((to, from, next) => {
    if(to.path != from.path){
        store.dispatch('setBreadcrumbs', []);
        store.dispatch('setPageTitle', '');
    }
    next();
});

/*router.beforeEach(transition => {
    if (!transition.to || !transition.to.path || transition.to.path == '') {
        router.push('/');
    } else {
        transition.next();
    }
});*/

export default router;
