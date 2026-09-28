import { createIntegrationCard } from './IntegrationCard';
import { createZoomSettings } from './ZoomSettings';
import { createAiModelSettings } from './AiModelSettings';
import { createGoogleMeetSettings } from './GoogleMeetSettings';
import { createGoogleSignInSettings } from './GoogleSignInSettings';
import { createIntegrationConfig } from './IntegrationConfig';
import { createIntegrationsPage } from './IntegrationsPage';
export const integrationComponents = {
  IntegrationCard: createIntegrationCard,
  ZoomSettings: createZoomSettings,
  AiModelSettings: createAiModelSettings,
  GoogleMeetSettings: createGoogleMeetSettings,
  GoogleSignInSettings: createGoogleSignInSettings,
  IntegrationConfig: createIntegrationConfig,
  IntegrationsPage: createIntegrationsPage,
};
