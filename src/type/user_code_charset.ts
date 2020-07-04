// Copyright (C) 2020 Authlete, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import { BaseExtendedEnum } from './base_extended_enum.ts';


/**
 * Character set for end-user verification codes (`user_code`) in Device
 * Flow.
 *
 * See "6.1. User Code Recommendations" in [OAuth 2.0 Device Authorization
 * Grant](https://datatracker.ietf.org/doc/draft-ietf-oauth-device-flow/?include_text=1)
 * for recommendations for user code values.
 */
export class UserCodeCharset extends BaseExtendedEnum
{
    /**
     * 'BCDFGHJKLMNPQRSTVWXZ', 20 upper-case non-vowel characters.
     */
    public static readonly BASE20 = new UserCodeCharset(1, 'BCDFGHJKLMNPQRSTVWXZ');


    /**
     * '0123456789', 10 digit characters from '0' to '9'.
     */
    public static readonly NUMERIC = new UserCodeCharset(2, '0123456789');
}