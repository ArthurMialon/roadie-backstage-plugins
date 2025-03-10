/*
 * Copyright 2020 RoadieHQ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from "@backstage/catalog-model";
import { useGitHubConfig } from "./useGitHubConfig";

export const useUrl = (entity: Entity) => {

    const targetProviderConfig = useGitHubConfig(entity);
    const baseUrl = targetProviderConfig?.getOptionalString('apiBaseUrl') || 'https://api.github.com';
    const hostname = targetProviderConfig?.getOptionalString('host') || 'github.com';

    return {
        hostname,
        baseUrl,
    };
}
